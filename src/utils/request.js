import axios from 'axios'
import {Message} from "element-ui";

axios.interceptors.response.use(response => {
    if ((response.data.message != null) && (response.data.code !== 0)) {
        Message.error({message: response.data.message, duration: 2000})
        return
    }
    return response.data;
}, () => {
})

export const getRequest = (url, params) => {
    return axios({
        baseURL: '/report',
        method: 'get',
        url,
        params
    })
}
export const postRequest = (url, data) => {
    return axios({
        baseURL: '/report',
        method: 'post',
        url,
        data
    })
}

export const getGithubInfo = (access_token) => {
    return axios({
        method: 'get',
        url: '/getGithubInfo',
        headers: {
            // "Content-Type": "application/x-www-form-urlencoded",
            accept: 'application/json',
            Authorization: `token ${access_token}`
        }
    })
}


