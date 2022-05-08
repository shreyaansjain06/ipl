import React from 'react'
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
  <a className="active" href="#home">Dashboard</a>
  <a href="#news">Profile</a>
  <a href="#contact">Calender</a>
  <a href="#about">About</a>
</div>
    </>
  )
}

export default Sidebar