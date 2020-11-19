import React from "react";
import axios from "axios";


axios.defaults.withCredentials = true;

//import { faStar } from "@fortawesome/free-solid-svg-icons"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//const multer = require('multer');
//multer면 header설정이 있어서 데이터를 따로 post해야하는지? => 정환님이 한번에 전송하는 법 알아냄
//axios.post에서 header설정 : axios.post('url', { data }, config) config = {header:~}
//name음식 이름 post해서 res로 foodId 받아오기

//function submit() {
//  axios.post('http://3.34.179.55:3000/user/posts', { username, name, foodImage, rating, text })
//  .then(() => console.log('success posting'))
//}
class PostArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : "",
      foodId : "",
      rating : "",
      text : "",
      errorMessage : ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
      this.setState({ [key] : e.target.value });
  };
  // handlefoodImageChange = (e) => {
  //   this.setState({
  //     foodImage: e.target.foodImages[0],
  //     foodImageName: e.target.value
  //   })
  // }
  submitPost = (e) => {
    e.preventDefault();
    const { name, text } = this.state;
    if ( !name || !text ) {
      this.setState({errorMessage : '빈 칸을 입력해주세요'});
    } else {
      axios.post('http://localhost:3001/food/write',
      {
        name : name
      })
      .then ((res) => {
        this.setState({foodId : res.data.id})
      })
      .then(() => {
        return this.posting();
      })

    }
  }
  posting() {
    axios.post("http://localhost:3001/posts/write", {
      text: this.state.text,
      rating: this.state.rating,
      id: this.state.foodId
    })
    window.location.replace("/mypage")
  }


  render() {
    return (
      <div>
          <div id="main">
            <div id="send">
              <form className="submit" onSubmit={this.submitPost}>
                <div>
                  <input className="inputFoodName" type="text" placeholder="음식 이름 입력" onChange={this.handleInputValue("name")}></input>
                </div>
                <select className="rating" onChange={this.handleInputValue("rating")}>
                  <option value="">별점선택</option>
                  <option value="1.0">1.0</option>
                  <option value="2.0">2.0</option>
                  <option value="3.0">3.0</option>
                  <option value="4.0">4.0</option>
                  <option value="5.0">5.0</option>
                </select>
                <textarea className="inputChat" onChange={this.handleInputValue("text")}></textarea>
                <button className="submitBtn" type="submit">글쓰기</button>
                <div> {this.state.errorMessage} </div>
              </form>
            </div>
          </div>
      </div>
    )
  }
}
export default PostArea;