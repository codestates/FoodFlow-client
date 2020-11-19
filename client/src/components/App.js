import React from "react";
import MainPage from "./MainPage"
import MyPage from "./MyPage"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Nav from "./Nav"
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";

// import data from "../PostSheetTest/testPostInfo.js"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogOut: false,
      userInfo: null,
      modal: "none",
      
    }
    this.modalClick= this.modalClick.bind(this) 
    this.modalClose= this.modalClose.bind(this)
  }

  async componentDidMount() {
    let hasSession = await axios.get("http://localhost:3000/user")
    if(!hasSession){
      this.setState({isLogOut: false})
    } else {
      this.setState({isLogOut: true, userInfo: hasSession.data.username})
    }
  }

  async handleResponseSuccess(login) {
    let successInfo = await axios.get("http://localhost:3000/user")
    console.log(successInfo)
    if(!successInfo){
      this.setState({userInfo: ""})
    } else {
      this.setState({isLogOut: true, userInfo: successInfo.data.username})
      this.props.history.push('/');
    }
  }

  modalClick = async () => {
    this.setState({modal: "block"})
    await axios.post("http://localhost:3000/user/signout")
    setTimeout(() => {
      this.setState({isLogOut: false})
      this.modalClose();
    }, 2000);
    
    this.props.history.push('/');
  }

  modalClose = () => {
    this.setState({modal: "none"})
  }


  render() {
    return (
      <div>
          <Nav isLogOut={this.state.isLogOut} userInfo={this.state.userInfo} modalClick={this.modalClick} modalDisplay={this.state.modal} modalClose={this.modalClose}/>
        <Switch>
          <Route exact path='/signin' render={() => <SignIn handleResponseSuccess={this.handleResponseSuccess.bind(this)}/>} />
          <Route exact path='/signup' render={() => <SignUp />} />
          <Route exact path='/mypage' render={() => <MyPage />} />
          <Route exact path='/' render={() => <MainPage userInfo={this.state.userInfo}/>} />
        </Switch>
       
      </div>
    );
  }
}
export default withRouter(App);