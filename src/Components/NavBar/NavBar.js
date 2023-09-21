import React from 'react'
import "./NavBar.css"
import logo from "../../Assets/logo.png"
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navBarContainer'>
      <div className='logoContainer'>
        <Link to="/"><img className='logo' src={logo} alt='Tanzeel ki Diary' /></Link>
      </div>
      <div className='genreContainer'>
        <h4><Link style={{textDecoration: "none", color: "#1e293b"}} to="/two-liners"><h4>TWO LINERS</h4></Link></h4>
        <h4><Link style={{textDecoration: "none", color: "#1e293b"}} to="/four-liners">FOUR LINERS</Link></h4>
      </div>
    </div>
  )
}

export default NavBar