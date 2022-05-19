
import {NavLink} from "react-router-dom"
import styles from "./Navbar.module.css"
function Navbar(){
    return(
        
        <header className={styles['app-header']}>
            <NavLink  className={({ isActive })=> (isActive ? styles['avtivated'] : styles['app-item'] )} to="/" >Home</NavLink>
            <NavLink  className={({ isActive })=> (isActive ? styles['avtivated'] : styles['app-item'] )} to="user" >User</NavLink>
        </header>
    
    );
}

export default Navbar;