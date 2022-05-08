import React, {useState} from 'react'
import Sidebar from './Sidebar'
import {ImMenu} from "react-icons/im"
import "./Navbar.css"
const Navbar = () => {
  const [showSidebar, setShowSidebar] =useState(true)
  return (
    <>
    <div className="navbar navbar-expand-lg navbar-light bg-warning nav">
    <div className="navbar-brand icon"><ImMenu onClick={()=>{setShowSidebar(!showSidebar)}}/></div>
    </div>

    <Sidebar show={showSidebar}/>

<h1 className="header">Indian Premier League Statistics</h1>
    </>
  )
}

export default Navbar