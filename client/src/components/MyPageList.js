import React from 'react';


//점수 받아와서 별로 구현
//posts의 foodId를 food의 name과 연동
export default function myPageList(props) {
    const { rating, text, createdAt } = props.post;
    const { name } = props.post.food;
    const { username } = props.post.user;
    return (
        <div className='totalMyPageList'>
            <div className='userName'>{username}</div>
            <div className='foodName'>{name}</div>
            <div className='starEmpty'>
                <span className='starRating'>{rating}</span>
            </div>
            <div className=''>{text}</div>
            <div className='time'>{createdAt}</div>
        </div>
    )
}

