import React from "react";
import MainPage from "./MainPage"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <MainPage />
      </div>
    );
  }
}

export default App;
