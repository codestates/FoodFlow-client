import React from "react"
import axios from "axios";
import testPic from "../img/testPic.gif"
import lettering from "../img/lettering.png"
import Nav from "./Nav";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            errorMessage: ""
        };
        this.handleInputValue = this.handleInputValue.bind(this);
    }
    // state 상황을 변화시켜주는 기능
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
      };
    
    // 가입에 필요한 필수 항목을 작성 시, 서버에 요청
    handleSignup = async () => {
       const {username, email, password} = this.state
       if(!username || !email || !password){
           this.setState({errorMessage: "모든 항목은 필수입니다"})
       } else {
           await axios.post("http://3.34.179.55:3000/", {
               username: username,
               email: email,
               password: password
           })
       }
    }

    render() {
        return(
            <div>
                <Nav />
            <div className="totalSignUps">
                 <img className="signUps__pic" alt="profile" src={testPic}></img>  
                <center className="signUps">
                <img className="signUps__title" alt="profile" src={lettering}></img>
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
                            <input className="signUps__input"
                                type="password"
                                placeholder="비밀번호"
                            //  onChange={this.handleInputValue("password")}
                            ></input>
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

export default SignUp;