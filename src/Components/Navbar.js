import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { ImMenu } from 'react-icons/im';
import './Navbar.css';
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      <div className="nav">
        <div className="icon">
          <ImMenu
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          />
        </div>
      </div>

      <Sidebar show={showSidebar} />

      <h1 className="header">Indian Premier League Statistics</h1>
    </>
  );
};

export default Navbar;
