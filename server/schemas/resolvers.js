const { TeamMember, Project, Task } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    teamMembers: async (parent, args, context) => {
      if (context.user) {
        return TeamMember.find().populate('projects');
      }
      throw AuthenticationError;
    },
    teamMember: async (parent, { teamMemberId }, context) => {
      // console.log('haha');
      if (context.user) {
        return TeamMember.findById(teamMemberId).populate('projects');
      }
      throw AuthenticationError;
    },
    projects: async (parent, args, context) => {
      if (context.user) {
        return Project.find().populate('teamMembers');
      }
      throw AuthenticationError;
    },
    project: async (parent, { projectId }, context) => {
      if (context.user) {
        return Project.findById(projectId).populate('teamMembers');
      }
      throw AuthenticationError;
    },
    today_tasks: async (parent, { teamMemberId, task_date }, context) => {
      if (context.user) {

        const parsedTaskDate = new Date(task_date);
        return Task.find({
          teamMember: teamMemberId,
          task_date: parsedTaskDate
        })
      }
      throw AuthenticationError;

    }
  },

  Mutation: {
    addTeamMember: async (parent, { username, title, email, password, rate, background_color, image_link }) => {
      const teamMember = await TeamMember.create(
        {
          username,
          title,
          email,
          password,
          rate,
          background_color,
          image_link
        });
      const token = signToken(teamMember);
      return { token, teamMember };
    },
    login: async (parent, { email, password }) => {
      const teamMember = await TeamMember.findOne({ email });

      if (!teamMember) {
        throw AuthenticationError;
      }

      const correctPw = await teamMember.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(teamMember);

      return { token, teamMember };
    },
    addProject: async (parent, { name, client, budget, sow_title, sow_detail, background_color, image_link }, context) => {
      if (context.user) {
        const project = await Project.create({
          name,
          client,
          budget,
          sow_title,
          sow_detail,
          background_color,
          image_link
        });
        // console.log(project);
        return project;
      }
      throw AuthenticationError;
    },
    addProjectTeam: async (parent, { projectId, teamMemberId }, context) => {
      if (context.user) {
        const project = await Project.findOneAndUpdate(
          { _id: projectId },
          {
            $addToSet: {
              teamMembers: teamMemberId,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );

        await TeamMember.findOneAndUpdate(
          { _id: teamMemberId },
          {
            $addToSet: {
              projects: projectId,
            }
          },
          {
            new: true,
            runValidators: true,
          }
        );

        return project;

      }
      throw AuthenticationError;
    },
    addTeamAssignment: async (parent, args, context) => {
      console.log(args.planned_duration)
      const parsedTaskDate = new Date(args.task_date);
      if (context.user) {
        const task = await Task.create({
          teamMember: args.teamMemberId,
          project: args.projectId,
          description: args.description,
          planned_duration: args.planned_duration,
          task_date: parsedTaskDate
        });

        return task;
      }
      throw AuthenticationError;
    },
    addTeamTask: async (parent, { teamMemberId, projectId, task_date, actual_duration }, context) => {
      if (context.user) {
        const parsedTaskDate = new Date(task_date);

        const updatedTask = Task.findOneAndUpdate(
          {
            teamMember: teamMemberId,
            project: projectId,
            task_date: parsedTaskDate
          },
          {
            $set: {actual_duration: actual_duration}
          },
          { new: true }
        );
        if(!updatedTask){
          throw new Error("Task not found")
        }else{
          console.log(updatedTask);
        }
        return updatedTask;
      }
      throw AuthenticationError;
    },

    deleteTeamMember: async (parent, {teamMemberId}, context) => {
      if (context.user){
        const deletedTeamMember = await TeamMember.findByIdAndDelete(teamMemberId);

        await Project.updateMany(
          {teamMembers: teamMemberId},
          {$pull: {teamMembers: teamMemberId}}
        );

        return deletedTeamMember;
      }
      throw AuthenticationError
    }
  },
};

module.exports = resolvers;
