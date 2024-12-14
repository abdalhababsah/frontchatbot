import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login'; // Adjust the path based on your folder structure
import Home from './Pages/Home';
import Register from './Pages/Register';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;