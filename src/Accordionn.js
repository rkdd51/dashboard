import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
const Accordionn = () => {
  return (
    <>
      {/* /////////////////////////////////////First Accordian /////////////////////////////// */}
      <Accordion
        defaultActiveKey="0"
        style={{
          width: "326px",
          height: "101px",
          background: "#3C96B4",
          borderRadius: "10px"
        }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header> My HR</Accordion.Header>
          <Accordion.Body>
            <div
              style={{
                display: "flex"
                // justifyContent: "space-between",
              }}
            >
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        {/* /////////////////////Second Accordion//////////////////////////////////// */}

        <Accordion.Item eventKey="1">
          <Accordion.Header> My Benefits</Accordion.Header>
          <Accordion.Body>
            <div
              style={{
                display: "flex",
                // justifyContent: "space-between",
                padding: "3px"
              }}
            >
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* ////////////////////////Third Accordion///////////////////////////////// */}
        <Accordion.Item eventKey="2">
          <Accordion.Header> My Compensation</Accordion.Header>
          <Accordion.Body>
            <div
              style={{
                display: "flex"
                // justifyContent: "space-between",
                // padding: "3px",
              }}
            >
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
              <Card
                style={{
                  width: "71px",
                  height: "71px",
                  background: "#3C96B4"
                }}
              >
                {" "}
                This is a card
              </Card>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
export default Accordionn;
