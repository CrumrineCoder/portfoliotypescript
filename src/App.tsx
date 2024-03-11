import "./App.scss";

import React from "react";
import logo from "./logo.svg";


import emailIcon from "./assets/email.svg";
import githubIcon from "./assets/github.svg";
import linkedinIcon from "./assets/linkedin.svg";
import profile from "./assets/pfp.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="header-content">
          <h1>Nicolas Crumrine</h1> 
          <img src={profile} alt="Profile Picture" className="profile-picture" />
          <div className="social-links">
            <a
              href="https://github.com/CrumrineCoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-crumrine-50899b120/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="" />
            </a>   
            <a
              href="mailto:crumrinecoding@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={emailIcon} alt="" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
