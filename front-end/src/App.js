import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ReminderList from './components/reminder-list.component';
import Navbar from './components/navbar.component';
import EditReminder from './components/edit-reminder.component';
import CreateReminder from './components/create-reminder.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ReminderList} />
        <Route path="/edit/:id" component={EditReminder} />
        <Route path="/create" component={CreateReminder} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
