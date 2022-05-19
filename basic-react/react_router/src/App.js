
import './App.css';
import Alluser from './component/Alluser';
import Homepage from './component/Home';
import Navbar from './component/Navbar';
import {Routes ,Route,Navigate} from 'react-router-dom';
import Error404 from './component/Error404';
import PagePost from './component/PagePost';


function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes> {/* Routes รวม Route ที่ไปยัง path ต่างๆ */}
        <Route path="/" element={<Homepage/>}/>
        <Route path="user/*" element={<Alluser/>}/>{/* สามารถใช้ <Route> Routeของหน้าAlluser ทั้งหมด </Route> 
        ได้แต่ต้องใส่ <Outlet/> ใน Alluser เพื่อส่งข้อมูล componentมา !!แนะนำให้ทำแยกcomponentกันไปเลยดีกว่า*/ }   
        <Route path="post/:postId" element={<PagePost/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
         
          
      
    </div>
  );
}

export default App;
