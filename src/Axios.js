import axios from "axios";

const instance = axios.create({baseURL: 'https://geo.ipify.org/'});

export default instance;
