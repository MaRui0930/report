import axios from 'axios'
import {Message} from "element-ui";

export const project_url = '/report';
// export const server_url = 'http://47.94.36.126:8081';


axios.interceptors.response.use(response => {
    if (response.data.code === 0) {
        Message.success({message: response.data.message});
    } else {
        Message.error({message:response.data.message})
    }
    return response.data;
}, () => {})



export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${project_url}${url}`,
        params: params
    })
}
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${project_url}${url}`,
        data: params
    })
}

export const postRequestByFile=(url,params)=>{
    return axios({
        method: 'post',
        url: `${project_url}${url}`,
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}