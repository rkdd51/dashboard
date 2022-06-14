import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordionn from "./Accordionn";
import ProgressBar from "react-bootstrap/ProgressBar";
function OrignalCard() {
  const now = 60;
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <div>
            <img
              src="https://picsum.photos/id/237/100/100"
              alt="randomImage"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <p style={{ fontWeight: "700", fontSize: "28px" }}>
              Good Morning, Adrien Weza!
            </p>
            <p style={{ color: "#979797" }}>
              Your today's dashboard | 22 Jan 2022
            </p>
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                color: "#2251FF"
              }}
            >
              →
            </button>
          </div>
        </Col>

        <Col md={6}>
          <div style={{ display: "flex", marginTop: "10%" }}>
            <p
              style={{
                fontSize: "25px",
                color: "#2251FF"
              }}
              className="mb-2"
            >
              4
            </p>

            <p>
              Approved <br />
              <b>Leave days</b>
            </p>

            <div
              style={{
                width: "57px",
                height: "0px",
                marginTop: "3%",
                border: "1px solid #979797",
                transform: "rotate(90deg)"
              }}
            ></div>

            <p
              style={{
                fontSize: "25px",
                color: "#2251FF"
              }}
            >
              0
            </p>
            <br />
            <p>
              Pending Approved <br />
              <b>Leave days</b>
            </p>

            <div
              style={{
                width: "57px",
                height: "0px",
                marginTop: "3%",
                border: "1px solid #979797",
                transform: "rotate(90deg)"
              }}
            ></div>

            <p
              style={{
                fontSize: "25px",
                color: "#2251FF"
              }}
            >
              20
            </p>
            <p>
              Remaining
              <br />
              <b>Leave days</b>
            </p>

            <div
              style={{
                width: "57px",
                height: "0px",
                marginTop: "3%",
                border: "1px solid #979797",
                transform: "rotate(90deg)"
              }}
            ></div>

            <p
              style={{
                fontSize: "25px",
                color: "#2251FF"
              }}
            >
              24
            </p>
            <p>
              Total Earned
              <br />
              <b>Leave days</b>
            </p>
          </div>
        </Col>
      </Row>
      {/* First Card */}
      <Row>
        <Col md={4}>
          <Card
            style={{
              width: "378px",
              height: "174px",
              left: "auto",
              top: "400px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px"
            }}
            className="mb-5"
          >
            <Card.Title
              style={{
                paddingLeft: "20%",
                marginTop: "5%"
              }}
            >
              <b>News</b>
            </Card.Title>
            <Card.Subtitle
              className="mb-2 "
              style={{
                paddingLeft: "20%"
              }}
            >
              Vatations Period 2022
            </Card.Subtitle>
            <Card.Text
              style={{
                paddingLeft: "10px",
                fontSize: "14px"
              }}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card>
        </Col>

        {/* Second Card */}
        <Col md={4}>
          <Card
            style={{
              width: "378px",
              height: "174px",
              left: "auto",
              top: "400px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px"
            }}
            className="mb-5"
          >
            <Card.Title
              style={{
                paddingLeft: "20%",
                marginTop: "5%"
              }}
            >
              <b> Declaration Request</b>
            </Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle> */}
            <Card.Text>
              <ProgressBar
                style={{
                  width: "331px",
                  height: "10px",
                  background: "#E5E5E5",
                  borderRadius: "5px",
                  marginTop: "10%",
                  marginLeft: "5%"
                }}
                variant="warning"
                now={now}
                label={`${now}%`}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5%"
                }}
              >
                <div>
                  <span
                    style={{
                      color: "#FAA082"
                    }}
                  >
                    3
                  </span>
                  <br />

                  <span
                    style={{
                      marginLeft: "-20px",
                      fontSize: "10px"
                    }}
                  >
                    Request
                  </span>
                </div>
                <div
                  style={{
                    width: "33.6px",
                    marginTop: "5%",
                    marginLeft: "50px",
                    marginRight: "35px",
                    height: "0px",
                    border: "1px solid #979797",
                    transform: "matrix(0.02, 1, -1, 0.01, 0, 0)"
                  }}
                ></div>

                <div>
                  <span
                    style={{
                      color: "#FAA082"
                    }}
                  >
                    2
                  </span>
                  <br />

                  <span
                    style={{
                      marginLeft: "-20px",
                      fontSize: "10px"
                    }}
                  >
                    Finished
                  </span>
                </div>
              </div>
            </Card.Text>
          </Card>
        </Col>
        {/* Third Card */}
        <Col md={4}>
          <Card
            style={{
              width: "378px",
              height: "384px",
              left: "auto",
              top: "397px",

              background: "#FFFFFF",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px"
            }}
            className="mb-5"
          >
            {/* ///////////////////// Imported Accordionn ////////////////// */}
            <Accordionn />
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Fourth Card */}
        <div
          style={{
            display: "flex"
          }}
        >
          <Card
            style={{
              width: "378px",
              height: "174px",
              left: "auto",
              top: "180px",
              //   marginLeft: "17%",

              background: "#FFFFFF",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px"
            }}
            className="mb-5"
          >
            <Card.Body>
              <Card.Title
                style={{
                  paddingLeft: "20%",
                  marginTop: "5%"
                }}
              >
                <b> Benefits</b>
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  paddingLeft: "20%"
                }}
              >
                Plafond total 1000
              </Card.Subtitle>
              <Card.Text>
                <ProgressBar
                  style={{
                    width: "331px",
                    height: "10px",
                    background: "#E5E5E5",
                    borderRadius: "5px",
                    marginTop: "5%",
                    marginLeft: "5%"
                  }}
                  variant="warning"
                  now={now}
                  label={`${now}%`}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5%"
                  }}
                >
                  <div>
                    <span
                      style={{
                        color: "#FAA082"
                      }}
                    >
                      1500
                    </span>
                    <br />

                    <span
                      style={{
                        //marginLeft: "-20px",
                        fontSize: "10px"
                      }}
                    >
                      Euroticket food Card
                    </span>
                  </div>
                  <div
                    style={{
                      width: "33.6px",
                      marginTop: "5%",
                      marginLeft: "50px",
                      marginRight: "35px",
                      height: "0px",
                      border: "1px solid #979797",
                      transform: "matrix(0.02, 1, -1, 0.01, 0, 0)"
                    }}
                  ></div>

                  <div>
                    <p
                      style={{
                        color: "#FAA082"
                      }}
                    >
                      2000
                    </p>
                    <br />

                    <p
                      style={{
                        fontSize: "10px"
                      }}
                    >
                      Child Care & Education
                    </p>
                  </div>
                  <div
                    style={{
                      width: "33.6px",
                      marginTop: "5%",
                      marginLeft: "50px",
                      marginRight: "35px",
                      height: "0px",
                      border: "1px solid #979797",
                      transform: "matrix(0.02, 1, -1, 0.01, 0, 0)"
                    }}
                  ></div>
                  <div>
                    <span
                      style={{
                        color: "#FAA082"
                      }}
                    >
                      3000
                    </span>
                    <br />

                    <span
                      style={{
                        fontSize: "10px"
                      }}
                    >
                      Car Plans
                    </span>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Fifth Card */}

          <Card
            style={{
              width: "172px",
              height: "174px",
              //left: "auto",
              top: "180px",
              marginLeft: "8%",

              background: "#FFFFFF",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px"
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  paddingLeft: "20%",
                  marginTop: "5%"
                }}
              >
                {" "}
                <b>Payslip</b>
              </Card.Title>

              <Card.Text>
                Available Payslips
                <br />
                <span
                  style={{
                    color: "#2251FF"
                  }}
                >
                  June 2022
                </span>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Sixth Card */}

          <Card
            style={{
              width: "172px",
              height: "174px",
              //left: "30",
              top: "180px",
              marginLeft: "2%",
              background: "#FFFFFF",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px"
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  paddingLeft: "20%",
                  marginTop: "5%"
                }}
              >
                <b>HR Team</b>
                <br />
                <Card.Text>
                  <span
                    style={{
                      color: "#2251FF"
                    }}
                  >
                    View Team
                  </span>
                </Card.Text>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
}

export default OrignalCard;
