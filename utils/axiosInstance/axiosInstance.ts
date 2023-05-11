const axios = require("axios");

const baseUrl = "http://localhost:4000/";

var axiosConfig = { baseURL: baseUrl };
const axiosInstance = axios.create(axiosConfig);

module.exports = axiosInstance;
