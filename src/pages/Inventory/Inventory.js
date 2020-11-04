import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Modal,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import styled from "styled-components";

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
  const [Category, setCategory] = useState("");
  const [Response, setResponse] = useState([]);
  const [image, setImage] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const apiUrl = `http://www.nasatechnicalsolutions.com.np/api/products`;
    axios
      .get(apiUrl)
      .then((response) => {
        setResponse(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row className="my-3">
        <h2>Categories</h2>
        {Response.slice(0, 6).map((cat) => (
          <Button
            variant="outline-info"
            className="mx-4"
            onClick={(e) => setCategory(cat.category)}
            key={cat.id}
          >
            {cat.category}
          </Button>
        ))}
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
                    <input type="text" placeholder="Product name.." />
                  </Col>
                  <Col xs={6} md={3}>
                    Stock Quantity:
                    <input type="number" placeholder="0" />
                  </Col>
                  <Col xs={6} md={3}>
                    Product Rate:
                    <input type="number" placeholder="0.0" />
                  </Col>
                  <Col xs={6} md={3}>
                    Product Discount:
                    <input type="number" placeholder="0.0" />
                  </Col>
                </Row>
                <Row className="my-4">
                  <Col xs={6} md={3}>
                    Product Description:
                    <textarea
                      placeholder="Describe your product"
                      style={{ width: "100%", height: "100%" }}
                    ></textarea>
                  </Col>
                  <Col xs={6} md={4}>
                    Product Images:
                    <label>Choose file:</label>
                    <input
                      type="file"
                      value={image}
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    {image.map((item, index) => {
                      return <img key={index} src={item.image} alt="" />;
                    })}
                    {/* <img src={require("../../images/todo.png")} alt="" />
                    <img src={require("../../images/todo.png")} alt="" />
                    <img src={require("../../images/todo.png")} alt="" />
                    <img src={require("../../images/todo.png")} alt="" /> */}
                  </Col>
                  <Col xs={6} md={2}>
                    <DropdownButton id="dropdown-basic-button" title="Category">
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col xs={6} md={3}>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Sub Category"
                    >
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Row>
                <Row style={{ float: "right" }}>
                  <Button type="submit" variant="success">
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
          {Response.filter((data) => data.category === Category).map(
            (data, index) => (
              <tr key={data.id}>
                <TD1>{index + 1}</TD1>
                <TD>{data.productName}</TD>
                <TD>{data.stock}</TD>
                <TD>{data.price}</TD>
                <TD>{data.discountRate}%</TD>
                <TD>{data.description}</TD>
                <TD>eqwe672326</TD>
                <TD2>
                  <Button variant="success" size="sm" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </TD2>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default Inventory;
