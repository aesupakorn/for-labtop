import React from 'react';
import './App.css';
import Test from './components/Test';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
function App(){

  return(
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="test/*" element={<Test/>}/>
      </Routes>
    </div>
  )
}

export default App;
