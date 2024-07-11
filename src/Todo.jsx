import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (
    <>
      <li className={`${props.completed}`}>{props.text}</li>
    </>
  );
};

export default Todo;
