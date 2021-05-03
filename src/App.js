import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import React, { useState, Fragment } from 'react';


function App() {

  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [...prevState, { name: uName, age: uAge, id: Math.random().toString() }]
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
