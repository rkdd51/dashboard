import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Container fluid> */}
      <Navbar.Brand style={{ marginLeft: "50px" }}>
        McKisney
        <br />
        &nbsp;&nbsp;&nbsp;& Company
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="My HR" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              My Personal Info
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">My PTO</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">My HR Team</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Employment Decleration Request
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="My Benefits" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              My Personal Info
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Euroticket food Card
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Child Care & education Support
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Car Plan</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="My Compensation" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              My Monthly Payslip
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              My Annual Income Statement
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              My Severance Plan
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              My Compensation Memos (OLD)
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav.Link href="#home">
          <b>IBO-HR</b>
        </Nav.Link>

        <Nav.Link
          href="#home"
          style={{ marginLeft: "80px", marginRight: "50px" }}
        >
          <b>Adrien Weza </b>
          <br />
          Poland
        </Nav.Link>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavBar;
