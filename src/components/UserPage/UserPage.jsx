import React, { Component } from "react";
import "./UserPage.css";
import Header from "../Header/Header";
import Card from "../Card/Card";
import image from "../../images/beans_03.png";

const items = [
    {
        id: "1",
        itemName: "uranium ore",
        floorPrice: 100000,
        quantity: 10,
        itemImageURL: image,
        isGlobal: true,
    },
    {
        id: "2",
        itemName: "silver ore",
        floorPrice: 200,
        quantity: 1841,
        itemImageURL: image,
        isGlobal: true,
    },
    {
        id: "3",
        itemName: "bronze ore",
        floorPrice: 150,
        quantity: 100,
        itemImageURL: image,
        isGlobal: true,
    },
    {
        id: "4",
        itemName: "copper bar",
        floorPrice: 17,
        quantity: 1705,
        itemImageURL: image,
        isGlobal: true,
    },
    {
        id: "5",
        itemName: "copper bar",
        floorPrice: 147,
        quantity: 1705,
        itemImageURL: image,
        isGlobal: true,
    },
    {
        id: "6",
        itemName: "copper bar",
        floorPrice: 1470,
        quantity: 1705,
        itemImageURL: image,
        isGlobal: true,
    },
    {
        id: "7",
        itemName: "copper bar",
        floorPrice: 147,
        quantity: 1705,
        itemImageURL: image,
        isGlobal: true,
    },
    {
        id: "8",
        itemName: "copper bar",
        floorPrice: 147,
        quantity: 1705,
        itemImageURL: image,
        isGlobal: true,
    },
    {
        id: "9",
        itemName: "copper bar",
        floorPrice: 147,
        quantity: 1705,
        itemImageURL: image,
        isGlobal: true,
    },
];

const UserPage = (props) => {
    const offers = [
        {
            offerId: "1",
            username: "Zankrou",
            userIcon: props.userIcon,
            offerItems: [
                {
                    itemId: 1,
                    itemName: "silver ore",
                    price: 200,
                    quantity: 147,
                    itemImageURL: image,
                },
                {
                  itemId: "3",
                    itemName: "bronze ore",
                    price: 150,
                    quantity: 100,
                },
                {
                    itemId: "7",
                    itemName: "copper bar",
                    price: 147,
                    quantity: 12,
                    itemImageURL: image,
                },
            ],
            totalPrice: 153,
            type: "WTS",
        },
    ];
    return (
        <>
            <Card cardTitle={"Active sales"} items={items} type={"items"} />
            <Card cardTitle={"Active offers"} offers={offers} type={"offers"} />
        </>
    );
};

export default UserPage;
