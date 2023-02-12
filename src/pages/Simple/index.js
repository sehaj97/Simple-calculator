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
const resultStyle = css`
  font-size: 4rem;
  text-align: right;
  color: white;
`;
const inputStyle = css`
  font-size: 3rem;
  text-align: right;
  color: grey;
`;
function Simple({ calculatorValues, calculatedValue, setCalculatedValue }) {
  const [oldInput, setOldInput] = useState(0);
  const [newCalculation, setNewCalculation] = useState(0);
  const [result, setResult] = useState(newCalculation);
  return (
    <Container>
      <h1>Simple Calculator</h1>
      <Row>
        <Col xs={2} sm={4}></Col>
        <Col xs={8} sm={4}>
          <h2 css={resultStyle}>{result}</h2>
          <h3 css={inputStyle}>
            {calculatedValue === "" ? "0" : calculatedValue}
          </h3>
        </Col>
        <Col xs={2} sm={4}></Col>
      </Row>
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
                    calculatedValue={calculatedValue}
                    setCalculatedValue={setCalculatedValue}
                    oldInput={oldInput}
                    setOldInput={setOldInput}
                    newCalculation={newCalculation}
                    setNewCalculation={setNewCalculation}
                    result={result}
                    setResult={setResult}
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
