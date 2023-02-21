import React from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css'

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  //We added Card's 'className=' property inside of Card.js file so we can input a style
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
