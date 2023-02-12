/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
const CalculatorButton = ({
  calculatedValue,
  setCalculatedValue,
  oldInput,
  setOldInput,
  newCalculation,
  setNewCalculation,
  result,
  setResult,
  content,
  btnStyle,
}) => {
  const numValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const handler = (value) => {
    if (numValues.includes(value)) {
      calculatedValue = calculatedValue + value;
      setCalculatedValue(calculatedValue);
      setOldInput(parseFloat(calculatedValue));
    } else if (value === "+") {
      setResult(result + oldInput);
      setOldInput(parseFloat(result));
      setCalculatedValue("");
    } else if (value === "-") {
      if (oldInput >= result) {
        setResult(oldInput - result);
      } else {
        setResult(result - oldInput);
      }
      setOldInput(parseFloat(result));
      setCalculatedValue("");
    } else if (value === "AC") {
      setCalculatedValue("");
      setNewCalculation(0);
      setOldInput(0);
      setResult(0);
    }
  };
  return (
    <button
      type="button"
      class="btn btn-light"
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
