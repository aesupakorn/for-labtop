import logo from './logo.svg';
import './App.css';

import { Button, Row, Col, Alert, Stack } from 'react-bootstrap';

import {
	Route,
	Routes,
	BrowserRouter as Router,
	Link,
	Navigate,
} from 'react-router-dom';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Stack direction='horizontal' gap={3}>
				<Link to='/layout'> Layout </Link>
				<Link to='/forms'> Forms </Link>
				<Link to='/idoxcon'> Idoxcon </Link>
			</Stack>
		</>
	);
}

export default App;
