import React from "react"
import Nav from "./Nav";
import PostArea from "./PostArea";
import { render } from "react-dom";


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
         }
     }
     render() {
         return(
             <div>
                <Nav />
                <div>
                <PostArea />
                </div>
                <div className="totalMypages">
                    <div className="background1">
                        <center>
                         <div className="mypageMain">테스트박스</div>
                         </center>
                    </div>
                    <div className="background2"></div>
                </div>
             </div>
         )
     }
 }
    


export default MyPage;