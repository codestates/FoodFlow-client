import React from "react"
import axios from "axios";
import phoPic from "../img/pho.gif"
import lettering from "../img/lettering.png"
//import Nav from "./Nav";
import {withRouter } from "react-router-dom";

axios.defaults.withCredentials = true;


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            errorMessage: "",
            errorPassword: ""
        };
        this.handleInputValue = this.handleInputValue.bind(this);
        //this.handlePasswordError = this.handlePasswordError.bind(this);
    }
    // state 상황을 변화시켜주는 기능
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
      };

    doesPasswordMatch() {
        const { password, confirmPassword } = this.state;
        return password === confirmPassword;
      };

    confirmPasswordClassName() {
        const { confirmPassword } = this.state;
      
        if (confirmPassword) {
          return this.doesPasswordMatch() ? 'is-valid' : 'is-invalid';
        }
    }

    renderFeedbackMessage() {
        const { confirmPassword } = this.state;
      
        if (confirmPassword) {
          if (!this.doesPasswordMatch()) {
            return (
              <div className="signUps__passwordInvalid">패스워드가 일치하지 않습니다</div>
            );
          } else if (this.doesPasswordMatch()){
            return (
                <div className="signUps__passwordValid">패스워드가 일치합니다</div>
              );
          }
        }
      }
    
    // 가입에 필요한 필수 항목을 작성 시, 서버에 요청
    handleSignup = async () => {
       const {username, email, password} = this.state
       if(!username || !email || !password){
           this.setState({errorMessage: "모든 항목은 필수입니다"})
       } else {
           await axios.post("http://localhost:3000/user/signup", {
               username: username,
               email: email,
               password: password
           })
           this.props.history.push("/");
       }
    }

    render() {
        return(
            <div>
            
            <div className="totalSignUps">
                 <img className="signUps__pic" alt="" src={phoPic}></img>  
                <center className="signUps">
                <img className="signUps__title" alt="" src={lettering}></img>
                <div className="signUps__subTitle">Record Your Food</div>
                    <div className="signUps__body">
                        <div className="signUps__name signUp">
                            <input className="signUps__input"
                                type="text"
                                placeholder="사용자 이름"
                                onChange={this.handleInputValue("username")}
                            ></input>
                        </div>
                        <div className="signUps__email signUp">
                            <input className="signUps__input"
                                type="email"
                                placeholder="이메일"
                                onChange={this.handleInputValue("email")}
                            ></input>
                        </div>
                        <div className="signUps__passwordA signUp">
                            <input className="signUps__input"
                                type="password"
                                placeholder="비밀번호"
                                onChange={this.handleInputValue("password")}
                            ></input>
                        </div>
                        <div className="signUps__passwordB signUp">
                            <input className={`signUps__input ${this.confirmPasswordClassName()}`}
                                type="password"
                                placeholder="비밀번호 확인"
                                onChange={this.handleInputValue("confirmPassword")}
                            ></input>
                            {this.renderFeedbackMessage()}
                        </div>
                        <button 
                          className="signUps__btn"
                          type='submit'
                          onClick={this.handleSignup}
                     >회원가입</button>
                         <div className="signUp__error">{this.state.errorMessage}</div>
                     </div>
                </center>
            </div>
            </div>
        )
    }
}

export default withRouter(SignUp);