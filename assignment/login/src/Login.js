import React, { useReducer } from "react";
import "./login.scss";
import Franchise from "./components/Franchise";
import Password from "./components/Password";
import Phone from "./components/Phone";
import Address from "./components/Address";
import Checkbox from "./components/Checkbox";
import { Button } from '@material-ui/core';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default ({ onToggle }) => {
  const [state, dispatch] = useReducer(reducer, {
    franchiseName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    confirmPhone: "",
    franchiseAddress: "",
    detailAddress: "",
  });

  const {
    franchiseName,
    email,
    password,
    confirmPassword,
    phone,
    confirmPhone,
    franchiseAddress,
    detailAddress,
  } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div className="container">
      <div className="">정보를 입력해주세요.</div>
      <Franchise franchiseName={franchiseName} email={email} onChange={onChange} />
      <Password password={password} confirmPassword={confirmPassword} onChange={onChange} />
      <Phone phone={phone} confirmPhone={confirmPhone} onChange={onChange} onToggle={onToggle} />
      <Address franchiseAddress={franchiseAddress} detailAddress={detailAddress} onChange={onChange} />
      <Checkbox />
      <Button className="endBtn">
        <div className="endBtnText">가입완료</div>
      </Button>
    </div>
  );
};
