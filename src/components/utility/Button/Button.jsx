import React from "react";
import style from "./Button.module.css";

const Button = ({ color, elementType, children, buttonType, outlineColor }) => {
  const inlineStyles = {
    backgroundColor: `var(--${color ? color : "purple-60"})`,
    border:
      buttonType == "outline"
        ? `1px solid ${
            outlineColor ? "var(--" + outlineColor + ")" : "var(--grey-15)"
          }`
        : null,
  };

  return (
    <>
      {elementType == "a" ? (
        <a className={style.siteBtn} style={inlineStyles}>
          <span>{children}</span>
        </a>
      ) : (
        <button className={style.siteBtn} style={inlineStyles}>
          <span>{children}</span>
        </button>
      )}
    </>
  );
};

export default Button;

// elementType - a tag / button tag
