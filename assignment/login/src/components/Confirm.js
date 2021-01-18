import React from 'react';
import './Confirm.scss'

export default () => {

    return (
        <div className="confirmtWrap">
            <div className="shade"></div>
            <div className="confirmtArea">
                <div className="confirmContent">
                    <div className="confirmTitle">Confirm창 타이틀</div>
                    <div className="confirmText">Confirm창 내용</div>
                </div>
                <div className="confirmArea">
                    <div className="confirmNo">
                        <div className="noText">아니요</div>
                    </div>
                    <div className="confirmYes">
                        <div className="yesText">예</div>
                    </div>
                </div>
            </div>
        </div>
    )
}