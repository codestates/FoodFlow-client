import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import MyPage from "./MyPage"


class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email : "",
        password : "",
        userId : "",
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
          axios.post('http://localhost:3000/user/signin', { email : email, password : password})
          //Mypage 이동
          .then((res) => {
              if(res.status === 200) {
                console.log(res.data)
                this.setState({
                    userId : res.data.id //signin에서 넘어온 id 값
                })
                console.log(this.state.userId)
                // this.props.history.push('/mypage')           
              }
          })                                         
          .catch(console.error('err'))
      }
    };
    render() {
        return (
            <div>
                <Nav />
                {/* Mypage로 this.state 전달 */}
                <MyPage
                  email = {this.state.email}
                  password = {this.state.password}
                  userId = {this.state.userId}
                  />
                  <div>
                      {this.state.userId}
                  </div>
            <div className="totalSignUps">
                <img className="signUps__pic" src="http://files.itworld.co.kr/archive/image/2017/12/GettyImages-889581518.jpg" alt="profile"></img> 
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
                        <div className="signUp__error"> {this.state.errorMessage} </div>
                    </div>
                </center>
            </div>
            </div>
        )
    }
  }
  export default withRouter(SignIn);
