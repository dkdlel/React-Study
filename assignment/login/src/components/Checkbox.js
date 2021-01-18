import React, { useState, useCallback, useEffect } from "react";
import "./Checkbox.scss";
import CheckList from "./CheckList";

export default () => {
  const [opens, setOpens] = useState([
    {
      id: 0,
      checked: false,
      text: "개인정보처리방침 필수 동의",
      show: "보기",
    },
    {
      id: 1,
      checked: false,
      text: "이용약관 필수 동의",
      show: "보기",
    },
    {
      id: 2,
      checked: false,
      text: "이벤트 알림 선택동의",
      subText:
        "SMS, 이메일을 통해 할인/이벤트/쿠폰 정보를 받아보실 수 있습니다.",
    },
  ]);

  const [allChecked, setAllChecked] = useState(false);

  const onAllToggle = useCallback(() => {
    const newOpens = opens.map((open) => {
      return { ...open, checked: !allChecked };
    });
    setOpens(newOpens);
  }, [allChecked, opens]);

  useEffect(() => {
    const result = opens.reduce((prev, cur) => prev && cur.checked, true);
    setAllChecked(result);
  }, [opens]);

  const onItemToggle = useCallback((id) => {
    const newOpens = opens.map((open) =>
      open.id === id ? { ...open, checked: !open.checked } : open
    );
    setOpens(newOpens);
  }, [opens]);

  return (
    <>
      <div className="CheckboxArea">
        {/* 체크박스 */}
        <CheckList
          opens={opens}
          allChecked={allChecked}
          onAllToggle={onAllToggle}
          onItemToggle={onItemToggle}
        />
      </div>
    </>
  );
};
