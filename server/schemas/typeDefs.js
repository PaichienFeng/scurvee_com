const typeDefs = `
  type TeamMember {
    _id: ID
    username: String
    title: String
    email: String
    password: String
    rate: Float
    background_color: String
    image_link: String
    projects: [Project]!
  }

  type Project {
    _id: ID
    name: String
    client: String
    budget: Float
    sow_title: String
    sow_detail: String
    background_color: String
    createdAt: DateTime  
    teamMembers: [TeamMember]!
  }

  type Task {
    _id: ID
    teamMembers: TeamMember
    projects: Project
    description: String
    planned_duration: Float
    acutal_duration: Float
    task_date: DateTime  
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    teamMembers: [TeamMember]
    teamMember(teamMemberId: String!): TeamMember
    projects: [Project]
    project(projectId: ID!): Project
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
