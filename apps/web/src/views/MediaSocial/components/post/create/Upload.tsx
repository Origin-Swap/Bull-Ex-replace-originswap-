import * as React from "react";

const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M58 37.104V4a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h34.003c1.963 4.693 6.6 8 11.997 8 7.168 0 13-5.832 13-13 0-2.535-.74-4.895-2-6.896M34.359 47H2V5h54v29.622c-.17-.164-.354-.311-.532-.465-.088-.075-.171-.155-.261-.228-.235-.192-.48-.37-.728-.545-.092-.065-.181-.135-.275-.198a13 13 0 0 0-.754-.458c-.109-.063-.214-.13-.325-.189l-.232-.123a.99.99 0 0 0-.218-1.154l-12-11a1 1 0 0 0-1.414.063l-9.794 10.727-4.743-4.743a1 1 0 0 0-1.368-.044L6.339 41.249a1 1 0 0 0 1.321 1.502l16.313-14.362L34.275 38.69c.203.203.47.295.736.287A12.9 12.9 0 0 0 34 44c0 .493.033.977.087 1.456.009.075.024.149.034.224q.083.642.227 1.262zm14.42-15.864c-.162-.022-.321-.055-.485-.071A13 13 0 0 0 47 31c-4.773 0-8.942 2.593-11.203 6.437-.036-.054-.06-.114-.107-.162l-4.807-4.807 9.181-10.054 9.694 8.887q-.1-.024-.2-.045c-.257-.052-.519-.084-.779-.12M47 55c-4.787 0-8.859-3.08-10.367-7.358a11 11 0 0 1-.249-.806l-.045-.173a11 11 0 0 1-.156-.716q-.034-.2-.061-.401c-.026-.18-.054-.36-.071-.54-.03-.332-.051-.667-.051-1.006 0-6.065 4.935-11 11-11 .426 0 .848.031 1.265.079.127.015.25.039.375.057q.437.064.863.162.211.05.421.108.401.111.792.253c.134.048.269.094.4.147.295.119.583.255.866.399.083.042.17.077.252.121.342.185.671.393.992.614.131.09.255.19.382.286a11 11 0 0 1 .957.808q.29.277.559.575c.094.103.191.202.281.309q.393.465.739.976A10.94 10.94 0 0 1 58 44c0 6.065-4.935 11-11 11" />
    <path d="M53 43h-5v-5a1 1 0 1 0-2 0v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2M16 25.138a5.575 5.575 0 0 0 5.569-5.568c0-3.072-2.498-5.57-5.569-5.57s-5.569 2.498-5.569 5.569A5.575 5.575 0 0 0 16 25.138M16 16c1.968 0 3.569 1.602 3.569 3.569S17.968 23.138 16 23.138s-3.569-1.601-3.569-3.568S14.032 16 16 16" />
  </svg>
);
export default SVGComponent;