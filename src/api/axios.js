import axios from "axios";

const instance = axios.create({  //액시오스에서 전달해 주는 인스턴스
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5e0fbbd694076a3be373cc4c7f9527d6",
    language: "ko-KR",
  }
})

export default instance;