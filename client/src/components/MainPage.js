import React from "react"
import Nav from "./Nav";
//import SignUp from "./SignUp"
//import axios from "axios";
//import { Link, withRouter } from "react-router-dom";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
               <Nav />
               <div>메인페이지</div>
            </div>
        )
    }
}
    


export default MainPage;