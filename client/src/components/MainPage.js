import React from "react"
import { Link } from "react-router-dom";

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
                <Link to='/signin'>로그인</Link>
            </div>
        )
    }
}
    


export default MainPage;