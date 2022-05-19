import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people,setPeople] = useState(data);
  const [index,setIndex] = useState(0);
  useEffect(()=>{
    
    let intervalID = setInterval(()=>{
      setIndex((index+1)%(people.length))
    },3000)
    return ()=> clearInterval(intervalID)
  },[index])
  

  
  return (
  <section className='section'>
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person,personIndex)=>{
          const {id,image,name,title,quote} = person;
          let position ='activeSlide' ;
          if(personIndex-index===1 || (index===people.length-1&&personIndex===0) ){
            position = 'lastSlide';
        
          }
          else if (personIndex!== index ){
            position='nextSlide';
          }
          

          return(
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img'/> 
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className='icon'/>
            </article>)
        })}
        <button className="prev">
          <FiChevronLeft onClick={()=>{setIndex(prev => prev===0?((prev-1)%(people.length))+people.length:prev-1)}}/>
        </button>
        <button className="next">
          <FiChevronRight onClick={()=>{setIndex(prev => (prev+1)%(people.length))}}/>
        </button>
      </div>
     
 
  </section>
  );
}

export default App;
