import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignIn extends React.Component {
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
  handleSignIn = () => {
      const { email, password } = this.state;
      if ( email===''||password==='' ) {
          this.setState({errorMessage : "이메일과 비밀번호를 입력해주세요"})
      } else {
          axios.post('https://localhost:3000/signin', { email : email, password : password})
          .catch(console.log('err'))
      }
    };
    render() {
        return (
            <div className="totalSignUps">
                <img className="signUps__pic" src="http://files.itworld.co.kr/archive/image/2017/12/GettyImages-889581518.jpg"></img> 
                <center className="signUps">
                    <h1 className="signUps__title">로그인</h1>
                    <div className="signUps__body">
                        <div className="signUps__name signUp">
                            <input className="signUps__input" type='email' placeholder='이메일' onChange={this.handleInputValue("email")}></input>
                        </div>
                        <div>
                            <input className="signUps__input" type='password' placeholder='비밀번호' onChange={this.handleInputValue("password")}></input>
                        </div>
                        <div>
                            <Link to='/signup'>아직 아이디가 없으신가요?</Link>
                        </div>
                        <div>
                        <a href="https://github.com/login/oauth/authorize?client_id=6c600e12bf58f2a72319&redirect_uri=https://6a24503ce00f.ngrok.io">GitHub로 로그인</a>
                        </div>
                        <button className="signUps__btn" type='submit' onClick={this.handleSignIn}>로그인</button> 
                    </div>
                </center>
            </div>
        )
    }
  }

  export default (SignIn);