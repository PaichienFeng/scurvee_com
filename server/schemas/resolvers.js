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
    today_tasks: async (parent, {teamMemberId, task_date}, context) => {
      if (context.user){

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
    addProject: async (parent, {name, client, budget, sow_title, sow_detail, background_color, image_link}, context) => {
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
          {_id: teamMemberId},
          {
            $addToSet:{
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
    addTeamAssignment: async (parent, {teamMemberId, projectId, description, planned_duration, task_date }, context) => {
      if (context.user) {
        const parsedTaskDate = new Date(task_date);
        const task = await Task.create({
          teamMember: teamMemberId,
          project: projectId,
          description,
          planned_duration,
          task_date: parsedTaskDate
        });

        return task;
      }
      throw AuthenticationError;
    },
    addTeamTask: async (parent, { teamMemberId, projectId, task_date, acutal_duration}, context) => {
      if (context.user) {
        const parsedTaskDate = new Date(task_date);
        return Task.findOneAndUpdate(
          { teamMember: teamMemberId,
            project: projectId,
            task_date: parsedTaskDate
          },
          {
            $set: {acutal_duration,}
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
