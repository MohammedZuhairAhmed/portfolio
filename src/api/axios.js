import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'api_key': process.env.REACT_APP_API_KEY,
    'access_token' : process.env.REACT_APP_ACCESS_TOKEN,
    'Content-Type' : 'application/json'}
});