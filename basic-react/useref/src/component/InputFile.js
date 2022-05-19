import React from "react";
const InputFile = React.forwardRef((props , ref)=>{
    return(
        <div>
            <input  type="file" ref={ref}/>
            <div><button onClick={props.onUploadClick}>upload file</button></div>
        </div>   
    )
})

export default InputFile; 