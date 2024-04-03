import React, { Component } from 'react'
import './Card.css'
import Header from '../Header/Header';
import Item from '../Item/Item';
import Offer from '../Offer/Offer';

const Card = (props) => {
    const items = props.items;
    const offers = props.offers;
    const type = props.type;
    const renderSwitch = (param) => {
        switch(param) {
          case 'items':
            return  (items?.map((item,index)=>(
                <Item key={index} item={item}/>
            )));
          case 'offers':
            return  (offers?.map((offer, index)=>(
                <Offer key={index} offer={offer}/>
            )));
          default :
            return 'Loading';
        }
      }
    return (
        <div className={'card'}>
            <h3 className='card-title'>{props.cardTitle}</h3>
            <div className={'card-items'}>
            {renderSwitch(type)}
            {/* {items.map((item)=>(
                <Item item={item}/>
            ))} */}
            </div>
        </div>
    )
}

export default Card;