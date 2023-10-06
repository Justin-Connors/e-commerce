import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query Query {
    user {
      _id
      firstName
      lastName
      email
      bio
      profilePicUrl
      bannerUrl
    }
  }
`;

export const QUERY_USER_BY_ID = gql`
  query Query($userId: ID) {
    userById(userId: $userId) {
      _id
      firstName
      lastName
      bio
      profilePicUrl
      bannerUrl
    }
  }
`;
