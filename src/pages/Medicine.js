import React, { useState } from "react";
import {
	Container,
	Row,
	Col,
	Table,
	Button,
	Dropdown,
	DropdownButton,
} from "react-bootstrap";
import styled from "styled-components";

const Search = styled.input`
	border-radius: 7px;
	width: 100%;
	background: lightgrey;
	height: 35px;
	padding-left: 10px;
`;

function Medicine() {
	const [search, setSearch] = useState("");
	const [added, setAdded] = useState([]);
	const [medicine, setMedicine] = useState([
		{
			id: "1",
			name: "Paracetamol",
			average: "20",
			price: "25",
			qty: "10",
		},
		{
			id: "2",
			name: "Sinex",
			average: "20",
			price: "25",
			qty: "10",
		},
		{
			id: "3",
			name: "Flexon",
			average: "20",
			price: "25",
			qty: "10",
		},
	]);

	const updateSearch = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
		console.log(search);
	};

	const buttonChange = (e) => {
		e.preventDefault();
		setMedicine(({ isAdded, ...prevState }) => ({
			...prevState,
			isAdded: !prevState.isAdded,
		}));
	};
	return (
		<Container>
			<Row className="mb-3">
				<Col md={11}>
					<Search
						type="text"
						placeholder="Search name of medicine"
						onChange={updateSearch}
					/>
				</Col>
				<Col md={1}>
					<div>
						<DropdownButton
							id="dropdown-basic-button"
							title="Category"
							variant="success"
						>
							<Dropdown.Item>Action</Dropdown.Item>
							<Dropdown.Item>Another action</Dropdown.Item>
							<Dropdown.Item>Something else</Dropdown.Item>
						</DropdownButton>
					</div>
				</Col>
			</Row>

			<Table
				bordered
				style={{
					borderCollapse: "separate",
					background: "darkgrey",
				}}
			>
				<thead>
					<tr>
						<th>M_Id</th>
						<th>Medicine Name</th>
						<th>Avg.Qty</th>
						<th>Price</th>
						<th>Qty</th>
						<th>Add</th>
					</tr>
				</thead>
				<tbody>
					{medicine
						.filter((med) => {
							return med.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
						})
						.map((med) => (
							<tr key={med.id}>
								<td>{med.id}</td>
								<td>{med.name}</td>
								<td>{med.average}</td>
								<td>{med.price}</td>
								<td>{med.qty}</td>
								<td>
									<Button
										variant="success"
										size="sm"
										onClick={() => setAdded({ med })}
									>
										Add
									</Button>
								</td>
							</tr>
						))}
				</tbody>
			</Table>

			<Table
				bordered
				style={{
					borderCollapse: "separate",
					background: "darkgrey",
				}}
			>
				<thead>
					<tr>
						<th>M_Id</th>
						<th>Medicine Name</th>
						<th>Avg.Qty</th>
						<th>Price</th>
						<th>Qty</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{added.map((med) => (
						<tr key={med.id}>
							<td>{med.id}</td>
							<td>{med.name}</td>
							<td>{med.average}</td>
							<td>{med.price}</td>
							<td>{med.qty}</td>
							<td>{med.isAdded ? "true" : "false"}</td>
							<td>
								<Button variant="danger" size="sm" onCLick={buttonChange}>
									Remove
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
}

export default Medicine;
