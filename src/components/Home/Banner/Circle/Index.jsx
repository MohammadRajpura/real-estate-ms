import React from "react";
import "./Circle.css";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import ReactCurvedText from "react-curved-text";

const Circle = () => {
  const text = "✨Discover  Your  Dream  Property ";

  return (
    <div className="circle">
      <ReactCurvedText
        width={129} // Adjust width to match your circle size
        height={129} // Same as the width
        cx={65} // Center X of the circle (half of width)
        cy={65} // Center Y of the circle (half of height)
        rx={52} // Radius of the text path (adjust slightly smaller than `.circle`)
        ry={52} // Same as rx for a perfect circle
        text={text}
        textProps={{
          style: {
            fontSize: "12px",
            fill: "var(--white)",
            letterSpacing: "6px",
          },
        }} // Adjust text style
        startOffset={0} // Text starting position
      />
      <ArrowUpRightIcon className="arrow-icon" width={24} height={24} />
    </div>
  );
};

export default Circle;
