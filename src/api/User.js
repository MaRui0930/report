import {getRequest} from "@/utils/request";

export function auth(password) {
    return getRequest('/user/auth', {password})
}