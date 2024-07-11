import React from 'react';
import Todo from './Todo';

function App() {
  const todos = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Explore advanced React topics', completed: true },
  ];

  return (
    <>
      <div>
        <h1>TODO LIST</h1>
        {todos.map((list) => {
          const myKey = `${list.id}-${list.text}-${list.completed}`;
          return (
            <Todo key={myKey} text={list.text} completed={list.completed} />
          );
        })}
      </div>
    </>
  );
}

export default App;
