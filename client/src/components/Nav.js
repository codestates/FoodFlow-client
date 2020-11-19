import React from 'react';
import Logo from "../img/foodFlowLogo.png"
import { Link } from "react-router-dom";
import rabbit from "../img/runningRabbit.gif"
import LogOut from "./LogOut"

export default function Nav(props){
    return (
        <header className="navs">
            <Link to='/' className="mainPage__link">{<img className="navs__logo" src={Logo} alt="profile"></img>}</Link>
                <div className={`navs__tools`}>
                <div className="navs__userConnect animate__animated animate__fadeInLeft">
                    {props.isLogOut ? <img src={rabbit} alt="profile" className="navs__rabbitPic" /> : ``}
                    {props.isLogOut ? <div className="navs__userConnectText">Welcome {props.userInfo}</div> : ``}
                </div>
                {props.isLogOut ? <Link to='/mypage' className={`myPage__link`}>My page</Link> : <Link to='/signup' className={`signUp__link`}>Sign up</Link>}
                {props.isLogOut ? <LogOut userInfo={props.userInfo} modalClick={props.modalClick} modalDisplay={props.modalDisplay} modalClose={props.modalClose}/> : <Link to='/signin' className={`signIn__link`}>Log in</Link>}
            </div>
        </header>
    )
}
