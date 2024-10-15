import * as React from "react";

const SVGComponent = (props) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0.5 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M20.317 4.541a19.6 19.6 0 0 0-4.885-1.54.074.074 0 0 0-.079.038c-.21.381-.444.879-.608 1.27-1.845-.28-3.68-.28-5.487 0-.163-.4-.406-.889-.617-1.27a.08.08 0 0 0-.079-.038c-1.714.3-3.354.826-4.885 1.54a.07.07 0 0 0-.032.028C.533 9.293-.32 13.9.099 18.451a.08.08 0 0 0 .031.057 19.8 19.8 0 0 0 5.993 3.079.08.08 0 0 0 .084-.029c.462-.64.874-1.316 1.226-2.026a.08.08 0 0 0-.041-.107 13 13 0 0 1-1.872-.907.08.08 0 0 1-.008-.13q.19-.144.372-.296a.07.07 0 0 1 .078-.01c3.927 1.822 8.18 1.822 12.061 0a.07.07 0 0 1 .079.009q.18.151.372.297a.08.08 0 0 1-.006.13q-.895.531-1.873.906a.08.08 0 0 0-.041.108c.36.71.772 1.385 1.225 2.026a.075.075 0 0 0 .084.029 19.7 19.7 0 0 0 6.002-3.079.08.08 0 0 0 .032-.056c.5-5.26-.838-9.83-3.549-13.882a.06.06 0 0 0-.031-.029M8.02 15.681c-1.182 0-2.157-1.104-2.157-2.459s.956-2.458 2.157-2.458c1.21 0 2.176 1.113 2.157 2.458 0 1.355-.956 2.458-2.157 2.458m7.975 0c-1.183 0-2.157-1.104-2.157-2.459s.955-2.458 2.157-2.458c1.21 0 2.176 1.113 2.157 2.458 0 1.355-.946 2.458-2.157 2.458"
        fill="#758CA3"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
