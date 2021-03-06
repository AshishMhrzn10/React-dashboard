import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Table,
	Button,
	Modal,
	DropdownButton,
	Dropdown,
} from "react-bootstrap";
import styled from "styled-components";
// import firebaseDb from "../../firebase";

const TD = styled.td`
	border-bottom: 1px solid #dee2e6;
`;

const TD1 = styled.td`
	border-left: 1px solid black;
	border-bottom: 1px solid #dee2e6;
`;

const TD2 = styled.td`
	border-right: 1px solid black;
	border-bottom: 1px solid #dee2e6;
`;

function Inventory() {
	const [Response, setResponse] = useState([]);
	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState({
		title: "Category",
		id: null,
	});
	const [subCategory, setSubCategory] = useState("SubCategory");
	const [category, setCategory] = useState([
		{ title: "First Category", id: 0 },
		{ title: "Second Category", id: 1 },
		{ title: "Third Category", id: 2 },
	]);
	const [items, setItems] = useState([
		{ title: "Item 1", id: 0, category: { id: 0 } },
		{ title: "Item 2", id: 1, category: { id: 0 } },
		{ title: "Item 3", id: 2, category: { id: 0 } },
		{ title: "Item 4", id: 3, category: { id: 1 } },
		{ title: "Item 5", id: 4, category: { id: 1 } },
		{ title: "Item 6", id: 5, category: { id: 2 } },
		{ title: "Item 7", id: 6, category: { id: 2 } },
	]);
	const [state, setState] = useState({
		pname: "",
		qty: "",
		rate: "",
		discount: "",
		description: "",
		cat: selected.title,
		subcat: subCategory,
	});

	const handleInputChange = (e) => {
		const value = e.target.value;
		setState({
			...state,
			[e.target.name]: value,
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// firebaseDb.child("Products").push(state, (err) => {
		// 	if (err) {
		// 		console.log(err);
		// 	}
		// });
		// setState({
		// 	pname: "",
		// 	qty: "",
		// 	rate: "",
		// 	discount: "",
		// 	description: "",
		// 	cat: "",
		// 	subcat: "",
		// });
		console.log("submitted");
		setShow(false);
	};

	// useEffect(() => {
	// 	const apiUrl = `http://www.nasatechnicalsolutions.com.np/api/products`;
	// 	axios
	// 		.get(apiUrl)
	// 		.then((response) => {
	// 			setResponse(response.data.data);
	// 			console.log(response.data.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }, []);

	const deleteProduct = (id) => {
		// if (window.confirm("Are you sure you want to delete this record?")) {
		// 	const del = firebaseDb.child(`Products/${id}`);
		// 	del.remove();
		// }
		console.log("delete");
	};

	return (
		<Container>
			<Row className="my-3">
				<h2>Categories</h2>
				{/* {Response.slice(0, 6).map((cat) => (
					<Button
						variant="outline-info"
						className="mx-4"
						onClick={(e) => setCategory(cat.category)}
						key={cat.id}
					>
						{cat.category}
					</Button>
				))} */}
				<Button
					variant="primary"
					size="sm"
					className="ml-2"
					style={{ fontSize: "17px" }}
					onClick={() => setShow(true)}
				>
					Add Products
				</Button>

				<Modal
					size="xl"
					show={show}
					onHide={() => setShow(false)}
					dialogClassName="modal-100w"
					aria-labelledby="example-custom-modal-styling-title"
				>
					<Modal.Header closeButton>
						<Modal.Title id="example-custom-modal-styling-title">
							Add New Product
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<Container>
								<Row>
									<Col xs={6} md={3}>
										Product Name:
										<input
											type="text"
											placeholder="Product name.."
											name="pname"
											value={state.pname}
											onChange={handleInputChange}
										/>
									</Col>
									<Col xs={6} md={3}>
										Stock Quantity:
										<input
											type="number"
											placeholder="0"
											name="qty"
											value={state.qty}
											onChange={handleInputChange}
										/>
									</Col>
									<Col xs={6} md={3}>
										Product Rate:
										<input
											type="number"
											placeholder="0.0"
											name="rate"
											value={state.rate}
											onChange={handleInputChange}
										/>
									</Col>
									<Col xs={6} md={3}>
										Product Discount:
										<input
											type="number"
											placeholder="0.0"
											name="discount"
											value={state.discount}
											onChange={handleInputChange}
										/>
									</Col>
								</Row>
								<Row className="my-4">
									<Col xs={6} md={3}>
										Product Description:
										<textarea
											placeholder="Describe your product"
											style={{ width: "100%", height: "100%" }}
											name="description"
											value={state.description}
											onChange={handleInputChange}
										></textarea>
									</Col>
									{/* <Col xs={6} md={4}>
										Product Images:
										<label>Choose file:</label>
										<input
											type="file"
											accept="image/*"
											// onChange={(e) => setImage(e.target.files[0])}
										/>
										<input
											type="file"
											accept="image/*"
											// onChange={(e) => setImage(e.target.files[0])}
										/>
									</Col> */}
									<Col xs={6} md={2}>
										<DropdownButton
											id="dropdown-basic-button"
											name="cat"
											title={selected.title}
											value={state.cat}
											variant="success"
										>
											{category.map((cat) => (
												<Dropdown.Item
													onClick={() => {
														setSelected({ id: cat.id, title: cat.title });
														console.log(selected.title);
													}}
													key={cat.id}
												>
													{cat.title}
												</Dropdown.Item>
											))}
										</DropdownButton>
									</Col>
									<Col xs={6} md={3}>
										<DropdownButton
											id="dropdown-basic-button"
											name="subcat"
											title={subCategory}
											value={state.subcat}
											variant="success"
										>
											{items
												.filter((item) => item.category.id === selected.id)
												.map((sub) => (
													<Dropdown.Item
														key={sub.id}
														onClick={() => {
															setSubCategory(sub.title);
															console.log(subCategory);
														}}
													>
														{sub.title}
													</Dropdown.Item>
												))}
										</DropdownButton>
									</Col>
								</Row>
								<Row style={{ float: "right" }}>
									<Button
										type="submit"
										variant="success"
										onClick={handleFormSubmit}
									>
										Submit
									</Button>
								</Row>
							</Container>
						</form>
					</Modal.Body>
				</Modal>
			</Row>

			<Table
				style={{
					borderCollapse: "separate",
					borderSpacing: "0 10px",
					textAlign: "center",
				}}
			>
				<thead>
					<tr>
						<th style={{ borderLeft: "1px solid #dee2e6" }}>SN</th>
						<th>Product Name</th>
						<th>Stock</th>
						<th>Rate</th>
						<th>Discount</th>
						<th>Description</th>
						<th>Images</th>
						<th style={{ borderRight: "1px solid #dee2e6" }}>Edit</th>
					</tr>
				</thead>
				<tbody>
					{Response.map((data, index) => (
						<tr key={data.id}>
							<TD1>{index + 1}</TD1>
							<TD>{data.pname}</TD>
							<TD>{data.qty}</TD>
							<TD>{data.rate}</TD>
							<TD>{data.discount}%</TD>
							<TD>{data.description}</TD>
							<TD>eqwe672326</TD>
							<TD2>
								<Button
									variant="danger"
									size="sm"
									onClick={() => deleteProduct(data.id)}
								>
									Delete
								</Button>
							</TD2>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
}

export default Inventory;
