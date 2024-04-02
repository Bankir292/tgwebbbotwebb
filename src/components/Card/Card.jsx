import React, { Component } from 'react'
import './Card.css'
import Header from '../Header/Header';
import Item from '../Item/Item';

const Card = (props) => {
    const items = props.items;
    return (
        <div className={'card'}>
            <h3 className='card-title'>{props.cardTitle}</h3>
            <div className={'card-items'}>
            {items.map((item)=>(
                <Item item={item}/>
            ))}
            </div>
        </div>
    )
}

export default Card;