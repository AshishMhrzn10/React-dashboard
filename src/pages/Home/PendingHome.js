import React from "react";
import { Container } from "react-bootstrap";
import TopComponents from "../../components/TopComponents";
import PendingTable from "../../components/tables/PendingTable";

function PendingHome() {
  return (
    <Container>
      <TopComponents />
      <PendingTable />
    </Container>
  );
}

export default PendingHome;
