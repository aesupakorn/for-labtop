import React, { useRef } from 'react';
import Textarea from './component/Textarea.js';
import './App.css';
import InputFile from './component/InputFile.js';


//use ref ใช้เก็บข้อมูลเท่านั้น
function App() {
    const fileRef = useRef(null); // เก็บข้อมูลแบบไม่อัพเดท ui
    const textareaRef = useRef(null);
    function onUploadClick(){
        const selectedFile=fileRef.current.files[0];
        console.log(selectedFile);
    }
    function selectAll(){
        textareaRef.current.select();
       
    }
    return (
        <main className="app-main">
            <Textarea selectAll={selectAll} ref={textareaRef}/>
            <InputFile onUploadClick={onUploadClick} ref={fileRef}/> 
        </main>
    );
}

export default App;
