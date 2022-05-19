import React from 'react'
import './Card.css'

const Card = ({source}) => {
  return (
    <div className='card-container'>   
      <img src={source} alt="couple"/> 
    </div>
  )
}

export default Card