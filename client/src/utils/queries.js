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
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
