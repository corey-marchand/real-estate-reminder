import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render(){
    return( 
      <div className="navbar-container">
        <Link to="/" className="navbar-log"></Link>
        <div className="navbar-options">
          <ul>
            <li>
              <Link to="/code"
            </li>
          </ul>
        </div>
      </div>
    )
  }
};

export default Navbar;


<nav className="navar">
        <Link to="/" className="navbar-logo">Exercise Tracker</Link>
        <div className="collapse navbar-collapse">
        <ul>
          <li>
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li>
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li>
          <Link to="/user" className="Nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>