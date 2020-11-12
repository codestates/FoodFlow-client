const express = require('express')

// axios는 HTTP 요청을 하기 위한 라이브러리입니다.
const axios = require('axios')

// GitHub에 OAuth 앱을 등록한 후, 발급받은 client id 및 secret을 입력합니다.
const clientID = process.env.GITHUB_CLIENT_ID || '6c600e12bf58f2a72319';
const clientSecret = process.env.GITHUB_CLIENT_SECRET || 'd0cb334cdeb457645ccf757acae18b7170caa348';

const app = express()

app.get('/callback', (req, res) => {
  const requestToken = req.query.code
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
      accept: 'application/json'
    }
  }).then((response) => {
    console.dir(response.data)
    const accessToken = response.data.access_token
    res.redirect(`/welcome.html?access_token=${accessToken}`)
  })
})

function gitOauth() {

  // location 객체를 통해 Access Token을 URL 파라미터로부터 받아올수 있습니다.
  const query = window.location.search.substring(1)
  const token = query.split('access_token=')[1]

  // GitHub API를 통해 사용자 정보를 받아올 수 있습니다
  fetch('//api.github.com/user', {
    headers: {
      // 이와 같이 Authorization 헤더에 `token ${token}`과 같이
      // 인증 코드를 전송하는 형태를 가리켜 Bearer Token 인증이라고 합니다
      Authorization: 'token ' + token
    }
  })
    .then(res => res.json())
    .then(res => {
      // 이 응답에 대한 문서는 GitHub 공식 문서를 참조하세요
      // https://developer.github.com/v3/users/#get-the-authenticated-user

      {res.name}
    })
}

export default gitOauth