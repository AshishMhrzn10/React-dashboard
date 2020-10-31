import React from "react";
import { Container } from "react-bootstrap";
import DeliveryTopComponent from "../../components/DeliveryTopComponent";
import PendingTable from "../../components/tables/PendingTable";

function Delivered() {
  return (
    <Container>
      <DeliveryTopComponent />
      <PendingTable />
    </Container>
  );
}

export default Delivered;
