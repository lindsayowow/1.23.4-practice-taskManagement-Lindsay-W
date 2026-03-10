// Retrieve the task ID from the URL and display the corresponding task details. 

import React from 'react';
import { useParams } from 'react-router-dom';

export default function TaskDetail() {
 const { taskName } = useParams();
 return (
  <div>
    <p>Task: {taskName}</p>
  </div>
 );
}
