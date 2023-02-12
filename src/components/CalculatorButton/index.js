/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
const CalculatorButton = ({
  inputA,
  setInputA,
  inputB,
  setInputB,
  operator,
  setOperator,
  result,
  setResult,
  content,
  btnStyle,
}) => {
  const numValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operatorValues = ["+", "-", "*", "/", "%"];

  const handler = (value) => {
    if (numValues.includes(value)) {
      setInputA("");
      setInputA(inputA + value);
    }
    if (operatorValues.includes(value)) {
      if (result != "") {
        setResult(eval(inputB + inputA).toFixed(6));
        setOperator(value);
        setInputB(eval(inputB + inputA) + value);
      } else {
        setResult(inputA + value);
        setInputB(inputA + value);
      }
      setInputA("");
      setOperator(value);
    }
    if (value === "AC") {
      setInputA("");
      setOperator("");
      setInputB("");
      setResult("");
    }
    if (value === "=") {
      setResult(eval(inputB + inputA).toFixed(6));
      setInputA("");
      setOperator("");
      setInputB("");
    }
  };
  return (
    <button
      type="button"
      className="btn btn-light"
      css={btnStyle}
      onClick={() => {
        handler(content);
      }}
    >
      {content}
    </button>
  );
};

export default CalculatorButton;
