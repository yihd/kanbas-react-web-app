import ModuleList from "../Modules/List";
import React, { useState } from 'react';
import "./index.css";
const Home: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
      <div className="home-container">
        <h2>Home</h2>
        <div className="flex-container">
          <div className="module-list">
            <ModuleList />
          </div>
          <div className="status-section">
            <h2>Status</h2>
            <input type="radio" value="Unpublished" name="courseStatus" id="Unpublished"/>
            <label htmlFor="Unpublished">Unpublished</label>
            <input type="radio" value="Published" name="courseStatus" id="Published"/>
            <label htmlFor="Published">Published</label><br/>
            <div className="sidebar">
              <ul className="sidebar-menu">
                <li><i className="fas fa-stream"></i> View Course Stream</li>
                <li><i className="fas fa-chart-bar"></i> New Analytics</li>
                <li><i className="fas fa-calendar-alt"></i> View Course Calendar</li>
                <li><i className="fas fa-bell"></i> View Course Notifications</li>
              </ul>
              <div className="sidebar-section">
                <h2>To Do</h2>
                <hr/>
                <p>Nothing for now</p>
              </div>
              <div className="sidebar-section">
                <h2>Recent Feedback</h2>
                <hr/>
                <p>Nothing for now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;


  
  