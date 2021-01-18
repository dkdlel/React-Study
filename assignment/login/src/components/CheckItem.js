import React from "react";
import cn from "classnames";
import "./CheckItem.scss";
import NSVG from "../svg/notchecked.svg";

export default ({ checked, text, show, subText, onToggle }) => {
  return (
    <div className="selectCheckbox">
      <div className={cn("boxArea", { checked })} onClick={onToggle}>
        {<img src={NSVG} alt="" />}
      </div>
      {text}
      <div className="showText">{show}</div>
      <div className="subText">{subText}</div>
    </div>
  );
};
