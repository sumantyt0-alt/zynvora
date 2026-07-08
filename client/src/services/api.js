import axios from "axios";

const API = axios.create({
  baseURL: "https://zynvora.onrender.com/api",
});

export default API;