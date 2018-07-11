import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Home = ({ data: { getAllUsers = [] } }) => {
  console.log('props', getAllUsers);
  return getAllUsers.map(u => <h1 key={u.id}>{u.email}</h1>);
};

const allUsersQuery = gql`
  {
    getAllUsers {
      id
      email
    }
  }
`;

export default graphql(allUsersQuery)(Home);