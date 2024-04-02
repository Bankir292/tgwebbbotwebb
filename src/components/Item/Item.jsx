import React, { Component } from 'react'
import './Item.css'
import gold from '../../images/sprites_15.png'

const Item = (props) => {
    console.log(props.item.itemName)
    return (
      <div className={'item'}>
        <div className={'left-item'}>
        <img src={props.item.itemImageURL} className={'img-item'}></img>
        <p className={'item-name'}>{props.item.itemName}</p>
        </div>
        <div className={'right-item'}>
        {props.item.isGlobal
            ? (<div className={'div'}>
                <span className={'price'}><img src={gold} height={'14px'}/> {props.item.floorPrice}</span>
                <p className={'floor-price'}>floorPrice</p>
            </div>)
            : (<div className={'div'}>
                <span className={'price'}><img src={gold} height={'14px'}/> {props.item.floorPrice}</span>
            </div>)
       }
        <span className={'quantity'}>{props.item.quantity}</span>
       </div>
      </div>
    )
}

export default Item;