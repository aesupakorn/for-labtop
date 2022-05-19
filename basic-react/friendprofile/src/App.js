import React, {useState} from 'react';
import './App.css';
import PopUp from './components/Popup';
import Appheader from "./components/AppHeader"
import ImgItem from './components/ImgItem';
import imgInfos from './data/img';
import Topic from './components/Topic';
import SearchImg from './components/SearchImg';

function App() {
    const [selectedImg , setSelected] =  useState(null)
    const [searchImg , setImg] = useState("")
    function clickImg(image){
        setSelected(image)
    }
    function set(text){
        setImg(text)
    }
    
    const imgToComponent = imgInfos.filter((img)=>{ //filter เสร็จแล้ว mapต่อเลย
        return img.title.includes(searchImg) || img.description.includes(searchImg)
    }).map((element,index)=>{
        return <ImgItem key={index} info={element} clickImg={clickImg}/>
    })
    let imgPop = null
    if(!!selectedImg){
        imgPop = <PopUp img ={selectedImg} clickImg={clickImg}/>
    }





    return ( //className = class ใน html
         <div className="app"> 
            <Appheader/>
            <Topic/>
            <SearchImg set={set} imgShow = {searchImg}/>
            <div className="app-grid">
                {imgToComponent}
            </div>
            {imgPop}
        </div>
    );
}

export default App;
