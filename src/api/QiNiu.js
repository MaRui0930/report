import {getRequest,postRequest} from "@/utils/request";

export function getToken() {
    return getRequest('/qiniu/getToken');
}

export function uploadImg(formData) {
    return postRequest('/qiniu/uploadImg', formData);
}
