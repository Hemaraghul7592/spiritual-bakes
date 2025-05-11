// frontend/axios.js
import axios from "axios";

// Dynamically pick live URL or localhost
const BASE_URL = import.meta.env.PROD
  ? "https://spiritual-bakes-gqmh.onrender.com"
  : "http://localhost:4000";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;