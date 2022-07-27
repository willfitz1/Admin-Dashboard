import React from 'react'
import './navbar.css'
import { BellOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarWrap">
        <div className="left">
          <span className="logo">Admin</span>
        </div>
        <div className="right">
          <div className="navbarIcons">{/* <BellOutlined /> */}</div>
          <img
            src="https://pbs.twimg.com/profile_images/1413774834916421634/AHlQh4iB_400x400.jpg"
            alt="pfp"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
