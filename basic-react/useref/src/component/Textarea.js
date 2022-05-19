import React from "react";
const Textarea = React.forwardRef((props , ref)=>{
    return(
        <div>
            <p>
                <textarea ref = {ref}/>
            </p>
            <button onClick={props.selectAll}>Select All</button>
        </div>   
    )
})

export default Textarea; 