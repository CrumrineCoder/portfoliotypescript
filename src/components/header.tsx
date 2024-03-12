import React from 'react';
import emailIcon from "../assets/email.svg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import profile from "../assets/pfp.jpg";

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <div className="left-elements">
        <img
          src={profile}
          className="profile-picture"
          alt="Nicolas Crumrine's profile"
        />
        <p>Nicolas Crumrine</p>
      </div>
      <div className="right-elements">
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
    </header>
  );
};

export default Header;