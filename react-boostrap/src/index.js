import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Forms from './pages/Forms';
import Idoxcon from './pages/Idoxcon';


ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<Routes>
				<Route path='/' element={<App />}/>
				<Route path='layout' element={<Layout/>}/>
				<Route path='forms' element={<Forms/>}/>
				<Route path='idoxcon' element={<Idoxcon/>}/>
			</Routes>

		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
