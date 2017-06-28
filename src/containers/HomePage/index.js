import React from 'react';
import { Link } from 'react-router';
import { menuItems } from 'utils/constants';
import './styles.css';

function HomePage() {
  return (
    <div className="homePage">
      {menuItems.map((item, index) =>
        <Link href={item.url} key={index}>
          <img src={item.logo} role="presentation" alt={item.title} />
        </Link>
      )}
    </div>
  );
}

export default HomePage;