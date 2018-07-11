import gql from 'graphql-tag';
import { Mutation } from "react-apollo";
import React from "react";

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password, companyId: $companyId, role: $role)
  }
`;

export const RegisterUser = ({children})=>(
  <Mutation mutation={registerMutation} >
    {
      (createUser, loading)=>{
        
        return children(createUser,loading);
      }
    }
  </Mutation>
);
