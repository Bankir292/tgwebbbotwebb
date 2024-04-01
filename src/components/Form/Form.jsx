import React, { useEffect, useState } from "react";
import './Form.css';
import { useTelegram } from "../../hooks/useTelegram";

const Form = (props) => {
    const [country, setCountry] = useState('');
    const [street, seyStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {WebApp} = useTelegram();

    useEffect( () => {
        WebApp.MainButton.setParams({
            text: "Send data"
        })
    }, [])

    useEffect( () => {
        if(!street || !country) {
            WebApp.MainButton.hide();
        } else {
            WebApp.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Input yours data</h3>
            <input type="text" placeholder={"Country"} value={country} onChange={onChangeCountry}></input>
            <input type="text" placeholder={"Street"} value={street} onChange={onChangeStreet}></input>
            <select value={subject} onChange={onChangeSubject} className={"select"}>
                <option value={"physical"}>Фіз</option>
                <option value={"legal"}>Юр</option>
                </select>
        </div>
    );
};

export default Form;