import React from 'react'
import {ImMenu} from "react-icons/im"
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-warning nav">
    <a className="navbar-brand icon" href="/"><ImMenu/></a>
</nav>
<h1 className="header">Indian Premier League Statistics</h1>
    </>
  )
}

export default Navbar