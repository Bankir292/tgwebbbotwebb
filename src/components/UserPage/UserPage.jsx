import React, { Component } from 'react'
import './UserPage.css'
import Header from '../Header/Header';
import Card from '../Card/Card';
import image from '../../images/beans_03.png'

const items = [
    {id: '1', itemName: "uranium ore", floorPrice: 100000, quantity: 10,itemImageURL: image,isGlobal:true,},
    {id: '2', itemName: "silver ore", floorPrice: 200, quantity: 1841,itemImageURL:image,isGlobal:true,},
    {id: '3', itemName: "bronze ore", floorPrice: 150, quantity: 100,itemImageURL:image,isGlobal:true,},
    {id: '4', itemName: "copper bar", floorPrice: 17, quantity: 1705,itemImageURL:image,isGlobal:true,},
    {id: '5', itemName: "copper bar", floorPrice: 147, quantity: 1705,itemImageURL:image,isGlobal:true,},
    {id: '6', itemName: "copper bar", floorPrice: 1470, quantity: 1705,itemImageURL:image,isGlobal:true,},
    {id: '7', itemName: "copper bar", floorPrice: 147, quantity: 1705,itemImageURL:image,isGlobal:true,},
    {id: '8', itemName: "copper bar", floorPrice: 147, quantity: 1705,itemImageURL:image,isGlobal:true,},
    {id: '9', itemName: "copper bar", floorPrice: 147, quantity: 1705,itemImageURL:image,isGlobal:true,},
]
const UserPage = (props) => {
    
    return (
      <>
        <Card cardTitle={'Active sales'} items={items} />
      </>
    )
}

export default UserPage;