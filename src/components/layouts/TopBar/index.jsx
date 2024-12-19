import { XMarkIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import "./TopBar.css";

const TopBar = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {isShow && (
        <div className="top-bar">
          <h5>
            ✨Discover Your Dream Property with Estatein{" "}
            <a className="text-underline">Learn More</a>
          </h5>
          <div className="close-icon" onClick={() => setIsShow(!isShow)}>
            <XMarkIcon height={24} width={24} color="#fff"></XMarkIcon>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
