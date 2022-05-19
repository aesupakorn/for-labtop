import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import imgInfos from '../asset/img'
import './Home.css'

const Home = () => {
  const cardList = imgInfos.map((element,index)=>{
      return (
      <Link key={index} to={`/${index}`}><Card source={imgInfos[index].thumnailUrl}/></Link>
        
      )
  })
  
  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>Nut's Valentine</h1>
      <h3>Every time you hold my hand I find another reason to fall in love with you Love you always</h3>
      <div className="container-grid">
       {cardList}
      </div>
    </div>
    
  )
}

export default Home