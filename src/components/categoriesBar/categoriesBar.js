import React, { useState } from 'react'
import "./categoriesBar.scss"
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

  const handleClick = (value) => {
    setActiveElement(value)
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
