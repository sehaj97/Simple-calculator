/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculatorButton from "../../components/CalculatorButton";
import { useState } from "react";
const noPadding = css`
  padding: 5px;
`;
const btnStyle = css`
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 25%;
`;
const SpecialBtnStyle = css`
  padding: 10px;
  background-color: #ffc107;
  width: 100%;
  width: 100%;
  text-align: center;
  border-radius: 20px;
`;
const functionBtnStyle = css`
  padding: 10px;
  width: 100%;
  text-align: center;
  border-radius: 50%;
`;
function Simple({ calculatorValues }) {
  return (
    <Container>
      <h1>Simple Calculator</h1>
      {calculatorValues.map((valueSet) => {
        return (
          <Row>
            <Col xs={2} sm={4}></Col>
            {valueSet.map((value) => {
              return (
                <Col
                  xs={value === "Delete" || value === "AC" ? 4 : 2}
                  sm={value === "Delete" || value === "AC" ? 2 : 1}
                  css={noPadding}
                >
                  <CalculatorButton
                    content={value}
                    btnStyle={
                      value === "Delete" ||
                      value === "AC" ||
                      value === "+" ||
                      value === "-" ||
                      value === "/" ||
                      value === "X"
                        ? SpecialBtnStyle
                        : btnStyle
                    }
                  />
                </Col>
              );
            })}
            <Col xs={2} sm={4}></Col>
          </Row>
        );
      })}
    </Container>
  );
}
export default Simple;
