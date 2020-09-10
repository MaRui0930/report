import {postRequest,getRequest} from "@/utils/request";

export function addArticle(article) {
    return postRequest('/article/insert', article);
}

export function getNewArticle() {
    return getRequest('/article/getNewArticle')
}