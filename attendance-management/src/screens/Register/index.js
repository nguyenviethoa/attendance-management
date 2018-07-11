import React from 'react';
import { Button, Input, Container, Header } from 'semantic-ui-react';

import { RegisterUser } from './mutations';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    companyId: 2,
    role: 'NORMAL'
  };

  onSubmit = async (createUser) => {
    const response = await createUser({
      variables: this.state,
    });

    console.log(response);
  };

  onChange = e => {
    const { name, value } = e.target;
    // name = "email";
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <RegisterUser>
        {
          (createUser, loading) => {
            return (
              <Container text>
                <Header as="h2">Register</Header>
                <Input
                  name="username"
                  onChange={this.onChange}
                  value={username}
                  placeholder="Username"
                  fluid
                />
                <Input name="email" onChange={this.onChange} value={email} placeholder="Email" fluid />
                <Input
                  name="password"
                  onChange={this.onChange}
                  value={password}
                  type="password"
                  placeholder="Password"
                  fluid
                />
                <Button onClick={() => this.onSubmit(createUser)}>Submit</Button>
              </Container>
            )
          }
        } 
      </RegisterUser> 
      
    );
  }
}

// const registerMutation = gql`
//   mutation($username: String!, $email: String!, $password: String!) {
//     createUser(username: $username, email: $email, password: $password, companyId: $companyId, role: $role)
//   }
// `;

// export default graphql(registerMutation)(Register);

export default Register;