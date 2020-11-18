import React from "react"
//import Nav from "./Nav";
import PostArea from "./PostArea";
import MyPageList from "./MyPageList";

import axios from "axios";
//import { render } from "react-dom";

axios.defaults.withCredentials = true;

//function MyPage(props) {
//    const { userinfo } = props;
//    if(userinfo) {
//        const { username, email, profileImage } = userinfo;
//        return (
//            <div>
//               <Nav />
//               <div className="totalMypages">
//                   <div className="background1">
//                       <center>
//                            <div className="mypageMain">
//                                <h1>Mypage</h1>
//                                <div className="myPage_username">{username}</div>
//                                <div className="myPage_email">{email}</div>
//                                <div className="myPage_profile_image">{profileImage}</div>
//                            </div>
//                        </center>
//                   </div>
//                   <div className="background2"></div>
//               </div>
//            </div> 
//        )
//    }
//}
 class MyPage extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             postInfo: [
                { id: 1,
                    user: {
                username: "Mr.Harvey"}, 
                food: {
                name: "Pizza"},
                text: "피자를 너무 좋아 하는 나는 피자매니아!!", 
                rating: 4}, 
                {id: 2,
                    user: {
                username: "Mis.Laby"}, 
                food: {
                name: "짜장면"},
                text: "피자를 너무 좋아 하는 나는 피자매니아!!", 
                rating: 2}
             ]
         }
     }
     pageList = (props) => {
         return (
         < div className="myPageList" >
             {props.postInfo.map(el =>
             <MyPageList post={el} />)}
        </div >
         )
     }
     myPost = () => {
         axios.get('http://3.34.179.55:3000/mypage')
         .then((res) => {
             this.setState({ postInfo : res.data })
         })
     }
     render() {
         this.myPost();
         return(
             <div>
                <div>
                <PostArea />
                </div>
                <div className="totalMypages">
                    <div className="background1">
                        <center>
                            <div className="mypageMain">테스트박스
                                <div>
                                    <this.pageList postInfo = {this.state.postInfo} />
                                </div>
                            </div>
                         </center>
                    </div>
                    <div className="background2"></div>
                </div>
             </div>
         )
     }
 }
    


export default MyPage;