import React from 'react'
import "./header.scss"
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = ({ handleToggleSideBar }) => {
    return (
        <div className='border border-dark header'>
            <FaBars className='header__menu' size={26} onClick={() => handleToggleSideBar()} />

            <img
                src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                alt=''
                className='header__logo'
            />

            <form>
                <input type="text" placeholder='Search' />
                <button type='submit'><AiOutlineSearch size={22} /></button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" />
            </div>
        </div>
    )
}

export default Header
