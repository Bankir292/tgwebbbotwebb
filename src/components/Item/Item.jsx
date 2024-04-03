import React, { Component, useState } from "react";
import "./Item.css";
import gold from "../../images/sprites_15.png";
import Counter from "../Counter/Counter";

const Item = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className={`item`} >
                <div className={"left-item"} onClick={() => setIsActive(!isActive)}>
                    <img
                        src={props.item.itemImageURL}
                        className={"img-item"}
                    ></img>
                    <p className={"item-name"}>{props.item.itemName}</p>
                </div>
                <div className={"right-item"} onClick={() => setIsActive(!isActive)}>
                    {props.item.isGlobal ? (
                        <div className={"div"}>
                            <span className={"price"}>
                                <img src={gold} height={"14px"} />{" "}
                                {props.item.floorPrice}
                            </span>
                            <p className={"floor-price"}>floorPrice</p>
                        </div>
                    ) : (
                        <div className={"div"}>
                            <span className={"price"}>
                                <img src={gold} height={"14px"} />{" "}
                                {props.item.floorPrice}
                            </span>
                        </div>
                    )}
                    <span className={"quantity"}>{props.item.quantity}</span>
                </div>
            {isActive && (
                <div className={`accordion-content accordion`}>
                    <div className={"left-item"}>
                       
                    
                        <Counter max={props.item.quantity}/>
                        <span className={"quantity"}>
                            {props.item.quantity}
                        </span>
                    </div>
                </div>
            )}
            </div>
        </>
    );
};

export default Item;
