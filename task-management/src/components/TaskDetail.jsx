// Retrieve the task ID from the URL and display the corresponding task details. 

import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import tasks from '../data/taskDataset.json';

export default function TaskDetail() {

 const { id } = useParams();
 const task = tasks.find(currentTask => currentTask.id === Number(id));

  if (!task) {
    return <p>Task not found.</p>;
  }

 return (
  <div>
    <p>Task: {task.title}</p>
    <p>Detail: {task.description}</p>
    <Link to={`/`}>Return to Home Page</Link>
  </div>
 );
}
