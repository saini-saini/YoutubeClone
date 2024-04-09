import React from 'react'
import "./header.scss"
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Header = ({ handleToggleSideBar }) => {
    const userDetail = useSelector(state => state?.login?.user)
    const navigate = useNavigate();

    return (
        <div className='border border-dark header'>
            <FaBars className='header__menu' size={26} onClick={() => handleToggleSideBar()} />
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }} onClick={() => navigate("/")}>
                <img
                    src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                    alt=''
                    className='header__logo'
                /><p style={{ margin: "0", fontWeight: "bold" }} className='header__logoText'>TouTube</p>
            </span>

            <form>
                <input type="text" placeholder='Search' />
                <button type='submit'><AiOutlineSearch size={22} /></button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                {/* <MdApps size={28} /> */}
                <img src={userDetail?.photoURL} alt="avatar" />
            </div>
        </div>
    )
}

export default Header
