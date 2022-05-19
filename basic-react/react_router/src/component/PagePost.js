import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function PagePost(){
    const {postId} = useParams();
    const [post,setPost] = useState({});
    function getPost(){
        fetch(`https://corona.lmao.ninja/v2/countries/${postId}`)
        .then(res => res.json())
        .then((json)=>{
            setPost(json);
        })
        .catch(error=>console.log(error.message))
    }
    
    function epochConverter(){
        let myDate = new Date((post.updated));
        
        return myDate.toLocaleString();
    }
    useEffect(()=>{
        getPost();
        epochConverter();
    },[postId]);

   
   

    
    return(
        <div>
            <h1 style={{marginBottom: 1.25 + "em"}}>Covid Situation Report</h1>
            <h3>Contry: {postId} </h3>
            <p><b>Date:</b> {epochConverter()}</p>
            <p><b>All Cases:</b> {post.cases}</p>
            <p><b>Today Cases:</b> {post.todayCases}</p>
            <p><b>Recoverd Cases:</b> {post.recovered}</p>
            <p><b>Today Recoverd Cases:</b> {post.todayRecovered}</p>
            

        </div>
    )
}

export default PagePost; 
