import React from 'react'
import { useParams } from 'react-router-dom';
import imgInfos from '../asset/img';
import './Extra.css'

const Extra = () => {
    const {id} = useParams();
  return (
      <div className='extra-container'>
        <h2>โปรดให้แฟนของคุณแสกน QRcode</h2>
        
        <img className='qr' src={imgInfos[id].moneyUrl} alt="qr"/>
      </div>
   
  )
}

export default Extra