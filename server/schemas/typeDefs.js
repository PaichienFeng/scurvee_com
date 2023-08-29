const typeDefs = `

  scalar DateTime

  type TeamMember {
    _id: ID
    username: String
    title: String
    email: String
    password: String
    rate: Float
    background_color: String
    image_link: String
    projects: [Project]
  }

  type Project {
    _id: ID
    name: String
    client: String
    budget: Float
    sow_title: String
    sow_detail: String
    background_color: String
    image_link: String
    createdAt: String  
    teamMembers: [TeamMember]
  }

  type Task {
    _id: ID
    teamMember: TeamMember
    project: Project
    description: String
    plannedDuration: Float
    acutalDuration: Float
    taskDate: String  
  }

  type Auth {
    token: ID!
    teamMember: TeamMember
  }

  type Query {
    teamMembers: [TeamMember]
    teamMember(teamMemberId: ID!): TeamMember
    projects: [Project]
    project(projectId: ID!): Project
    today_tasks(teamMemberId: ID!, task_date: String!): Task
  }

  type Mutation {
    addTeamMember(username: String!, title: String!, email: String!, password: String!, rate: Float!, background_color: String!, image_link: String!, ): Auth
    login(email: String!, password: String!): Auth
    addProject(name: String!, client: String!, budget: Float!, sow_title: String!, sow_detail: String!, background_color: String!, image_link: String!): Project
    addProjectTeam(projectId: ID!, teamMemberId: ID!): Project
    addTeamAssignment(teamMemberId: ID!, projectId: ID!, description: String!, planned_duration: Float!, task_date: String! ): Task
    addTeamTask(teamMemberId: ID!, projectId: ID!, task_date: String!, actual_duration: Float!): Task
  }
`;

module.exports = typeDefs;
