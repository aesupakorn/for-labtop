import {Route , Routes , Link , Navigate} from 'react-router-dom' 
import './App.css';
import Card from './components/Card';
import imgInfos from './asset/img';
import Extra from './pages/Extra';
import Home from './pages/Home';


function App() {
  return (
    <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path='/:id' element={<Extra/>}></Route>
    </Routes>
    
  );
}

export default App;
