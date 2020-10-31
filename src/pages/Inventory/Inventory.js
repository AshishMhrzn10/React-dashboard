import React from "react";
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
  return (
    <Container>
      <Row className="my-3">
        <h2>Categories</h2>
        <Button variant="outline-info" className="mx-4">
          All
        </Button>
        <Button variant="outline-info" className="mx-4" active>
          Liquor
        </Button>
        <Button variant="outline-info" className="mx-4">
          Meat
        </Button>
        <Button variant="outline-info" className="mx-4">
          Fruits
        </Button>
        <Button variant="outline-info" className="mx-4">
          Cosmetic
        </Button>
        <Button variant="outline-info" className="mx-4">
          Grocery
        </Button>
        <Button variant="outline-info" className="mx-4">
          Cakes
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="ml-4"
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
          <tr>
            <TD1>1</TD1>
            <TD>Tuborg Beer</TD>
            <TD>20</TD>
            <TD>350</TD>
            <TD>5%</TD>
            <TD>Lorem ipsum dolor sit amet</TD>
            <TD>asd7f3434h</TD>
            <TD2>
              <Button variant="success" size="sm" className="mr-2">
                Edit
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </TD2>
          </tr>
          <tr>
            <TD1>1</TD1>
            <TD>Tuborg Beer</TD>
            <TD>20</TD>
            <TD>350</TD>
            <TD>5%</TD>
            <TD>Lorem ipsum dolor sit amet</TD>
            <TD>asd7f3434h</TD>
            <TD2>
              <Button variant="success" size="sm" className="mr-2">
                Edit
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </TD2>
          </tr>
          <tr>
            <TD1>1</TD1>
            <TD>Tuborg Beer</TD>
            <TD>20</TD>
            <TD>350</TD>
            <TD>5%</TD>
            <TD>Lorem ipsum dolor sit amet</TD>
            <TD>asd7f3434h</TD>
            <TD2>
              <Button variant="success" size="sm" className="mr-2">
                Edit
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </TD2>
          </tr>
          <tr>
            <TD1>1</TD1>
            <TD>Tuborg Beer</TD>
            <TD>20</TD>
            <TD>350</TD>
            <TD>5%</TD>
            <TD>Lorem ipsum dolor sit amet</TD>
            <TD>asd7f3434h</TD>
            <TD2>
              <Button variant="success" size="sm" className="mr-2">
                Edit
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </TD2>
          </tr>
          <tr>
            <TD1>1</TD1>
            <TD>Tuborg Beer</TD>
            <TD>20</TD>
            <TD>350</TD>
            <TD>5%</TD>
            <TD>Lorem ipsum dolor sit amet</TD>
            <TD>asd7f3434h</TD>
            <TD2>
              <Button variant="success" size="sm" className="mr-2">
                Edit
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </TD2>
          </tr>
          <tr>
            <TD1>1</TD1>
            <TD>Tuborg Beer</TD>
            <TD>20</TD>
            <TD>350</TD>
            <TD>5%</TD>
            <TD>Lorem ipsum dolor sit amet</TD>
            <TD>asd7f3434h</TD>
            <TD2>
              <Button variant="success" size="sm" className="mr-2">
                Edit
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </TD2>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Inventory;
