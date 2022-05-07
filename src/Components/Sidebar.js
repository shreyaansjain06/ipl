import React from 'react'
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
    <div class="sidebar">
  <a class="active" href="#home">Dashboard</a>
  <a href="#news">Profile</a>
  <a href="#contact">Calender</a>
  <a href="#about">About</a>
</div>
    </>
  )
}

export default Sidebar