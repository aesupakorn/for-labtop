import { useEffect, useState } from "react";

function Test() {
    //state
    const [input, setInput] = useState("");
    const [formValid , setFormValid] = useState(true)
    const [pop,setPop] = useState(null)
    //function
    let onInputChange= (event) =>{
        setInput(event.target.value)
    }
    let onSubmitForm = (event) =>{
        event.preventDefault();
        input !== "" ? setPop(input) : setPop(null)
    }
    
    //element
        const listbox  = 
        (<div style={{color:"white",marginTop:10+"px" ,width:"fit-content",lineHeight:2.25+"em",backgroundColor:"grey"}}>
            <p>{pop}</p>
        </div>)

    // effect
    useEffect(()=>{
        if(input!==""){
            setFormValid(false)
            
        } 
        else{
            setFormValid(true)
        } 
    },[input])

    return (

        <div>
            <h2>Test</h2>
            <form onSubmit={(event)=>{onSubmitForm(event);}}>
                <input placeholder="พิมพ์ไรซักอย่างก่อนกดปุ่ม" value={input} onInput={(event)=>{onInputChange(event)}} />
                <button type="submit" disabled={formValid}>พิมพ์ก่อนกด</button>
                {listbox}
            </form>
        </div>

    )
}
export default Test;