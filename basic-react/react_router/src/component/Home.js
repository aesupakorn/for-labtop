import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Homepage(){
    const [posts , setPosts] = useState([]);
    const [search, setSearch] = useState("");

    function getPosts(){
        fetch('https://corona.lmao.ninja/v2/countries?sort=country')
        .then(res => res.json())
        .then((json)=>{
            setPosts(json);
        })
        .catch(error=>console.log(error.message))
    }
    useEffect(()=>{
        getPosts();

    },[]);

    const postsElement = posts.filter((img)=>img.country.includes(search)).map(post =>{
        return(
            <h2 key={post.country}>
                <Link to={`post/${post.country}`}>{post.country}</Link>
                <div style={{marginTop: 1.25 + 'em'}}><img alt="flag" src={`${post.countryInfo.flag}`}/></div>
            </h2>
        )
    })
    return(
        <div>
             <h1>Home Page</h1>
             <hr/>
             <input style={{fontSize: 1.25 + 'em',width:400+'px'}} type="text" placeholder="Enter Country" onChange={(event)=>{setSearch(event.target.value)}} value={search}/>
             {postsElement}
        </div>
        
        
    );
}

export default Homepage;