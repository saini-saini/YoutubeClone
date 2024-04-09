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
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/action/loginAction';
import { useNavigate } from 'react-router-dom';
const Sidebar = ({ sideBar, handleToggleSideBar }) => {
const navigate = useNavigate();
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logout())
  }


  return (
    <nav className={sideBar ? "sidebar open" : "sidebar"} onClick={() => handleToggleSideBar(false)}>
      <li onClick={()=> navigate("/")}><MdHome size={23} /><span>Home</span></li>
      <li><MdSubscriptions size={23} /><span>Subscriptions</span></li>
      <li><MdThumbUp size={23} /><span>Liked</span></li>
      <li><MdHistory size={23} /><span>History</span></li>
      {/* <li><MdLibraryBooks size={23} /><span>Library</span></li> */}
      <hr />
      <li onClick={() => Logout()}><MdExitToApp size={23} /><span>Logout</span></li>
      <hr />
    </nav>
  )
}

export default Sidebar
