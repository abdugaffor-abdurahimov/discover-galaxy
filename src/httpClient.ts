import axios from "axios";

const apiUrl = process.env.API_URL;

const client = axios.create({
  baseURL: apiUrl,
});

export default client;
