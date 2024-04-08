import React, { useState } from 'react'
import "./categoriesBar.scss"
import { useDispatch } from 'react-redux'
import { getVideosByCategory } from '../../redux/action/videos.sction'
const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]
const CategoriesBar = () => {

  const [activeElement, setActiveElement] = useState('All')
const dispatch = useDispatch()
  const handleClick = (value) => {
    setActiveElement(value)
    if (value === 'All') {
      dispatch(getVideosByCategory())
   } else {
      dispatch(getVideosByCategory(value))
   }
  }
  return (
    <div className='categoriesBar'>
      {keywords.map((keyword, index) => (
        <span key={index} className={activeElement === keyword ? 'active' : ''} onClick={() => handleClick(keyword)}>{keyword}</span>
      ))}
    </div>
  )
}

export default CategoriesBar
