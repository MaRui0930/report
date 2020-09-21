import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state={
    defaultIndex: sessionStorage.getItem('defaultIndex') || '/show',
    githubUserAvatarUrl: sessionStorage.getItem('githubUserAvatarUrl') || '',
}
const getters={
    getDefaultIndex: state => state.defaultIndex,
    getGitHubUserAvatar:state=>state.githubUserAvatarUrl
}
const mutations = {
    SET_DEFAULT_INDEX(state,index) {
        state.defaultIndex = index; 
        sessionStorage.setItem('defaultIndex', index)
    },
    SET_GITHUB_USERINFO(state,info){
        state.githubUserAvatarUrl = info.avatar_url;
        sessionStorage.setItem('githubUserAvatarUrl', info.avatar_url)
    }
};

const actions = {
    
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})