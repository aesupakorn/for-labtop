
import React,{ useEffect, useState } from 'react';
import './App.css';
import PopPing from './Popup';



function App() {
  const [pop,setPop] = useState(false)
  useEffect(()=>{ //ใช้ effect หลังจากอัพเดท component
     //effect 
    return ()=> {} // สภาพก่อนเกิด effect
  },[])
  
  let imgPop=null;
  if(pop){
    imgPop = <PopPing popUpclose={()=>{setPop(false)}}/>
  }
  return (
   <main className='app-main'>
     <div className="app-container">
        <div><button onClick={()=>{setPop(true)}}>Popup!</button></div>
        {imgPop}
        
     </div>
     <p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p>
     <p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p>
     <p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p>
     <p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p>
     <p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p><p>hack</p>
     
   </main>
   
  );
}

export default App;
