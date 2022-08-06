import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Navv() {
  return (
    <>
      <Nav
        className=" text-light  d-flex justify-content-center p-4 navStyle"
        defaultActiveKey="/home"
        as="ul"
      >
        <Nav.Item className=" navHover" as="li">
          <Nav.Link as={Link} to="/" className="text-light linkBackground">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className=" navHover" as="li">
          <Nav.Link as={Link} to="/grass" className="text-light linkBackground">
            Grass
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className=" navHover" as="li">
          <Nav.Link
            as={Link}
            to="/contact"
            className="text-light linkBackground"
          >
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navv;
