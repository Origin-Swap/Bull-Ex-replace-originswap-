import * as React from "react";

const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M10.5 30.6c-3.5 0-7-1-10-3-.4-.3-.5-.7-.4-1.2.2-.4.6-.7 1.1-.7 2.3.3 4.5-.1 6.4-1.1-1.9-.8-3.5-2.4-4.1-4.5-.1-.3 0-.7.2-1l.1-.1c-1.5-1.4-2.5-3.4-2.5-5.5 0-.4.2-.7.5-.9.1-.1.3-.1.4-.1-.6-1.1-.9-2.3-.9-3.5 0-1.3.3-2.6 1-3.7.1-.3.4-.5.8-.5.3 0 .7.1.9.4 2.3 2.9 5.5 5 9.1 5.8 0-4.4 3.6-8 8-8 2.2 0 4.3.9 5.8 2.5 1-.3 1.8-.8 2.7-1.3.4-.2.9-.2 1.2.1.2.3.3.7.1 1.1l-1.5 3 1.9.6c.4.2.7.5.7.9s-.1.8-.5 1l-2.6 1.5c-.3 9-7.2 18.2-18.4 18.2"
      style={{
        fill: "#00aced",
      }}
    />
  </svg>
);
export default SVGComponent;
