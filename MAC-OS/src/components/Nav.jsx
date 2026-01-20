import React from 'react'
import "./Nav.scss"

const Nav = () => {
  return (
   <nav>
    <div className="left">
      <div className='apple-icon'>
        <img src="/navbar-icons/Iconapple.svg" alt="apple" />
      </div>

      <div className="nav-item">
        <p>Sumit-Yadav</p>

      </div>
      <div className="nav-item">
        <p>File</p>
      </div>
      <div className="nav-item">
        <p>Window</p>
      </div>
      <div className="nav-item">
        <p>Terminal</p>
      </div>
    </div>
    <div className="right"></div>
   </nav>
  )
}

export default Nav