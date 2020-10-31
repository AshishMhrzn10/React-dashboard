import React from "react";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";

const TD = styled.td`
  border-bottom: 1px solid #dee2e6;
`;

const TD1 = styled.td`
  border-left: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
`;

const TD2 = styled.td`
  border-right: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
`;

function DeliveredTable() {
  return (
    <Table
      style={{
        borderCollapse: "separate",
        borderSpacing: "0 10px",
        textAlign: "center",
      }}
    >
      <thead>
        <tr>
          <th style={{ borderLeft: "1px solid #dee2e6" }}>Id</th>
          <th>Username</th>
          <th>Address</th>
          <th>Billing</th>
          <th>Time</th>
          <th style={{ borderRight: "1px solid #dee2e6" }}>Remarks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TD1>005</TD1>
          <TD>S Maharjan</TD>
          <TD>Thankot</TD>
          <TD>2500</TD>
          <TD>1.25pm(00:00)</TD>
          <TD2>
            <Button
              variant="danger"
              size="sm"
              disabled
              style={{ marginTop: "-8px", marginBottom: "-6px" }}
            >
              Pending
            </Button>
          </TD2>
        </tr>

        <tr>
          <TD1>005</TD1>
          <TD>S Maharjan</TD>
          <TD>Thankot</TD>
          <TD>2500</TD>
          <TD>1.25pm(00:00)</TD>
          <TD2>
            <Button
              variant="danger"
              size="sm"
              disabled
              style={{ marginTop: "-8px", marginBottom: "-6px" }}
            >
              Pending
            </Button>
          </TD2>
        </tr>
        <tr>
          <TD1>005</TD1>
          <TD>S Maharjan</TD>
          <TD>Thankot</TD>
          <TD>2500</TD>
          <TD>1.25pm(00:00)</TD>
          <TD2>
            <Button
              variant="danger"
              size="sm"
              disabled
              style={{ marginTop: "-8px", marginBottom: "-6px" }}
            >
              Pending
            </Button>
          </TD2>
        </tr>
        <tr>
          <TD1>005</TD1>
          <TD>S Maharjan</TD>
          <TD>Thankot</TD>
          <TD>2500</TD>
          <TD>1.25pm(00:00)</TD>
          <TD2>
            <Button
              variant="danger"
              size="sm"
              disabled
              style={{ marginTop: "-8px", marginBottom: "-6px" }}
            >
              Pending
            </Button>
          </TD2>
        </tr>
      </tbody>
    </Table>
  );
}

export default DeliveredTable;
