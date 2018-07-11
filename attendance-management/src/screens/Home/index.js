import React from 'react';

import { AllUserQuery } from './queries';

const Home = () => {
  return (
    <AllUserQuery>
      {
        (data) => {
          console.log('test', data)
          return data.getAllUsers.map(u => <h1 key={u.id}>{u.email}</h1>);
        }
      }
    </AllUserQuery>
  );  
};

export default Home;