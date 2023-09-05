const { TeamMember, Project, Task } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    teamMembers: async (parent, args, context) => {
      if (context.user) {
        try {
          const teamMembers= await TeamMember.find().populate('projects');
        return teamMembers;
        } catch (error) {
          console.error("Error fetching team members", error);
          throw new Error("Error fetching team members")
        }
      }
      throw AuthenticationError;
    },
    teamMember: async (parent, { teamMemberId }, context) => {
      // console.log('haha');
      if (context.user) {
        try {
         const teamMember= TeamMember.findById(teamMemberId).populate('projects');
        return teamMember;

        } catch (error) {
          console.log("Error fecthing team member", error);
          throw new Error("Error fecthing team member");
        }
      }
      throw AuthenticationError;
    },
    projects: async (parent, args, context) => {
      if (context.user) {
        try {
          const projects= Project.find().populate('teamMembers');
          return projects;
        } catch (error) {
          console.log("Error fecthing projects", error);
          throw new Error("Error fecthing projects");
        }
      }
      throw AuthenticationError;
    },
    project: async (parent, { projectId }, context) => {
      if (context.user) {
        try {
          const project = Project.findById(projectId).populate('teamMembers');
          return project;
        } catch (error) {
          console.log("Error fecthing project", error);
          throw new Error("Error fecthing project");
        };
      }
      throw AuthenticationError;
    },
    today_tasks: async (parent, { teamMemberId, task_date }, context) => {
      // console.log(teamMemberId, task_date);
      if (context.user) {
        try {
          const parsedTaskDate = new Date(task_date);
          const today_tasks= await Task.find({
            teamMember: teamMemberId,
            task_date: parsedTaskDate
          }).populate('project');

          return today_tasks;
        } catch (error) {
          console.error("Error fetching today_tasks",error);
          throw new Error("Error fetching today_tasks");
        }
      }
      throw AuthenticationError;
    },
    weekTask: async (parent, { projectId, startDate, endDate }, context) => {
      // console.log(projectId, startDate, endDate);
      if (context.user) {
        try {
          const parsedStartDate = new Date(startDate);
          const parsedEndDate = new Date(endDate);
          const weekTask= await Task.find({
            project: projectId,
            task_date: { $gte: parsedStartDate, $lte:parsedEndDate}
          }).populate('teamMember');
          // console.log(weekTask);

          return weekTask;
        } catch (error) {
          console.error("error fetching weekTask",error);
          throw new Error("Error fetching weekTask");
        }
      }
      throw AuthenticationError;
    },
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
      return {teamMember };
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
        try {
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
        } catch (error) {
          console.log('failed to add project', error);
          throw new Error('failed to add project');
        }
      }
      throw AuthenticationError;
    },
    addProjectTeam: async (parent, { projectId, teamMemberId }, context) => {
      if (context.user) {
        try {
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
        } catch (error) {
          console.log("Failed to add prject team", error);
          throw new Error("Failed to add prject team")
        }
      }
      throw AuthenticationError;
    },
    addTeamAssignment: async (parent, args, context) => {
      // console.log(args.planned_duration)
      const parsedTaskDate = new Date(args.task_date);
      if (context.user) {
        try {
          const existingTask = await Task.findOne({
            teamMember: args.teamMemberId,
            project: args.projectId,
            task_date: parsedTaskDate
          });
          if(existingTask){
            throw new Error("Error, duplicate task!")
          };
          const task = await Task.create({
            teamMember: args.teamMemberId,
            project: args.projectId,
            description: args.description,
            planned_duration: args.planned_duration,
            task_date: parsedTaskDate
          });
  
          return task;
        } catch (error) {
          console.log('Failed to add team assignment', error);
          throw new Error('Failed to add team assignment');
        }
      }
      throw AuthenticationError;
    },
    addTeamTask: async (parent, { teamMemberId, projectId, task_date, actual_duration }, context) => {
      if (context.user) {
        const parsedTaskDate = new Date(task_date);
        try {
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
          }
          return updatedTask;
        } catch (error) {
          console.log('Failed to add team task', error);
          throw new Error ('Failed to add team task')
        }
      }
      throw AuthenticationError;
    },

    deleteTeamMember: async (parent, {teamMemberId}, context) => {
      if (context.user){
        try {
          const deletedTeamMember = await TeamMember.findByIdAndDelete(teamMemberId);
          await Project.updateMany(
            {teamMembers: teamMemberId},
            {$pull: {teamMembers: teamMemberId}}
          );
          return deletedTeamMember;
        } catch (error) {
          console.log('Failed to delete team member', error);
          throw new Error('Failed to delete team member')
        }
      }
      throw AuthenticationError
    }
  },
};

module.exports = resolvers;
