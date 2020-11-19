import React from 'react';
// import { Link } from "react-router-dom";
import testPostPic from "../PostSheetTest/testPostPic.webp"

export default function PostSheet(props){
    return (
       <li className="postSheets">
           <div className="postSheets__total">
               <img alt="profile" 
               src={testPostPic} 
               className="postSheets__pic"></img>
           <div className="postSheets__body">
                <div className="postSheets__foodName">{props.post.food.name}</div>
                <div className="postSheets__username">{props.post.user.username}</div>
                <div className="postSheets__rating">{props.post.rating}</div>
                <div className="postSheets__hoverSide">
                <div className="postSheets__text">{props.post.text}</div>
                </div>
           </div>
           </div>
       </li>
    )
}