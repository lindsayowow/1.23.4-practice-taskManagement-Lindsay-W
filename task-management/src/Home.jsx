import React from 'react';
import TaskList from './components/TaskList';

export default function Home() {
  return (
  <div className="homepage-container">
    <div className="homepage">
      <h2>Welcome to the homepage, these are your "to-dos":</h2>
      <p><i>Click each for details</i></p>
      <TaskList />
    </div></div>
  )
}
