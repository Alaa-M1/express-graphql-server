const axios = require("axios");

const baseUrl = "http://localhost:3000/";

var axiosConfig = { baseURL: baseUrl };
const axiosInstance = axios.create(axiosConfig);

module.exports = axiosInstance;
