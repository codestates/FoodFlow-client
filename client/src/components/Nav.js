import React from 'react';
import Logo from "../img/foodFlowLogo.png"
import { Link } from "react-router-dom";

export default function Nav(props){
    return (
        <header className="navs">
            <Link to='/' className="mainPage__link">{<img className="navs__logo" src={Logo} alt="profile"></img>}</Link>
            <div className="navs__tools">
            <Link to='/signup' className="signUp__link">Sign up</Link>
            <Link to='/signin' className="signIn__link">Log in</Link>
            </div>
        </header>
    )
}