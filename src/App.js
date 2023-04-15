import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";
import Household from "./Pages/Household/Household";
import Report from "./Pages/Report/Report";
import Resident from "./Pages/Resident/Resident";




function App() {
  return (
    
      <div className="App">
        <Router>
        <div classname = "sidebar">
        <Sidebar>
           <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/household" element={<Household />} />
            <Route path="/report" element={<Report />} />
            <Route path="/resident" element={<Resident />} />
            </Routes>
          </Sidebar>
          </div>
        </Router>
      </div>
      
        
    );
  }

export default App;

