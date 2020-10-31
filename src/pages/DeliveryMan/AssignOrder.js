import React, { useState } from "react";
import { Container, Table, Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import DeliveryTopComponent from "../../components/DeliveryTopComponent";

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

function AssignOrder() {
  const [assign, setassign] = useState("Assign Order");
  return (
    <Container>
      <DeliveryTopComponent />
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
            <th>Packed</th>
            <th style={{ borderRight: "1px solid #dee2e6" }}>Assign Order</th>
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
            <TD>1.25pm (00:00)</TD>
            <TD>
              <input type="checkbox" />
            </TD>
            <TD2>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  size="sm"
                  style={{ marginTop: "-8px", marginBottom: "-6px" }}
                >
                  {assign}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setassign("Delivery1")}>
                    Delivery 1
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setassign("Delivery2")}>
                    Delivery 2
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setassign("Assign Order")}>
                    None
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
            <TD>1.25pm (00:00)</TD>
            <TD>
              <input type="checkbox" />
            </TD>
            <TD2>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  size="sm"
                  style={{ marginTop: "-8px", marginBottom: "-6px" }}
                >
                  {assign}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setassign("Delivery1")}>
                    Delivery 1
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setassign("Delivery2")}>
                    Delivery 2
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setassign("Assign Order")}>
                    None
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
            <TD>1.25pm (00:00)</TD>
            <TD>
              <input type="checkbox" />
            </TD>
            <TD2>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  size="sm"
                  style={{ marginTop: "-8px", marginBottom: "-6px" }}
                >
                  {assign}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setassign("Delivery1")}>
                    Delivery 1
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setassign("Delivery2")}>
                    Delivery 2
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setassign("Assign Order")}>
                    None
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </TD2>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default AssignOrder;
