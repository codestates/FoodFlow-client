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
                <Link to='/signin'>회원가입</Link>
            </div>
        )
    }
}
export default MainPage;