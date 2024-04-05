import React from 'react'
import "./sidebar.scss"
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
} from 'react-icons/md'

const Sidebar = ({ sideBar, handleToggleSideBar }) => {
  return (
    <nav className={sideBar ? "sidebar open" : "sidebar"} onClick={() => handleToggleSideBar(false)}>
      <li>
        <MdHome size={23} /><span>Home</span></li>
      <li><MdSubscriptions size={23} /><span>Subscriptions</span></li>
      <li><MdThumbUp size={23} /><span>Liked</span></li>
      <li><MdHistory size={23} /><span>History</span></li>
      <li><MdLibraryBooks size={23} /><span>Library</span></li>
      <hr />
      <li><MdExitToApp size={23} /><span>Logout</span></li>
      <hr />
    </nav>
  )
}

export default Sidebar
