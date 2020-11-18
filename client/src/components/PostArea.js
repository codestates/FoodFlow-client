import React from "react";
import axios from "axios";
//import Star from "../img/star.png";
//import Star0 from "../img/star0.png";
//import Star1 from "../img/star1.png";
//
//import { faStar } from "@fortawesome/free-solid-svg-icons"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//const multer = require('multer');

//multer면 header설정이 있어서 데이터를 따로 post해야하는지? => 정환님이 한번에 전송하는 법 알아냄
//axios.post에서 header설정 : axios.post('url', { data }, config) config = {header:~}
//name음식 이름 post해서 res로 foodId 받아오기


class PostArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      foodImage: null,
      foodImageName: "",
      username : "",
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
  handlefoodImageChange = (e) => {
    this.setState({
      foodImage: e.target.foodImages[0],
      foodImageName: e.target.value
    })
  }
  submitPost = () => {
    const { name, rating, text } = this.state;
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    }
    if ( !name || !text ) {
      this.setState({errorMessage : '빈 칸을 입력해주세요'});
    } else {
      axios.post('http://localhost:3001/food/write', { name : name })
      .then ((res) => {
        this.setState({foodId : res.data.foodId})
        const { foodId } = this.state;
        const formData = new FormData();
        formData.append('foodImage', this.state.foodImage)
        formData.append('foodId', foodId)
        formData.append('rating', rating)
        formData.append('text', text)

        return formData
      })
      .then ((formData) => axios.post('http://localhost:3001/user/posts/write', formData, config))
      .catch (console.log('err'))
    }
  }
  render() {
    return (
      <div>
          <div id="main">
            <div id="send">
              <form class="submit" onSubmit={this.submitPost}>
                  <input className="foodImage" type="file" foodImage={this.state.foodImage} value={this.state.foodImageName} onChange={this.handlefoodImageChange} /><br/>
                <div>
                  <input className="inputFoodName" type="text" placeholder="음식 이름 입력" onChange={this.handleInputValue("name")}></input>
                </div>
                <select className="rating" onChange={this.handleInputValue("rating")}>
                  <option value="">별점선택</option>
                  <option value="1.0">1.0</option>
                  <option value="0.5">2.0</option>
                  <option value="0.5">3.0</option>
                  <option value="0.5">4.0</option>
                  <option value="0.5">5.0</option>
                </select>
                <textarea class="inputChat" onChange={this.handleInputValue("text")}></textarea>
                <div>{this.state.errorMessage}</div>
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
