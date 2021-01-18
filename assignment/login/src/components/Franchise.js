import React, { useState, useMemo } from "react";
import "./Franchise.scss";
import { Button } from '@material-ui/core';

export default ({ franchiseName, email, onChange }) => {
  const [buttonStyle, setButtonStyle] = useState({});

  useMemo(() => {
    const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
    if (email.match(emailRegExp)) {
      setButtonStyle({
        border: "none",
        backgroundColor: "#008762",
        color: "white",
        fontWeight: "bold",
        borderRadius: "3px",
      });
    } else {
      setButtonStyle({ backgroundColor: "", color: "black" });
    }
  }, [email]);

  return (
    <>
      <div className="FranchiseArea">{/* 가맹점명 ~ 중복검사 */}
        <input
          type="text"
          className="franchiseName"
          name="franchiseName"
          value={franchiseName}
          onChange={onChange}
          placeholder="가맹점명"
        ></input>
        <input
          type="text"
          className="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="이메일"
        ></input>
        <Button className="btn1"
        // style={buttonStyle}
        >
          <div className="btnText">중복검사</div>
        </Button>
      </div>
    </>
  );
};
