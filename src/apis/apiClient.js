import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:8080/api",
  baseURL: "https://localhost:5000/api/PHA/v1",
  headers: {
    "Content-type": "application/json"
  }
});