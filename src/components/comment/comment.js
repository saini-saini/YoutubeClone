import React from 'react'
import moment from 'moment'
import './comment.scss'
const Comment = () => {
    return (
        <div className='comment d-flex p-2'>
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className='rounded-circle' />

            <div className="comment__body">
                <p className='mb-1 comment__header'>userName • {moment(`2021-01-01`).fromNow()}</p>
                <p className='mb-0'>user comments..</p>
            </div>
        </div>
    )
}

export default Comment
