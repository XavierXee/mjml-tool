import axios from 'axios/index';

const baseUrl = "/api";

export default {
    postData: () => {
        return axios.get(`${baseUrl}/data`);
    }
}

