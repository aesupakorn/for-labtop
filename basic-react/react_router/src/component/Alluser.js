import {Link, Routes ,Route, Navigate, Outlet} from "react-router-dom"
import Myself from "./Myself";
import Friend from "./Friend";
import Button from "./Button";

function Alluser(){
    return(
        <div>
            <h1>All user</h1>
            <Button><p><Link to="myself"> Myself </Link></p></Button>
            <Button><p><Link to="friend"> Friend </Link></p></Button>
            
            
            <hr/>
            <Routes>
                <Route path="myself" element={<Myself/>}/>
                <Route path="friend" element={<Friend/>}/>
                <Route path="/*" element={<Navigate replace to="myself"/>} />
            </Routes>
            {/*<Outlet/> ใส่ในกรณีที่เอา Route ไปใส่ในcomponentอื่น*/}
        </div>
    );
}

export default Alluser;