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
  font-size: 3rem;
  text-align: right;
  color: white;
  overflow-wrap: anywhere;
`;
const inputStyle = css`
  font-size: 2rem;
  text-align: right;
  color: grey;
  overflow-wrap: anywhere;
`;
function Simple({ calculatorValues }) {
  const [inputB, setInputB] = useState("");
  const [inputA, setInputA] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  return (
    <Container>
      <h1>React Calculator</h1>
      <Row>
        <Col xs={2} sm={4}></Col>
        <Col xs={8} sm={4}>
          <h2 css={resultStyle}>{result === "" ? 0 : result}</h2>
          <h3 css={inputStyle}>{`${inputB}${inputA}`}</h3>
          <h3 css={inputStyle}>{inputA === "" ? 0 : inputA}</h3>
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
                  xs={value === "=" || value === "AC" ? 4 : 2}
                  sm={value === "=" || value === "AC" ? 2 : 1}
                  css={noPadding}
                >
                  <CalculatorButton
                    inputA={inputA}
                    setInputA={setInputA}
                    inputB={inputB}
                    setInputB={setInputB}
                    operator={operator}
                    setOperator={setOperator}
                    result={result}
                    setResult={setResult}
                    content={value}
                    btnStyle={
                      value === "=" ||
                      value === "AC" ||
                      value === "+" ||
                      value === "-" ||
                      value === "/" ||
                      value === "*" ||
                      value === "%"
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
