import React from 'react';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Link to="/aqi">HOME</Link>
        </div>
      </header>
    </div>
  );
}

export default withRouter(App);
