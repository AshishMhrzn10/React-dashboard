import React from "react";
import { Container } from "react-bootstrap";
import DeliveryTopComponent from "../../components/DeliveryTopComponent";
import DeliveredTable from "../../components/tables/DeliveredTable";

function Delivered() {
  return (
    <Container>
      <DeliveryTopComponent />
      <DeliveredTable />
    </Container>
  );
}

export default Delivered;
