import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Table, Button } from "react-bootstrap";
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

  // selectCategory = () => {
  //   const total = Response.length;
  //   console.log(total);
  //   category = Response.map((e) => e.category);
  //   console.log(category);
  // };

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
        >
          Add Products
        </Button>
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
