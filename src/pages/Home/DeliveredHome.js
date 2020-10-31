import React from "react";
import { Container } from "react-bootstrap";
import TopComponents from "../../components/TopComponents";
import DeliveredTable from "../../components/tables/DeliveredTable";

function DeliveredHome() {
  return (
    <Container>
      <TopComponents />
      <DeliveredTable />
    </Container>
  );
}

export default DeliveredHome;
