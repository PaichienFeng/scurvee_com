import { gql } from '@apollo/client';

export const QUERY_TEAMMEMBERS = gql`
  query teamMembers {
    teamMembers {
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
        image_link
      }
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query projects {
    projects {
      _id
      name
      client
      budget
      sow_title
      sow_detail
      background_color
      image_link
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

export const QUERY_TEAMMEMBER = gql`
  query teamMember($teamMemberId: ID!) {
    teamMember(teamMemberId: $teamMemberId) {
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
        image_link
      }
    }
  }
`;


export const QUERY_PROJECT = gql`
  query project($projectId: ID!) {
    project(projectId: $projectId) {
    _id
    name
    client
    budget
    sow_title
    sow_detail
    background_color
    image_link
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



export const QUERY_TODAY_TASK = gql`
  query today_tasks ($teamMemberId: ID!, $taskDate: String!){
    today_tasks (teamMemberId: $teamMemberId, task_date: $taskDate) {
      _id
      project {
        name
      }
      planned_duration
      actual_duration
      task_date
    }
  }
`;


export const QUERY_WEEKTASK= gql`
  query today_tasks($projectId: ID!, $startDate: String!, $endDate: String!) {
  weekTask (projectId: $projectId, startDate: $startDate, endDate: $endDate) {
    teamMember {
      rate
    }
    planned_duration
    actual_duration
    task_date
  }
}
`;