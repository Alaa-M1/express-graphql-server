const axios = require("axios");
const {baseUrl} = require("../constants.ts");

var axiosConfig = { baseURL: baseUrl };
const axiosInstance = axios.create(axiosConfig);

module.exports = axiosInstance;
