import React from "react";
import { Container, Row, Col, Table, Pagination } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TopComponents from "../components/TopComponents";

const Thead = styled.thead`
  background-color: black;
  color: white;
`;

const Page = styled(Pagination)`
  justify-content: flex-end;
`;

const Sales = styled.div`
  margin-left: -15px;
  margin-right: -15px;
`;

export default function Home() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Container>
      <TopComponents />
      <Row>
        <Col md={8}>
          <Table striped bordered hover>
            <Thead variant="dark">
              <tr>
                <th>OrderId</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </Thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sajal Maharjan</td>
                <td>2020/06/01</td>
                <td>Rs.25000</td>
                <td>Paid</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ashish Maharjan</td>
                <td>2020/02/01</td>
                <td>Rs.2100</td>
                <td>Cancelled</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sajal Maharjan</td>
                <td>2020/06/04</td>
                <td>Rs.25000</td>
                <td>Unpaid</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Sajal Maharjan</td>
                <td>2020/10/01</td>
                <td>Rs.25000</td>
                <td>Unpaid</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Sajal Maharjan</td>
                <td>2020/02/01</td>
                <td>Rs.25000</td>
                <td>Unpaid</td>
              </tr>
            </tbody>
          </Table>
          <div>
            <Page>{items}</Page>
          </div>
        </Col>

        <Col style={{ background: "#a300cc", height: "75%", color: "white" }}>
          <Sales style={{ background: "#9966ff" }}>
            <h2 style={{ fontSize: "50px", textAlign: "center" }}>
              Total Sales
            </h2>
            <hr />
          </Sales>
          <div>
            <p style={{ float: "left" }}>Total Sales</p>
            <p style={{ float: "right" }}>
              <Link to="#">View Report</Link>
            </p>
          </div>
          <div style={{ clear: "both" }}></div>
          <div>
            <p>
              <b>Rs.XXX</b>
            </p>
          </div>
          <br />
          <br />
          <div>
            <p>This Week So Far</p>
            <p>
              <b>Rs.XXX</b>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
