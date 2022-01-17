import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.withCredentials = false;

export default axiosClient;
