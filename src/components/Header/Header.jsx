import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import './Header.css';

const Header = (props) => {
    const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            <div className={'header-left'}>
            <img src={props.userIcon} className={'user-icon'}/>
            <span className={'username'}>
                {user?.username ? user.username : 'Username'}
            </span>
            </div>
            <div className={'header-right'}>
                <span>Icon</span>
            </div>
        </div>
    );
};

export default Header;