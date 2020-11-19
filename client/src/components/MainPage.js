import React from "react"
//import Nav from "./Nav";
import MainPageList from "./MainPageList"
import mainPic from "../img/foodflow koreanfood(remake).jpg"
import axios from "axios"

//import { Link } from "react-router-dom";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postInfo: [],
        }
    }

    async componentDidMount() {
        let post = await axios.get("http://localhost:3000/") 
        
        let result = post.data
        
        let newPostData = [];
        for(let i = result.length - 1; i >= 0; --i){
            newPostData.push(result[i])
        }        

        // console.log("새로운 데이터다 이것들아", newPostData)
        this.setState({
            postInfo: newPostData
        })
     }
    
    render() {
        return(
            <div>
               <div className="mainPage__MainTop">
                <img className="mainPage__mainPic" alt="profile" src={mainPic}></img>  
                <div className="mainPage__title">Food Flow</div>
                <div className="mainPage__line"></div>
                <div className="mainPage__subTitle">Enjoy Our Food Experience</div>
               </div>
               <MainPageList postInfo={this.state.postInfo}/>
            </div>
        )
    }
}
    


export default MainPage;