
import './App.css';

import {Route , Routes , BrowserRouter as Router , Link , Navigate} from 'react-router-dom' 
import Home from './pages/Home';
import Profile from './pages/Profile';
import Infomation from './pages/Infomation';


function App() {

  return (
<Router>
    <nav>
        <Link to="home"> Home </Link>
        <Link to="infomation"> Infomation </Link>
        <Link to="profile/me"> Profile </Link>

    </nav>
    <Routes>       
        <Route path='home' element={<Home/>}>
          <Route path='test' element={<Infomation/>}/>
        </Route>
        <Route path='infomation' element={<Infomation/>}/>
        <Route path='profile/:id' element={<Profile/>}/>
        {/* <Route path='/*' element={<Navigate replace to='/home'/>}/> */}
      </Routes>
      <div> Footer </div>
</Router>      
  )
}

export default App;
