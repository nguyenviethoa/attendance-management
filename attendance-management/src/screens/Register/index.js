import React from 'react';
import { Message, Button, Input, Container, Header } from 'semantic-ui-react';

import { RegisterUser } from './mutations';

class Register extends React.Component {
  state = {
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    companyId: 2,
    role: 'NORMAL'
  };

  onSubmit = async (createUser) => {
    this.setState({
      usernameError: '',
      emailError: '',
      passwordError: '',
    });
    console.log('start register');
    const { username, password, email, companyId, role } = this.state;

    try {
      const response = await createUser({
        variables: { username, password, email, companyId, role },
      });
      console.log('response', response);
      if (response.data.createUser.passwordError) {
        this.setState({passwordError: response.data.createUser.passwordError })
      }

      if (response.data.createUser.ok) {
        this.props.history.push('/');
      }
    }
    catch(error) {
      console.log('error', error);
    };
  };

  onChange = e => {
    const { name, value } = e.target;
    // name = "email";
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password, usernameError, emailError, passwordError } = this.state;
    const errorList = [];

    if (usernameError) {
      errorList.push(usernameError);
    }

    if (emailError) {
      errorList.push(emailError);
    }

    if (passwordError) {
      errorList.push(passwordError);
    }

    return (
      <RegisterUser>
        {
          (createUser, loading) => {
            return (
              <Container text>
                <Header as="h2">Register</Header>
                <Input
                  error={!!usernameError}
                  name="username"
                  onChange={this.onChange}
                  value={username}
                  placeholder="Username"
                  fluid
                />
                <Input name="email" onChange={this.onChange} value={email} placeholder="Email" fluid />
                <Input
                  error={!!passwordError}
                  name="password"
                  onChange={this.onChange}
                  value={password}
                  type="password"
                  placeholder="Password"
                  fluid
                />
                <Button onClick={() => this.onSubmit(createUser)}>Submit</Button>

                {usernameError || emailError || passwordError ? (
                  <Message error header="There was some errors with your submission" list={errorList} />
                ) : null}
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