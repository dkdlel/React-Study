import React from 'react'
import './SassComponent.scss'

/* 9.2 scss 사용해보기 */
const SassComponent = () => {
    return(
        <div className="SassComponent">
            <div className="box red" />
            <div className="box orange" />
            <div className="box yellow" />
            <div className="box green" />
            <div className="box blue" />
            <div className="box indigo" />
            <div className="box violet" />
        </div>
    )
}

export default SassComponent