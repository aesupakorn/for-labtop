import React from 'react';
import {
	Container,
	Form,
	Button,
	InputGroup,
	FormControl,
	FloatingLabel
} from 'react-bootstrap';

const Forms = () => {
	return (
		<>
			{/* basic-form */}
			<Container className='border my-3'>
				<h1>Basic Forms</h1>
				<Form>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
						<Form.Text className='text-muted'>Email is enabled</Form.Text>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' disabled />
						<Form.Text className='text-muted'>Password is disabled</Form.Text>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicCheckbox'>
						<Form.Check type='checkbox' label='Check me out' />
					</Form.Group>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</Container>
			{/* sizing-form */}
			<Container className='border my-3'>
				<h1>Sizing</h1>

				<Form.Control size='lg' type='text' placeholder='Large text' />
				<br />
				<Form.Control type='text' placeholder='Normal text' />
				<br />
				<Form.Control size='sm' type='text' placeholder='Small text' />
			</Container>
			{/* select-form */}
			<Container className='border my-3'>
				<h1>Select</h1>

				<Form.Select size='lg'>
					<option>Large select</option>
				</Form.Select>
				<br />
				<Form.Select>
					<option>Default select</option>
				</Form.Select>
				<br />
				<Form.Select size='sm'>
					<option>Small select</option>
				</Form.Select>
			</Container>
			{/* check,radio,switch */}
			<Container className='border my-3'>
				<h1>Check radio</h1>
				<h2>Switch</h2>
				<Form>
					<Form.Check
						type='switch'
						id='custom-switch'
						label='Check this switch'
					/>
					<Form.Check
						disabled
						type='switch'
						label='disabled switch'
						id='disabled-custom-switch'
					/>
				</Form>

				<hr></hr>
				<h2>Radio,Checkbox</h2>
				<Form>
					{['checkbox', 'radio'].map((type) => (
						<div key={`inline-${type}`} className='mb-3'>
							<Form.Check
								inline
								label='1'
								name='group1'
								type={type}
								id={`inline-${type}-1`}
							/>
							<Form.Check
								inline
								label='2'
								name='group1'
								type={type}
								id={`inline-${type}-2`}
							/>
							<Form.Check
								inline
								disabled
								label='3 (disabled)'
								type={type}
								id={`inline-${type}-3`}
							/>
						</div>
					))}
				</Form>
				<h3>without label</h3>
				<>
					<Form.Check aria-label='option 1' />
					<Form.Check type='radio' aria-label='radio 1' />
				</>
			</Container>
			{/* important-form */}
			<Container className='border my-3'>
				<h1>Important Forms</h1>
				<>
					<InputGroup className='mb-3'>
						<InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
						<FormControl
							placeholder='Username'
							aria-label='Username'
							aria-describedby='basic-addon1'
						/>
					</InputGroup>

					<InputGroup className='mb-3'>
						<FormControl
							placeholder="Recipient's username"
							aria-label="Recipient's username"
							aria-describedby='basic-addon2'
						/>
						<InputGroup.Text id='basic-addon2'>@example.com</InputGroup.Text>
					</InputGroup>

					<Form.Label htmlFor='basic-url'>Your vanity URL</Form.Label>
					<InputGroup className='mb-3'>
						<InputGroup.Text id='basic-addon3'>
							https://example.com/users/
						</InputGroup.Text>
						<FormControl id='basic-url' aria-describedby='basic-addon3' />
					</InputGroup>

					<InputGroup className='mb-3'>
						<InputGroup.Text>$</InputGroup.Text>
						<FormControl aria-label='Amount (to the nearest dollar)' />
						<InputGroup.Text>.00</InputGroup.Text>
					</InputGroup>

					<InputGroup>
						<InputGroup.Text>With textarea</InputGroup.Text>
						<FormControl as='textarea' aria-label='With textarea' />
					</InputGroup>
				</>
				<h3>all of this can adjust size!!!</h3>
			</Container>
			{/* floating label */}
			<Container className='border my-3'>
				<h1>FloatingLabel</h1>
				<FloatingLabel
					controlId='floatingInput'
					label='Email address'
					className='mb-3'
				>
					<Form.Control type='email' placeholder='name@example.com' />
				</FloatingLabel>
				<FloatingLabel controlId='floatingTextarea2' label='Comments'>
					<Form.Control
						as='textarea'
						placeholder='Leave a comment here'
						style={{ height: '100px' }}
					/>
				</FloatingLabel>
			</Container>
		</>
	);
};

export default Forms;
