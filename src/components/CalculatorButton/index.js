/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const CalculatorButton = ({ content, btnStyle }) => {
  return (
    <button
      type="button"
      class="btn btn-light"
      css={btnStyle}
      onClick={() => {}}
    >
      {content}
    </button>
  );
};

export default CalculatorButton;
