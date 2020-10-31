import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import TopComponents from "../../components/TopComponents";
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

function Processing() {
  return (
    <Container>
      <TopComponents />
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
            <th>Remarks</th>
            <th>Billing</th>
            <th>Time</th>
            <th style={{ borderRight: "1px solid #dee2e6" }}>Packed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TD1>005</TD1>
            <TD>S Maharjan</TD>
            <TD>Thankot</TD>
            <TD>
              <Button
                variant="danger"
                size="sm"
                disabled
                style={{ marginTop: "-8px", marginBottom: "-6px" }}
              >
                Unpaid
              </Button>
            </TD>
            <TD>2500</TD>
            <TD>1.25pm</TD>
            <TD2>
              <input type="checkbox" />
            </TD2>
          </tr>
          <tr>
            <TD1>005</TD1>
            <TD>S Maharjan</TD>
            <TD>Thankot</TD>
            <TD>
              <Button
                variant="success"
                size="sm"
                disabled
                style={{ marginTop: "-8px", marginBottom: "-6px" }}
              >
                Paid
              </Button>
            </TD>
            <TD>2500</TD>
            <TD>1.25pm</TD>
            <TD2>
              <input type="checkbox" />
            </TD2>
          </tr>
          <tr>
            <TD1>005</TD1>
            <TD>S Maharjan</TD>
            <TD>Thankot</TD>
            <TD>
              <Button
                variant="danger"
                size="sm"
                disabled
                style={{ marginTop: "-8px", marginBottom: "-6px" }}
              >
                Unpaid
              </Button>
            </TD>
            <TD>2500</TD>
            <TD>1.25pm</TD>
            <TD2>
              <input type="checkbox" />
            </TD2>
          </tr>
          <tr>
            <TD1>005</TD1>
            <TD>S Maharjan</TD>
            <TD>Thankot</TD>
            <TD>
              <Button
                variant="success"
                size="sm"
                disabled
                style={{ marginTop: "-8px", marginBottom: "-6px" }}
              >
                Paid
              </Button>
            </TD>
            <TD>2500</TD>
            <TD>1.25pm</TD>
            <TD2>
              <input type="checkbox" />
            </TD2>
          </tr>
          <tr>
            <TD1>005</TD1>
            <TD>S Maharjan</TD>
            <TD>Thankot</TD>
            <TD>
              <Button
                variant="danger"
                size="sm"
                disabled
                style={{ marginTop: "-8px", marginBottom: "-6px" }}
              >
                Unpaid
              </Button>
            </TD>
            <TD>2500</TD>
            <TD>1.25pm</TD>
            <TD2>
              <input type="checkbox" />
            </TD2>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Processing;
