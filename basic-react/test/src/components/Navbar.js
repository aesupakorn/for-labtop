import { Link } from "react-router-dom";
import "../csscomponent/Navbar.css"
function Navbar() {

    return(
        <header className="app-header">
            <Link to="/" className="innav" href="#">Home</Link>
            <Link to="test" className="innav" href="#">Test</Link>
            

        </header>
    )
}
export default Navbar;