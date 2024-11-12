import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div>
        <nav className="navbar" id="nav_light">
            <div className="web_logo">
                <img src='src\assets\images_1\website_logo.png' alt="Healthy Bowl Logo" />
                <span className="web_title">Healthy Bowl</span>
            </div>
            <div className="nav_contents">
                <a href="#home" className="active">Home</a>
                <a href="#about" className="active">About</a>
                <a href="#services" className="active">Services</a>
                <a href="#contact" className="active">Contact</a>
                <button className="log_in" onClick={() => window.location.href = './login.html'}>Log In</button>
            </div>
            <div className="search">
                <i className="fa-solid fa-magnifying-glass" title="Search"></i> 
                <i className="fa-regular fa-moon" id="switch-theme" title="Switch to light Mode"></i>
            </div>
            <div className="mobile-nav">
                <a href="#home" className="active">Home</a>
                <a href="#about" className="active">About</a>
                <a href="#services" className="active">Services</a>
                <a href="#contact" className="active">Contact</a>
                <button className="log_in" onClick={() => window.location.href = './login.html'}>Log In</button>
            </div>
        </nav> 
        </div>
    </>
  )
}

export default Navbar
