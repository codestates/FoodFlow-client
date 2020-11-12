import React from "react"
import Nav from "./Nav";

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
               <Nav />
            </div>
        )
    }
}
    


export default MainPage;