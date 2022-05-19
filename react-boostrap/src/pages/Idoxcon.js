import React, { useState } from 'react';
import {
	Modal,
	Button,
	Row,
	Col,
	InputGroup,
	FormControl,
	Table,
	Form,
	Pagination,
} from 'react-bootstrap';
import '../components/idoxcon.css';
import Media from 'react-media';
import Idoxmodal from '../components/Idoxmodal';
const Idoxcon = () => {
	const [test, setTest] = useState('');
	const [show, setShow] = useState(true);
	const [tablePage, setTablePage] = useState(0);
	const [tableData, setTableData] = useState([]);
	const [tableDataInput, setTableDataInput] = useState({
		work: '',
		condition: '',
		comment: '',
	});

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	function onTableChange(event) {
		const { name, value } = event.target;
		setTableDataInput((prev) => {
			return { ...prev, [name]: value };
		});
	}
	function onTableSubmit() {
		setTableData((prev) => {
			return [...prev, tableDataInput];
		});
		setTableDataInput({ work: '', condition: '', comment: '' });
		setTablePage(tablePage + 1);
	}
	function setPageBig(){
		setTablePage(tableData.length);
	}
	const dataMapBig = tableData.map((element, index) => {
		return (
			<tr key={index}>
				<td data-label='งานที่ทำ'>{element.work}</td>
				<td data-label='เงื่อนไข'>{element.condition}</td>
				<td data-label='ตรวจสอบ'>
					<Form.Check aria-label='option 1' />
				</td>
				<td data-label='ผลลัพธ์'>
					<Form.Select size='sm' className='select-custom-width'>
						<option>NOTPASS</option>
						<option>PASS</option>
					</Form.Select>
				</td>
				<td data-label='ข้อคิดเห็น'>{element.comment}</td>
				<td data-label='แก้ไข'></td>
			</tr>
		);
	});
	const pagination = (
		<Pagination className='table-pagination mx-auto'>
			<Pagination.First
				className={tablePage === 0 ? `disabled` : ''}
				onClick={() => {
					setTablePage(0);
				}}
			/>
			<Pagination.Prev
				className={tablePage === 0 ? `disabled` : ''}
				onClick={() => {
					setTablePage(tablePage - 1);
				}}
			/>
			<Pagination.Item active>{tablePage+1}</Pagination.Item>
			<Pagination.Next
				className={tablePage === tableData.length ? `disabled` : ''}
				onClick={() => {
					setTablePage(tablePage + 1);
				}}
			/>
			<Pagination.Last
				className={tablePage === tableData.length ? `disabled` : ''}
				onClick={() => {
					setTablePage(tableData.length);
				}}
			/>
		</Pagination>
	);
	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				Launch static backdrop modal
			</Button>

			<Modal
				dialogClassName='modal-custom-width'
				fullscreen='md-down'
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>การซ่อมบำรุง บันทึก</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col sm={8} className='mb-3'>
							<InputGroup>
								<InputGroup.Text id='basic-addon1'>ชื่อ</InputGroup.Text>
								<FormControl
									placeholder='Username'
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
							</InputGroup>
						</Col>
						<Col sm={4} className='mb-3'>
							<InputGroup>
								<InputGroup.Text id='basic-addon1'>สถานะ</InputGroup.Text>
								<Form.Select>
									<option>รอดำเนินการ</option>
									<option>แก้ไข</option>
									<option>สำเร็จ</option>
								</Form.Select>
							</InputGroup>
						</Col>
					</Row>
					<Table hover size='sm'>
						<thead data-header-label='ชื่อตาราง 1'>
							<tr>
								<th>งานที่ทำ</th>
								<th>เงื่อนไข</th>
								<th>ตรวจสอบ</th>
								<th>ผลลัพธ์</th>
								<th>ข้อคิดเห็น</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<Media query='(max-width: 580px)'>
								{(matches) => {
									return matches ? '' : dataMapBig;
								}}
							</Media>


							{tablePage !== tableData.length && (
								<tr>
									<td data-label='งานที่ทำ'>{tableData[tablePage].work}</td>
									<td data-label='เงื่อนไข'>
										{tableData[tablePage].condition}
									</td>
									<td data-label='ตรวจสอบ'>
										<Form.Check aria-label='option 1' />
									</td>
									<td data-label='ผลลัพธ์'>
										<Form.Select size='sm' className='select-custom-width'>
											<option>NOTPASS</option>
											<option>PASS</option>
										</Form.Select>
									</td>
									<td data-label='ข้อคิดเห็น'>
										{tableData[tablePage].comment}
									</td>
									<td data-label='แก้ไข'></td>
								</tr>
							)}

							{tablePage === tableData.length && (
								<tr>
									<td data-label='งานที่ทำ'>
										<InputGroup size='sm'>
											<FormControl
												className='input-small'
												value={tableDataInput.work}
												name='work'
												onChange={(event) => onTableChange(event)}
												aria-label='Small'
												aria-describedby='inputGroup-sizing-sm'
											/>
										</InputGroup>
									</td>
									<td data-label='เงื่อนไข'>
										<InputGroup size='sm'>
											<FormControl
												className='input-small'
												value={tableDataInput.condition}
												name='condition'
												onChange={(event) => onTableChange(event)}
												aria-label='Small'
												aria-describedby='inputGroup-sizing-sm'
											/>
										</InputGroup>
									</td>
									<td data-label='ตรวจสอบ'>
										<Form.Check aria-label='option 1' />
									</td>
									<td data-label='ผลลัพธ์'>
										<Form.Select size='sm' className='select-custom-width'>
											<option>NOTPASS</option>
											<option>PASS</option>
										</Form.Select>
									</td>
									<td data-label='ข้อคิดเห็น'>
										<InputGroup
											size='sm'
											onChange={(event) => onTableChange(event)}
										>
											<FormControl
												className='input-small'
												value={tableDataInput.comment}
												name='comment'
												onChange={(event) => onTableChange(event)}
												aria-label='Small'
												aria-describedby='inputGroup-sizing-sm'
											/>
										</InputGroup>
									</td>
									<td data-label='เพิ่ม'>
										<Button variant='primary' size='sm' onClick={onTableSubmit}>
											+
										</Button>
									</td>
								</tr>
							)}
							<Media query='(max-width: 580px)'>
								{(matches) => {
									return matches ? pagination : '';
								}}
							</Media>
						</tbody>
					</Table>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary'>Understood</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Idoxcon;
