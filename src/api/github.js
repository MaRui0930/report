import {getRequest} from "@/utils/request";

export function oauthWithGitHub(code) {
    return getRequest('/github/oauth',{code})
}