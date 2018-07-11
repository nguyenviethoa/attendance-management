import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

const allUsersQuery = gql`
  {
    getAllUsers {
      id
      email
    }
  }
`;

export const AllUserQuery = ({ children }) => {
  return (
    <Query
      query={allUsersQuery}
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data, networkStatus }) => 
      {
        if (networkStatus === 4) return (<h1>{networkStatus}</h1>);
        if (loading) return (<h1>{loading}</h1>);
        if (error) return (<h1>{error}</h1>);
        
        return children(data);
      }}
    </Query>
  );
};
