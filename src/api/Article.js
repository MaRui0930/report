import {postRequest,getRequest} from "@/utils/request";

export function addArticle(article) {
    return postRequest('/article/insert', article);
}

export function getNewArticle() {
    return getRequest('/article/getNewArticle')
}

export function getRecentArticles() {
    return getRequest('/article/getRecentArticles');
}

export function getDetailArticle(id) {
    return getRequest('/article/getDetailArticle',{id})
}