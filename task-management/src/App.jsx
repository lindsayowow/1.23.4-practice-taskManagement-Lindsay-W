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
import './data/taskDataset.json';
import Home from './Home';

const [selectedTask, setSelectedTask] = useState("");

function App() {
  return (
    <div className="App">
      <h1>My Really Cool App</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component1" element={<TaskList />} />
        <Route path="/component2" element={<TaskDetail />} />
      </Routes>
    </div>
  );
}

export default App;