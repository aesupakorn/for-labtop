import { useEffect } from "react";
import "./Popup.css"

function PopPing(prop){
    useEffect(()=>{
        console.log("popup open")
        document.documentElement.style.overflowY ="hidden"
        return ()=>{
            console.log("popup close")
            document.documentElement.style.overflowY ="auto"
        }   
    },[])
    return (
        <div className="test" onClick={prop.popUpclose}></div>
    )
}

export default PopPing;