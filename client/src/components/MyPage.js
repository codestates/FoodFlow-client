import React from "react";
import axios, { post } from 'axios';
import FormData from 'form-data'

axios.defaults.withCredentials = true;

class MyPage extends React.Component {

    constructor(props) {
      super(props);
      this.state ={
        file: null,
        imgPath: null,
        foodId : null,                    
      }
      this.onFormSubmit = this.onFormSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.fileUpload = this.fileUpload.bind(this)      
    }
    
    // componentDidMount(props) {
    //     console.log(props)
    // }
    //form 안의 submit 버튼이 눌러지면 onSubmit 이벤트가 발생하는 것 같음
    onFormSubmit(e){
      e.preventDefault() // Stop form submit
      //this.state.file값을 바탕으로 fileUpload 메서드 실행
      this.fileUpload(this.state.file)
      .then((res)=>{
        console.log(res)
        this.setState({
            imgPath : res.data
        })
      })
    }
    
    //파일 선택 버튼 클릭 후 업로드할 파일을 선택하면,
    //변경된 파일의 정보를 this.state.file 속성에 담는다.
    onChange(e) {
      this.setState({file:e.target.files[0]})
    }


    fileUpload(file){
      const url = 'http://localhost:3000/user/upload/profile';
      const formData = new FormData();
      //append의 첫번째 인자인 key값과, 서버의 upload.single(key값)
      //양쪽의 key 값이 일치해야함! (key 값이 fieldname임)
      formData.append('file', file)
      formData.append('email', "test999")
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      return  post(url, formData, config)
    }
    
    getImagefile() {
        axios.get(`http://localhost:3000/${this.state.imgPath}`)        
    }

    
    foodId() {
        axios
            .post("http://localhost:3000/food/write", {
                name: "미쳤다6."
            })
            .then((res) => {
                this.setState({
                    foodId: res.data.id
                })                
            })
            .then(() =>{
                return this.posting();
            })   
        }

    posting() {
        axios.post("http://localhost:3000/posts/write", {
            text: "짜장면 맛있다.",
            rating: 4.0,
            foodImage: "짜장면 이미지.jpg",
            id: this.state.foodId
        })
            .then((res) => {
                console.log(res.data.id)
            })
    }



    // 해당 유저의 모든 post 정보 받아오기
    // getPosts(props){
    //     console.log(props.userid)
        
    //     axios.get("http://localhost:3000/mypage")
    //     .then((res) => {
    //         console.log(res)
    //     })
    // }


    render() {
      return (
          <>
          {/* form 태그 내부의 submit type을 갖는 Upload 버튼이 눌러졌을 때
          onSubmit에 의해서 onFormSubmit 메서드가 실행된다. */}
        <form onSubmit={this.onFormSubmit}>
          <h1>File Upload</h1>
          <input type="file" onChange={this.onChange} />
          <button type="submit">Upload</button>
        </form>

        {/* association test */}
        <button
            onClick={this.foodId.bind(this)}>
            foodID 테스트
        </button>
        <button
            onClick={this.postImage.bind(this)}>
            postImage(multer)
        </button>
        <div>
          <img src={`http://localhost:3000/${this.state.imgPath}`} width = "100px" alt=""/>
        </div>  
        </>
     )
    }
  }
  
export default (MyPage);