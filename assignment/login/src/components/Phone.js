import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { Button } from '@material-ui/core';
import "./Phone.scss";

function twolength(num) {
  return (num < 10 ? '0' : '') + num
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== 0) {
      function tick() {
        savedCallback.current();
      }
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

  }, [delay]);
}

export default ({ phone, confirmPhone, onChange, onToggle }) => {

  const [buttonStyle, setButtonStyle] = useState({});
  const [btnClick, setBtnClick] = useState(false);
  const [timer, setTimer] = useState(0);
  const [sendText, setSendText] = useState('인증번호 발송');
  const [successPhone, setSuccessPhone] = useState(false);

  useMemo(() => {
    const PhoneRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
    if (phone.match(PhoneRegExp)) {
      setButtonStyle({
        border: "none",
        backgroundColor: "#008762",
        color: "white",
        fontWeight: "bold",
        borderRadius: "3px",
      });
      setSuccessPhone(true);
    }
    else {
      setButtonStyle({ backgroundColor: "", color: "black" });
      setSuccessPhone(false);
    }
  }, [phone]);

  useInterval(() => {
    setTimer(timer - 1);
    if (timer === 1) {
      setBtnClick(false);
      onToggle();
    }
  }, btnClick && timer ? 1000 : 0);

  const onSendClick = useCallback(() => {
    if (successPhone) {
      setBtnClick(true);
      setSendText('인증번호 재발송');
      setTimer(1);
    }
  }, [successPhone])

  const onClearClick = useCallback(() => {
    setBtnClick(false);
    setSendText('인증번호 발송');
  }, [])

  return (
    <>
      <div className="PhoneArea">{/* 휴대폰 인증 */}
        <div className="sendConfirm">
          <input type="text" className="sendInput" name="phone" value={phone} onChange={onChange} placeholder="휴대폰 번호 인증"></input>
          <Button className="sendBtn" style={buttonStyle} onClick={onSendClick}>
            <div className="btnText">{sendText}</div>
          </Button>
        </div>
        <div className="confirm">
          <input type="text" className="" name="confirmPhone" value={confirmPhone} onChange={onChange} ></input>
          {btnClick && <div className="timeText">{parseInt(timer / 60)}:{twolength(timer % 60)}</div>}
          <Button className="confirmBtn" onClick={onClearClick}>
            <div className="btnText">인증하기</div>
          </Button>
        </div>
      </div>
    </>
  );
};
