import React from "react";
import style from "./Title.module.css";
import Button from "../Button";
import { titleIcon } from "../../../data/svg-items/svg-item";

const Title = ({ title, children, label }) => {
  return (
    <>
      <div
        className={style.titleIcon}
        dangerouslySetInnerHTML={{ __html: titleIcon }}
      ></div>
      <div className={style.titleWrapper}>
        <div className={style.partLeft}>
          <h3>{title}</h3>
          <span>{children}</span>
        </div>
        <div className={style.partRight}>
          <Button outlineColor="grey-15" buttonType="outline" color="grey-10">
            {label}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Title;
