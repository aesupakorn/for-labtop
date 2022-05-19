import "./LoginArea.css" 
import LoginBox from "./LoginForm"
function LoginArea(){
    
    return(
        <div className="user-container">
            <h2>Welcome User</h2>
            <LoginBox/>
        </div>
    )
}
export default LoginArea