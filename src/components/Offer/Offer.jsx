import React, { Component, useState } from "react";
import "./Offer.css";
import gold from "../../images/sprites_15.png";
import Counter from "../Counter/Counter";

const Offer = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className={"item"}>
                <div className={"central_offer"} onClick={() => setIsActive(!isActive)}>
                    <div
                        className={"left-item"}
                       
                    >
                        <img
                            src={props.offer.userIcon}
                            className={"img-item"}
                        ></img>
                        <p className={"item-name"}>{props.offer.username}</p>
                    </div>
                    
                        <span className={"quantity"}>
                            {props.offer.offerItems.length} items
                        </span>
                        <div className={"div"}>
                            <p className={"floor-price"}>Total</p>
                            <span className={"price"}>
                                <img src={gold} height={"14px"} />{" "}
                                {props.offer.totalPrice}
                            </span>
                        </div>

                        <span className={"type"}>{props.offer.type}</span>
                    </div>
                
            </div>
        </>
    );
};

export default Offer;
