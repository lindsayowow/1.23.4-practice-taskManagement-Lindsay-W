// This activity reinforces the use of React Router's dynamic routes and the useParams 
// hook. 
// 1. Displays a list of tasks on the main page. 
// 2. Allows users to navigate to a specific task's detail page using URL 
// parameters. 
// 3. Handles edge cases like invalid or missing task IDs. 
// Set up the routes to display the task list and task details. 
// Create a fully functional task viewer where: 
// ● The task list displays clickable links. 
// ● Each link navigates to a detail page for the corresponding task. 
// ● Invalid or missing task IDs are handled gracefully with an error message. 

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="app-container">
    <div className="App">
      <h1>Welcome to your task list!</h1>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </div></div>
  );
}

export default App;