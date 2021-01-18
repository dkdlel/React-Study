import React from 'react';
import './Alert.scss'

export default ({ onToggle }) => {

    return (
        <div className="alertWrap">
            {/* <div className="shade"></div> */}
            <div className="alertArea">
                <div className="alertContent">
                    <div className="alertTitle">Alert창 타이틀</div>
                    <div className="alertText">Alert창 내용</div>
                </div>
                <div className="confirmArea" onClick={onToggle}>
                    <div className="confirmText" >확인</div>
                </div>
            </div>
        </div>
    )
}