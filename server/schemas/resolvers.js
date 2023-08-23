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
        return Thought.findById(projectId).populate('teamMembers');
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
    addProject: async (parent, {name, client, budget, sow_title, sow_detail, background_color}, context) => {
      if (context.user) {
        const project = await Project.create({
          name,
          client,
          budget,
          sow_title,
          sow_detail,
          background_color,
        });

        return project;
      }
      throw AuthenticationError;
    },
    addComment: async (parent, { thoughtId, commentText }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return thought;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { thoughtId, commentId }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
