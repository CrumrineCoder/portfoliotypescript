// Header.tsx

import React from 'react';

interface HeaderProps {
  name: string;
  pictureUrl: string;
  socialLinks: {
    [key: string]: string;
  };
}

const Header: React.FC<HeaderProps> = ({ name, pictureUrl, socialLinks }) => {
  return (
    <header>
      <div className="left">
        <img src={pictureUrl} alt={`Profile of ${name}`} />
        <h1>{name}</h1>
      </div>
      <div className="right">
        <ul>
          {Object.entries(socialLinks).map(([platform, link]) => (
            <li key={platform}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;