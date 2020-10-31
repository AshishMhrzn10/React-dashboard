import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const But = styled.button`
  background-color: blue;
  color: white;
  text-align: center;
  height: 90px;
  font-size: 32px;
  width: 100%;
  border: none;
  outline: none !important;
`;

function DeliveryTopComponent() {
  return (
    <Row className="my-3">
      <Col md={3} sm={6}>
        <Link to="/delivery_man/assign_order">
          <But>
            Assign <p>Order</p>
          </But>
        </Link>
      </Col>
      <Col md={3} sm={6}>
        <Link to="/delivery_man/check_status">
          <But>
            Check <p>Status</p>
          </But>
        </Link>
      </Col>
      <Col md={3} sm={6}>
        <Link to="/delivery_man/delivered">
          <But>
            Delivered <p>50</p>
          </But>
        </Link>
      </Col>
      <Col md={3} sm={6}>
        <Link to="/delivery_man/pending">
          <But>
            Pending <p>20</p>
          </But>
        </Link>
      </Col>
    </Row>
  );
}

export default DeliveryTopComponent;
