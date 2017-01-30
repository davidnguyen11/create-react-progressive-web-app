import React from 'react';
import { menuItems } from 'utils/constants';
import './styles.css';

function HomePage() {
  return (
    <div className="homePage">
      {menuItems.map((item, index) =>
        <a href={item.url} key={index}>
          <img src={item.logo} role="presentation"/>
        </a>
      )}
    </div>
  );
}

export default HomePage;