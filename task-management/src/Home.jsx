import React from 'react';
import TaskList from './components/TaskList';

export default function Home() {
  return (
    <div className="homepage">
      <h2>Welcome to the homepage</h2>

      <TaskList />

    </div>
  )
}
