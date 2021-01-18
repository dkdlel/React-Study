import React, { useState, useEffect, useMemo } from "react";
import "./Password.scss";

export default ({ password, confirmPassword, onChange }) => {
  const [confirm, setConfirm] = useState("");

  const [messageStyle, setMessageStyle] = useState({});

  useMemo(() => {
    if (confirmPassword !== "") {
      setMessageStyle({ height: "20px" });
    } else {
      setMessageStyle({ height: "0px" });
    }
  }, [confirmPassword]);

  useEffect(() => {
    setConfirm(
      confirmPassword === "" ? (
        ""
      ) : confirmPassword === password ? (
        <div className="success">비밀번호가 일치합니다.</div>
      ) : (
            <div className="fail">비밀번호가 일치하지 않습니다.</div>
          )
    );
  }, [password, confirmPassword]);

  return (
    <>
      <div className="passwordArea">{/* 비밀번호 */}
        <input
          type="text"
          className="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="비밀번호"
        ></input>
        <input
          type="text"
          className="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          placeholder="비밀번호 확인"
        ></input>
        <div className="passwordText" style={messageStyle}>
          {confirm}
        </div>
        {/* 비밀번호 일치 여부 */}
      </div>
    </>
  );
};
