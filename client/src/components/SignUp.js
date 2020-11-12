import React from "react"
import axios from "axios";
import testPic from "../img/testPic.gif"

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            nickname: "",
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
       const {username, email, nickname, password} = this.state
       if(!username || !email || !nickname || !password){
           this.setState({errorMessage: "모든 항목은 필수입니다"})
       } else {
           await axios.post("http;//localhost:3000/signup", {
               username: username,
               email: email,
               nickname: nickname,
               password: password
           })
       }
    }

    render() {
        return(
            <div className="totalSignUps">
                 <img className="signUps__pic" src={testPic}></img>  
                <center className="signUps">
                    <h1 className="signUps__title">회원가입</h1>
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
                                type="text"
                                placeholder="비밀번호"
                                onChange={this.handleInputValue("password")}
                            ></input>
                        </div>
                        <div className="signUps__passwordB signUp">
                            <input className="signUps__input"
                                type="password"
                                placeholder="비밀번호"
                             onChange={this.handleInputValue("password")}
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
        )
    }
}

export default SignUp;