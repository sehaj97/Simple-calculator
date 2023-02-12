/** @jsxImportSource @emotion/react */
import Nav from "react-bootstrap/Nav";
import { Outlet, Link } from "react-router-dom";
import { css } from "@emotion/react";
const removeUnderline = css`
  text-decoration: none;
`;
const style = css`
  text-decoration: none;
  color: white;
  &:focus {
    color: black;
  }
`;

function Navigation() {
  return (
    <div className="App">
      <Nav justify variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Link to="/" css={removeUnderline}>
            <Nav.Link href="/" css={style}>
              Simple Calculator
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/scientific" css={removeUnderline}>
            <Nav.Link href="/scientific" css={style}>
              Scientific Calculator
            </Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
      <Outlet />
    </div>
  );
}

export default Navigation;
