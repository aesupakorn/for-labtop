import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    const [readmore ,setReadMore] = useState(false);
    const forward = ()=>{
        setIndex((prev)=>{
            if(index !== (people.length)-1){
                return prev+1;
            }
            return prev;
        })
        
    }
    const backward = ()=>{
        setIndex((prev)=>{
            if(index !== 0){
                return prev-1;
            }
            return prev;
        })
        
    }
    return (

        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{readmore? text:`${text.substring(0,100)}....`}
            <button style={{backgroundColor:"white",padding:0}} className='random-btn' onClick={()=>setReadMore(!readmore)}>{readmore? "show less":"read more"}</button>
            </p>
            
            <div className="button-container">
                <button className='prev-btn'>
                    <FaChevronLeft onClick={backward}/>
                </button>
                <button className='next-btn'>
                    <FaChevronRight onClick={forward}/>
                </button>
            </div>
                <button className='random-btn' onClick={()=>{setIndex(()=> Math.floor(Math.random()*(people.length-1)))}}>surprise me</button>
           
        </article>

    );
};

export default Review;
