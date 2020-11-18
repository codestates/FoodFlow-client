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
      userInfo: null
    }
  }

  async handleResponseSuccess(login) {
    let successInfo = await axios.get("http://3.34.179.55:3000//mypage")
    
    if(!successInfo){
      this.setState({userInfo: ""})
    } else {
      this.setState({isLogOut: true, userInfo: successInfo.user.username})
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
          <Nav isLogOut={this.state.isLogOut} userInfo={this.state.userInfo}/>
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