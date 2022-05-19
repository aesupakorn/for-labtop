
import React from 'react';
import { Col, Container, Form, Row, Stack ,Button} from 'react-bootstrap';
import '../App.css';
const Layout = () => {
	return (
		<Container fluid='sm' className='border text-dark'>
			<h1>Grid</h1>
			<Row className='my-3 justify-content-xl-center '>
				{/* center ถึงแค่ xl */}
				<Col lg={4} md={8} className='bg-info border'>
					col-1
				</Col>
				<Col lg={4} md={3} className='bg-info border'>
					col-2
				</Col>
			</Row>
			<Row className='my-3'>
				<Col xxl className='bg-info border'>
					col-3
				</Col>
				<Col md className='bg-info border'>
					col-4
				</Col>
				<Col md className='bg-info border'>
					col-5
				</Col>
			</Row>

			<br></br>
			<br></br>

			<h1>{`Stack ( flex-box )`}</h1>
			<hr></hr>
			<h3>Vertical</h3>
			<Stack gap={3}>
				<div className='bg-light border'>First item</div>
				<div className='bg-light border'>Second item</div>
				<div className='bg-light border'>Third item</div>
			</Stack>
			<hr></hr>
			<h3>Horinzontal</h3>
			<Stack direction='horizontal' gap={3} className='justify-content-evenly'>
				<div className='bg-light border'>First item</div>
				<div className='bg-light border ms-auto'>Second item</div>
				<div className='vr'></div>
				<div className='bg-light border'>Third item</div>
			</Stack>
			<hr></hr>
			<h3>Ex.</h3>

			<Stack gap={2} className='col-md-5 mx-auto'>
				<Button variant='secondary'>Save changes</Button>
				<Button variant='outline-secondary'>Cancel</Button>
			</Stack>
      <br></br>
			<Stack direction='horizontal' gap={3}>
				<Form.Control className='me-auto' placeholder='Add your item here...' />
				<Button variant='secondary'>Submit</Button>
				<div className='vr' />
				<Button variant='outline-danger'>Reset</Button>
			</Stack>
		</Container>
	);
};

export default Layout;
