import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import styled from "styled-components";
import DeliveryTopComponent from "../../components/DeliveryTopComponent";

const Div = styled.div`
  color: white;
  height: 50px;
  font-size: 32px;
  padding-right: 40px;
`;

const Div1 = styled.div`
  background-color: white;
  height: 71px;
  font-size: 25px;
`;

function CheckStatus() {
  return (
    <Container>
      <DeliveryTopComponent />
      <Row className="my-5" style={{ backgroundColor: "blue" }}>
        <Div>Delivery Man 1</Div>
        <Div>Delivery Man 2</Div>
        <Div>Delivery Man 3</Div>
      </Row>

      <Row>
        <Col
          md={6}
          sm={12}
          style={{ background: "blue", borderRadius: "15px" }}
        >
          <div>
            <h3 style={{ color: "white" }}>Last Seen</h3>
            <Table borderless style={{ color: "white" }}>
              <thead style={{ borderBottom: "1px solid black" }}>
                <tr>
                  <th>Location</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kalanki</td>
                  <td>1:45pm</td>
                </tr>
                <tr>
                  <td>Kalanki</td>
                  <td>1:45pm</td>
                </tr>
                <tr>
                  <td>Kalanki</td>
                  <td>1:45pm</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        <Col
          md={5}
          sm={12}
          style={{
            background: "blue",
            borderRadius: "15px",
            marginLeft: "auto",
            height: "208px",
          }}
        >
          <div className="mt-2">
            <h3 style={{ float: "left" }}>Delivery of DM1</h3>
            <p style={{ float: "right" }}>
              Delivery Person Name
              <p>Ph No. 9808121314</p>
            </p>
          </div>
          <div style={{ clear: "both" }}></div>
          <hr style={{ backgroundColor: "white", marginTop: "-3px" }} />
          <Div1 style={{ float: "left" }} className="ml-4">
            Delivered <p>XXX</p>
          </Div1>
          <Div1 style={{ float: "right" }} className="mr-4">
            Pending <p>XXX</p>
          </Div1>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckStatus;
