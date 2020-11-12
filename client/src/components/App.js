import React from "react";
import MainPage from "./MainPage"
import SignIn from "./SignIn"
import { Switch, Route } from "react-router-dom";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/signin' render={() => <SignIn />} />
          <Route exact path='/' render={() => <MainPage />} />
        </Switch>
      </div>
    );
  }
}
export default App;