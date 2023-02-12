/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const noPadding = css`
  padding: 1px;
`;
const btnStyle = css`
  padding: 25px;
  width: 100%;
`;
const functionBtnStyle = css`
  background-color: #ffc107;
  padding: 25px;
  width: 100%;
`;
function Simple() {
  return (
    <Container>
      <h1>Simple Calculator</h1>
      <Row>
        <Col xs={4}></Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            1
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            2
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            3
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={functionBtnStyle}>
            +
          </button>
        </Col>
        <Col xs={4}></Col>
      </Row>
      <Row>
        <Col xs={4}></Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            1
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            2
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            3
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={functionBtnStyle}>
            +
          </button>
        </Col>
        <Col xs={4}></Col>
      </Row>
      <Row>
        <Col xs={4}></Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            1
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            2
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            3
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={functionBtnStyle}>
            +
          </button>
        </Col>
        <Col xs={4}></Col>
      </Row>
      <Row>
        <Col xs={4}></Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            1
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            2
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            3
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={functionBtnStyle}>
            +
          </button>
        </Col>
        <Col xs={4}></Col>
      </Row>
      <Row>
        <Col xs={4}></Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            4
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            5
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={btnStyle}>
            6
          </button>
        </Col>
        <Col xs={1} css={noPadding}>
          <button type="button" class="btn btn-light" css={functionBtnStyle}>
            /
          </button>
        </Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
}
export default Simple;
