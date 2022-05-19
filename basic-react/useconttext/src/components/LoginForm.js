import React,{ useContext } from "react"
import { AuthContext } from "../App"
const fakeUser = {username:"supakorn" , password:"boonchuay"}
const LoginBox = () =>{
    const {authState,authDispatch} = useContext(AuthContext)
    
    
    function loginSubmit(){
        authDispatch({type:'login',  payload:fakeUser});//ส่งkeyอะไรก็ได้ ไปให้actionเรียก
    }
    function logout(){
        authDispatch({type:'logout'});
    }
    
    if(!!authState){
        return(
            <div className="login-container">
                <p>{`username : ${authState.username}`}</p>
                <p>{`password : ${authState.password}`}</p>
                <button onClick={logout}>Logout</button>
            </div>
        )
    }
    return(
        <div className="login-container">
            <p><input placeholder="username" type="text"/></p>
            <p><input placeholder="password" type="text"/></p>
            <button onClick={loginSubmit}>Login</button>
        </div>
    )
}
export default LoginBox