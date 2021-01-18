import React from 'react';
import './Address.scss';
import { Button } from '@material-ui/core';

export default ({ franchiseAddress, detailAddress, onChange }) => {
    return (
        <>
            <div className="AddressArea"> {/* 가맹점 주소 */}
                <input type="text" className="" name="franchiseAddress" value={franchiseAddress} onChange={onChange} placeholder="가맹점 주소"></input>
                <Button className="btn1">
                    <div className="btnText">주소찾기</div>
                </Button>
                <input type="text" className="" name="detailAddress" value={detailAddress} onChange={onChange} placeholder="상세주소를 입력하세요."></input>
            </div>
        </>
    )
}