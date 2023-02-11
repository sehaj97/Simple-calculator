import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/simple">Simple Calculator</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/scientific">Scientific Calculator</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
