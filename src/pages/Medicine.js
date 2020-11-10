import React from "react";
import {
	Container,
	Row,
	Col,
	Table,
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
	return (
		<Container>
			<Row className="mb-3">
				<Col md={11}>
					<Search type="text" placeholder="Search" />
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
						<th>M_Id</th>
						<th>Add</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Paracetamol</td>
						<td>200</td>
						<td>20</td>
						<td>10</td>
						<td>1</td>
						<td>df</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Paracetamol</td>
						<td>200</td>
						<td>20</td>
						<td>10</td>
						<td>1</td>
						<td>df</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Paracetamol</td>
						<td>200</td>
						<td>20</td>
						<td>10</td>
						<td>1</td>
						<td>df</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Paracetamol</td>
						<td>200</td>
						<td>20</td>
						<td>10</td>
						<td>1</td>
						<td>df</td>
					</tr>
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
						<th>M_Id</th>
						<th>Add</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Paracetamol</td>
						<td>200</td>
						<td>20</td>
						<td>10</td>
						<td>1</td>
						<td>df</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Paracetamol</td>
						<td>200</td>
						<td>20</td>
						<td>10</td>
						<td>1</td>
						<td>df</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Paracetamol</td>
						<td>200</td>
						<td>20</td>
						<td>10</td>
						<td>1</td>
						<td>df</td>
					</tr>
					<tr>
						<td>1</td>
						<td>Paracetamol</td>
						<td>200</td>
						<td>20</td>
						<td>10</td>
						<td>1</td>
						<td>df</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
}

export default Medicine;
