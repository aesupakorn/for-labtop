import React from 'react'
import {Link, Routes ,Route, Navigate, Outlet} from "react-router-dom"
import Infomation from './Infomation'

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to="test"> go to infomation</Link>
      <Outlet/>
       
     
        
      
    </div>
    
  )
}

export default Home