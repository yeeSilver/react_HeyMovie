import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params:{
    api_key: "10bff6291faf8086404cf4ea07208429",
    language: "ko-KR",
  }
});

export default instance