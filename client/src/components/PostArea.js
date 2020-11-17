import React from "react";
import axios from "axios";
import Star from "../img/star.png";
import Star0 from "../img/star0.png";
import Star1 from "../img/star1.png";

import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//submit 변수 안에 username, name, ... 등등?
//multer면 header설정이 있어서 데이터를 따로 post해야하는지?
//axios.post에서 header설정 : axios.post('url', { data }, config) config = {header:~}
//function submit() {
//  axios.post('http://3.34.179.55:3000/user/posts', { username, name, foodImage, rating, text })
//  .then(() => console.log('success posting'))
//}

//let locked = 0;
//function show(star) {
//  if (locked) {
//    return;
//  }
//  let image;
//  let el;
//  let e = document.getElementById('startext');
//  let stateMsg;
//
//  for (let i=1; i<=star; i++) {
//    image = 'image' + i;
//    el =document.getElementById(image);
//    el.src = {Star1};
//  }
//
//  switch (star) {
//    case 1: stateMsg = 'testtext';
//    break;
//    case 2: stateMsg = 'pelqpeiq';
//    break;
//  }
//  e.innerHTML = stateMsg;
//}
//
//function noshow(star) {
//  if (locked) {
//    return;
//  }
//  let image;
//  let el;
//  
//  for (let i=1; i<=star; i++) {
//    image = 'image'+i;
//    el = document.getElementById(image);
//    el.src = {Star0};
//  }
//}
//
//function lock(star) {
//  show(star);
//  locked = 1;
//}
//
//function mark(star) {
//  lock(star);
//  alert("선택2" + star);
//  document.cmtform.star.value = star;
//}


class PostArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email : "",
        password : "",
        errorMessage : ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
      this.setState({ [key] : e.target.value });
  };
  postArea = () => {}
  render() {
    return (
      <div>
          <div id="main">
            <h1>testbox</h1>
            <h1>et</h1>
            <div id="send">
              <form class="submit">
                <div>
                  <input className="inputFoodName" type="text" placeholder="음식 이름 입력"></input>
                </div>
                <textarea class="inputChat"></textarea>
                <select className="rating">
                  <option value="">별점선택</option>
                  <option value="1.0">1.0</option>
                  <option value="0.5">2.0</option>
                  <option value="0.5">3.0</option>
                  <option value="0.5">4.0</option>
                  <option value="0.5">5.0</option>
                </select>
                <div className="starEmpty">
                  <div className="starRating"></div>
                  <FontAwesomeIcon icon={ faStar } className="starEmpty" />
                  <FontAwesomeIcon icon={ faStar } className="starEmpty" />
                  <FontAwesomeIcon icon={ faStar } className="starEmpty" />
                  <FontAwesomeIcon icon={ faStar } className="starEmpty" />
                  <FontAwesomeIcon icon={ faStar } className="starEmpty" />
                </div>
                <div>
                  <img className="teststar" src={Star} alt='text' />
                </div>
                <span className="numberRating"></span>
                <button type="submit" >글쓰기</button>
              </form>
            </div>
          </div>
      </div>
    )
  }
}

export default PostArea;

//export default function postArea() {
//    return (
//        <div>
//            <div id="main">
//              <h1>testbox</h1>
//              <h1>et</h1>
//              <div id="send">
//                <form class="submit">
//                  <div>
//                    <input className="inputFoodName" type="text" placeholder="음식 이름 입력"></input>
//                  </div>
//                  <textarea class="inputChat"></textarea>
//                  <select className="rating">
//                    <option value="">별점선택</option>
//                    <option value="1.0">1.0</option>
//                    <option value="0.5">2.0</option>
//                    <option value="0.5">3.0</option>
//                    <option value="0.5">4.0</option>
//                    <option value="0.5">5.0</option>
//                  </select>
//                  <div className="starEmpty">
//                    <div className="starRating"></div>
//                    <FontAwesomeIcon icon={ faStar } className="starEmpty" />
//                    <FontAwesomeIcon icon={ faStar } className="starEmpty" />
//                    <FontAwesomeIcon icon={ faStar } className="starEmpty" />
//                    <FontAwesomeIcon icon={ faStar } className="starEmpty" />
//                    <FontAwesomeIcon icon={ faStar } className="starEmpty" />
//                  </div>
//                  <div>
//                    <img className="teststar" src={Star} alt='text' />
//                  </div>
//                  <span className="numberRating"></span>
//                  <button type="submit" >글쓰기</button>
//                </form>
//              </div>
//            </div>
//        </div>
//    )
//}
//
//const starsTotal = 5;
//
//const rating = 3.5;
//
//document.addEventListener('DOMContentLoasded', getRatings);
//
//function getRatings() {
//  const starPercentage = (rating / starsTotal) * 100;
//
//  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}`;
//
//  document.querySelector(`.starRating`).getElementsByClassName.width = starPercentageRounded;
//}