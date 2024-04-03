import React, { Component, useState } from "react";
import "./OfferPopup.css";
import gold from "../../images/sprites_15.png";
import Counter from "../Counter/Counter";

const OfferPopup = (props) => {
    const [isClose, setIsClose] = useState(false);
    const closePopup = () => {
        setIsClose(true);
    }
    return (
        <div className={`offerpopup ${(props.active || !isClose) ? 'active' : 'close'}`}>
            <button className={'btn btn-close'} onClick={closePopup}>X</button>
        </div>
    );
};

export default OfferPopup;
