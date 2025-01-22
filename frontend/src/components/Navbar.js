import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Graph View</Link>
        </li>
        <li>
          <Link to="/editor">Node Editor</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
