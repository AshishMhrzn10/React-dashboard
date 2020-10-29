import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = styled.h1`
  color: blue;
`;

const Column = styled(Col)`
  text-align: center;
  border: 1px solid black;
  margin-bottom: 40px;
`;

const P = styled.p`
  font-weight: bold;
`;

const Icon = styled.span`
  position: absolute;
  font-size: 19px;
  background-color: dodgerblue;
  width: 35px;
  height: 30px;
  color: white;
  top: -16px;
  right: -16px;
  border-radius: 999px;
`;

const Span = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 0px;
`;

const Buttons = styled.button`
  border: none;
  outline: none !important;
`;

function TopComponents() {
  return (
    <Container>
      <Head>Dashboard</Head>
      <div style={{ marginBottom: "40px" }}>
        <span>From: </span> <input type="date" className="mr-4" />{" "}
        <span>To: </span> <input type="date" />
      </div>
      <Row style={{ marginLeft: "-48px" }}>
        <Column md={{ span: 1.5, offset: 1 }}>
          <Link to="/">
            <Buttons>
              <div>
                <Span>
                  <img src={require("../images/todo.png")} alt="" />
                  <Icon>10</Icon>
                </Span>
                <P>New Order</P>
              </div>
            </Buttons>
          </Link>
        </Column>
        <Column md={{ span: 1.5, offset: 1 }}>
          <Link to="/processing">
            <Buttons>
              <div>
                <Span>
                  <img src={require("../images/todo.png")} alt="" />
                  <Icon>10</Icon>
                </Span>
                <P>Pending</P>
              </div>
            </Buttons>
          </Link>
        </Column>
        <Column md={{ span: 1.5, offset: 1 }}>
          <Link to="/processing">
            <Buttons>
              <div>
                <Span>
                  <img src={require("../images/todo.png")} alt="" />
                  <Icon>10</Icon>
                </Span>
                <P>Processing</P>
              </div>
            </Buttons>
          </Link>
        </Column>
        <Column md={{ span: 1.5, offset: 1 }}>
          <Link to="/processing">
            <Buttons>
              <div>
                <Span>
                  <img src={require("../images/todo.png")} alt="" />
                  <Icon>10</Icon>
                </Span>
                <P>Delivered</P>
              </div>
            </Buttons>
          </Link>
        </Column>
        <Column md={{ span: 1.5, offset: 1 }}>
          <Link to="/processing">
            <Buttons>
              <div>
                <Span>
                  <img src={require("../images/todo.png")} alt="" />
                  <Icon>10</Icon>
                </Span>
                <P>Cancelled</P>
              </div>
            </Buttons>
          </Link>
        </Column>
      </Row>
    </Container>
  );
}

export default TopComponents;
