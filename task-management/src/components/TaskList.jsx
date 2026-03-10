// ● Display a list of tasks with links to their detail pages.  
// ● Include your mock task dataset from step 2 inside of the TaskList 
// component.  
// ● Use the .map() method to iterate through tasks.  
// ● Make sure to create a Link component that navigates to /task/${task.id}. 

import React from 'react';
import tasks from '../data/taskDataset.json';
import { Routes, Route, Link } from 'react-router-dom';

export default function TaskList() {
     
 return (
    <ul>
        {tasks.map(task =>
        <li><Link to={`/task/${task.id}`}>{task.title}</Link></li>)
    }</ul>
);
}
