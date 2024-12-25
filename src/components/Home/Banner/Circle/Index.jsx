import React from "react";
import "./Circle.css";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import ReactCurvedText from "react-curved-text";

const Circle = () => {
  const text = "✨ Discover Your Dream Property ";

  return (
    <div className="circle">
      <ReactCurvedText
        text={text}
        width={129}
        height={129}
        cx={0}
        cy={0}
        rx={129}
        ry={126}
        startOffset={0}
        reversed={false}
        textProps={{ style: { fontSize: 10 } }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={null}
      ></ReactCurvedText>
      <ArrowUpRightIcon className="arrow-icon" width={24} height={24} />
    </div>
  );
};

export default Circle;
