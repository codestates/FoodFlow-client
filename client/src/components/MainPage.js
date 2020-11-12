import React from "react"
import SignUp from "./SignUp"
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <Link to='/signup'>회원가입</Link>
            </div>
        )
    }
}
    


export default MainPage;