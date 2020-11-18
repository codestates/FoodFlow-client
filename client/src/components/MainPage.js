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
        let post = await axios.get("http://localhost:3001/") 
        // let post = [
        //     { id: 1,
        //     username: "Mr.Harvey", 
        //     foodname: "Pizza",
        //     text: "피자를 너무 좋아 하는 나는 피자매니아!!", 
        //     rating: 4}, 
        //     {id: 2,
        //     username: "Mis.Laby", 
        //     foodname: "짜장면",
        //     text: "피자를 너무 좋아 하는 나는 피자매니아!!", 
        //     rating: 2}, 
        //     {id: 3,
        //     username: "Mr.Harvey", 
        //     foodname: "짬뽕",
        //     text: "피자를 너무 좋아 하는 나는 피자매니아!!", 
        //     rating: 4}, 
        //     {id: 5,
        //     username: "Mis.Laby", 
        //     foodname: "Pasta",
        //     text: "피자를 너무 좋아 하는 나는 피자매니아!!", 
        //     rating: 2},
        //     { id: 6,
        //         username: "Mr.Harvey", 
        //         foodname: "Pizza",
        //         text: "피자를 너무 좋아 하는 나는 피자매니아!!", 
        //         rating: 4}, 
        //         {id: 7,
        //         username: "Mis.Laby", 
        //         foodname: "짜장면",
        //         text: "피자를 너무 좋아 하는 나는 피자매니아!!", 
        //         rating: 2}, 
        //         {id: 8,
        //         username: "Mr.Harvey", 
        //         foodname: "짬뽕",
        //         text: "피자를 너무 좋아 하는 나는 피자매니아!!", 
        //         rating: 4}, 
        //         {id: 9,
        //         username: "Mis.Laby", 
        //         foodname: "Pasta",
        //         text: "피자를 너무 좋아 하는 나는 피자매니아!!", 
        //         rating: 2}]
        let newPostData = [];
        for(let i = post.length - 1; i >= 0; --i){
            newPostData.push(post[i])
        }        
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