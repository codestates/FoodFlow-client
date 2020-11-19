import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
//import Nav from "./Nav";
import logInImg from "../img/logInImg.gif"
import lettering from "../img/lettering.png"

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
      if ( !email||!password ) {
          this.setState({errorMessage : "이메일과 비밀번호를 입력해주세요"})
      } else {
        //   axios.post('http://localhost:3000/user/signin',
          axios.post('http://3.34.179.55:3000/user/signin', 
          { email : email, password : password})
          .then((res) => this.props.handleResponseSuccess(res.id))
          .catch(console.log('err'))

      }
    };
    render() {
        return (
            <div>
                
            <div className="totalSignUps">
                <img className="signIns__pic" alt="" src={logInImg}></img> 
                <center className="signUps">
                <img className="signUps__title" alt="" src={lettering}></img>
                <div className="signUps__subTitle">Welcome Food Zone</div>
                    <div className="signUps__body">
                        <div className="signUps__name signUp">
                            <input className="signUps__input" type='email' placeholder='이메일' onChange={this.handleInputValue("email")}></input>
                        </div>
                        <div>
                            <input className="signUps__input" type='password' placeholder='비밀번호' onChange={this.handleInputValue("password")}></input>
                        </div>
                        <div className="signIns__noId">
                            <Link to='/signup'>아직 아이디가 없으신가요?</Link>
                        </div>
                        <div className="signIns__gitHub">
                        <a href="https://github.com/login/oauth/authorize?client_id=6c600e12bf58f2a72319&redirect_uri=https://6a24503ce00f.ngrok.io">GitHub로 로그인</a>
                        </div>
                        <button className="signUps__btn" type='submit' onClick={this.handleSignIn}>로그인</button> 
                        <div className="signUp__error"> {this.state.errorMessage} </div>
                    </div>
                </center>
            </div>
            </div>
        )
    }
  }

  export default withRouter(SignIn);