import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrap">
        <div className="siderbarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListitem active">Home</li>
            <li className="sidebarListitem">Messages</li>
            <li className="sidebarListitem">Sales</li>
          </ul>
        </div>
        <div className="siderbarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListitem active">Home</li>
            <li className="sidebarListitem">Messages</li>
            <li className="sidebarListitem">Sales</li>
          </ul>
        </div>
        <div className="siderbarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListitem active">Home</li>
            <li className="sidebarListitem">Messages</li>
            <li className="sidebarListitem">Sales</li>
          </ul>
        </div>
        <div className="siderbarMenu">
          <h3 className="sidebarTitle">Admin</h3>
          <ul className="sidebarList">
            <li className="sidebarListitem active">Home</li>
            <li className="sidebarListitem">Messages</li>
            <li className="sidebarListitem">Sales</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
