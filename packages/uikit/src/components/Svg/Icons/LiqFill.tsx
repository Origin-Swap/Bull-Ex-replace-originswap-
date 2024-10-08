import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.57 30.9A16 16 0 0 0 33.95 19H18.43Z"
      className="clr-i-solid--alerted clr-i-solid-path-1--alerted"
    />
    <path
      d="M33.95 17a16 16 0 0 0-.18-1.61H22.23A3.68 3.68 0 0 1 19 9.89l4.06-7A16 16 0 0 0 7 29.6L17.49 17Z"
      className="clr-i-solid--alerted clr-i-solid-path-2--alerted"
    />
    <path
      d="M26.85 1.14 21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0"
      className="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"
    />
    <path fill="none" d="M0 0h36v36H0z" />
  </Svg>
  );
};

export default Icon;
