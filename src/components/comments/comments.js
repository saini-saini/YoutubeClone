import React from 'react'
import './comments.scss'
import Comment from '../comment/comment'
const Comments = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value);
  }
  return (
    <div className='comments'>
      <p>1234 Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className='rounded-circle mr-3' />
        <form onSubmit={handleSubmit} className='d-flex flex-grow-1'>
          <input
            type='text'
            className='flex-grow-1'
            placeholder='Add a comment...'
          />
          <button className='p-2 border-0'>Comment</button>
        </form>
      </div>

      <div className="comments__list">
        {
          [...Array(10)].map(() => (
            <Comment/>
          ))
        }
      </div>
    </div>
  )
}

export default Comments
