import React from 'react'
import "./video.scss"
import { AiFillEye } from 'react-icons/ai'
const Video = () => {
  return (
    <div className='video'>
      <div className="video__top">
        <img src="https://i.ytimg.com/vi/4qlScPdIoio/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDuKfsOtA_DA2utq4NcodnfNGOlWA" alt="" />
        <span>05:43</span>
      </div>
      <div className="video__title">
        title of video
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 1.4M views •
        </span>
        <span>
          1 day ago
        </span>
      </div>
      <div className="video__channel">
        <img src="https://yt3.ggpht.com/5IhVZsdGrIyCwg3u0ro6MyX4zICtrUkaefm54ak7pm9RSbXCMI3xNkHb9FMULjvtC0LuXjUwF1g=s68-c-k-c0x00ffffff-no-rj" alt="error" />
        <p>Channel Name</p>
      </div>
    </div>
  )
}

export default Video
