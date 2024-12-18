import React from "react";
import style from "./Title.module.css";

const Title = ({ title, children, label }) => {
  return (
    <>
      <div className={style.titleWrapper}>
        <div className={style.partLeft}>
          <h3>{title}</h3>
          <span>{children}</span>
        </div>
        <div className={style.partRight}>
          <span>{label}</span>
        </div>
      </div>
    </>
  );
};

export default Title;
