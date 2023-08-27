import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      teamMember {
      _id
      username
      title
      email
      password
      rate
      background_color
      image_link
      projects {
        _id
        name
        client
        budget
        sow_title
        sow_detail
        background_color
      }
    }
    }
  }
`;

export const ADD_TEAMMEMBER = gql`
  mutation addTeamMember($username: String!, $title: String!, $email: String!, $password: String!, $rate: Float!, $background_color: String!, $image_link: String!, ) {
    addTeamMember(username: $username, title: $title, email: $email, password: $password, rate: $rate, background_color: $background_color, image_link: $image_link) 
    {
      _id
      username
      title
      email
      password
      rate
      background_color
      image_link
      projects {
        _id
        name
        client
        budget
        sow_title
        sow_detail
        background_color
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($name: String!, $client: String!, $budget: Float!, $sow_title: String!, $sow_detail: String!, $background_color: String!) {
    addProject(name: $name, client: $client, budget: $budget, sow_title: $sow_title, sow_detail: $sow_detail, background_color: $background_color) {
      _id
      name
      client
      budget
      sow_title
      sow_detail
      background_color
      teamMembers {
      _id
      username
      title
      email
      password
      rate
      background_color
      image_link
      }
    }
  }
`;

export const ADD_PROJECTTEAM = gql`
  mutation addProjectTeam($projectId: ID!, $teamMemberId: ID!) {
    addProjectTeam(projectId: $projectId, teamMemberId: $teamMemberId) {
      _id
      name
      client
      budget
      sow_title
      sow_detail
      background_color
      teamMembers {
      _id
      username
      title
      email
      password
      rate
      background_color
      image_link
      }
    }
  }
`;

export const ADD_TEAMASSIGNMENT = gql`
  mutation addTeamAssignment($teamMemberId: ID!, $projectId: ID!, $description: String!, $planned_duration: Float!, $acutal_duration: Float!, $task_date: String!) {
    addTeamAssignment(teamMemberId: $teamMemberId, projectId: $projectId, description: $description, planned_duration: $planned_duration, acutal_duration: $acutal_duration, task_date: $task_date) {
      _id
      teamMember
      project
      description 
      planned_duration
      acutal_duration
      task_date
    }
  }
`;

export const ADD_TEAMTASK = gql`
  mutation addTeamTask($teamMemberId: ID!, $projectId: ID!, $task_date: String!, $acutal_duration: Float!) {
    addTeamTask(teamMemberId: $teamMemberId, projectId: $projectId, task_date: $task_date, acutal_duration: $acutal_duration) {
      _id
      teamMember
      project
      description 
      planned_duration
      acutal_duration
      task_date
    }
  }
`;