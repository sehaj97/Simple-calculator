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
  const actionValues = ["+", "-"];
  const action = (valueA, valueB, actionType) => {
    console.log(oldInput);
    if (actionType === "+") {
      setResult(valueA + valueB);
      setOldInput(actionType);
    }
    if (actionType === "-") {
      if (valueA >= valueB) {
        setResult(valueA - valueB);
      } else {
        setResult(valueB - valueA);
      }
      setOldInput(actionType);
    }
  };
  const handler = (value) => {
    if (numValues.includes(value)) {
      setCalculatedValue(calculatedValue + value);
    } else if (actionValues.includes(value)) {
      setResult(calculatedValue);
      action(parseFloat(result), parseFloat(calculatedValue), value);
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
