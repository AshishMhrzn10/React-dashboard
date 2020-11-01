import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./Login.css";

function Login() {
  return (
    <Container fluid>
      <Row>
        <Col style={{ marginLeft: "35px" }}>
          <Button variant="primary" className="badge">
            System Monitor
          </Button>
          <Button variant="primary" className="badge">
            Account
          </Button>
          <Button variant="primary" className="badge">
            Sales
          </Button>
          <div className="title">
            <h1>
              Welcome To <p>Login Page</p>
            </h1>
          </div>
          <form>
            <label>User Name</label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              style={{ width: "60%" }}
            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <input
              type="text"
              name="password"
              id="password"
              style={{ width: "60%" }}
            />

            <div className="mt-2">
              <input type="checkbox" className="mr-2" />
              <label className="remember">Remember Me</label>
              <a>
                {" "}
                <label className="forgetpassword">
                  <p>Forget Password ?</p>
                </label>{" "}
              </a>
            </div>

            <button type="submit" className="button">
              LOGIN
            </button>
          </form>

          <div className="mt-5">
            <a href="www.nasatechnicalsolutions.com.np">
              <p className="footer">
                Developed And Created By Nasatechnicalsolutions (NTS).
              </p>
            </a>
          </div>
        </Col>

        <Col style={{ paddingRight: "unset" }}>
          <div
            className="design"
            style={{ height: "100vh", width: "100%", marginTop: "-60px" }}
          >
            <h3>
              <u>Welcome To Shahil Store Pvt. Ltd.</u>
            </h3>

            <h5 id="a1">Kalanki, Pulmuni Underground,</h5>
            <h5 id="a2">Kathmandu, Nepal</h5>
            <p className="a3">
              We are here to serve you 24/7 for system support.
            </p>
            <img
              className="img2"
              alt=""
              src={require("../images/logonts.png")}
              style={{ height: "200px", weight: "200px" }}
            ></img>

            <a>
              <p>
                <i className="footer2">
                  <u>Copyright NTS Store.</u>
                </i>{" "}
              </p>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
