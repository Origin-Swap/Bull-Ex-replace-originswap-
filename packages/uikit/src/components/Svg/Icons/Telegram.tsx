import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
        viewBox="0 0 100 100"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g />
        <path
          d="M88.723 12.142C76.419 17.238 23.661 39.091 9.084 45.047c-9.776 3.815-4.053 7.392-4.053 7.392s8.345 2.861 15.499 5.007c7.153 2.146 10.968-.238 10.968-.238l33.62-22.652c11.922-8.107 9.061-1.431 6.199 1.431-6.199 6.2-16.452 15.975-25.036 23.844-3.815 3.338-1.908 6.199-.238 7.63 6.199 5.246 23.129 15.976 24.082 16.691 5.037 3.566 14.945 8.699 16.452-2.146l5.961-37.435c1.908-12.637 3.815-24.321 4.053-27.659.716-8.108-7.868-4.77-7.868-4.77"
          style={{
            fill: "#1b92d1",
          }}
        />
      </Svg>
  );
};

export default Icon;
