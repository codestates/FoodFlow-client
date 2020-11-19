import React from 'react';
import PostSheet from './PostSheet'
// import { Link } from "react-router-dom";

export default function PageList(props){
    return (
       <div className="pageList">
           <div className="pageList__titleBody">
                <div className="pageList__title">New Food</div>
                <div className="pageList__subtitle">The latest & Greatest</div>
           </div>
           <div className="pageList__body">{
                props.postInfo.map((post) => (
                    <PostSheet 
                        post = {post}
                     key = {post.id}
                    />
                ))}
           </div>
       </div>
    )
}