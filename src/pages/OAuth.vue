<template>
  <div>
    正在登陆...,若未跳转<el-link style="font-size: 1em;line-height: 1em;vertical-align: center" type="primary" @click="$router.replace('/show')">请手动跳转</el-link>
  </div>
</template>

<script>

import {oauthWithGitHub} from "@/api/github";
import {getGithubInfo} from "@/utils/request";
import {Message} from 'element-ui'

export default {
  name: "OAuth",
  watch:{
    '$route.query.code': {
      handler(code) {
        if (code != null) {
          oauthWithGitHub(code).then(res=>{
            const access_token = res.data.access_token;
            getGithubInfo(access_token).then(res=>{
              if (res !== null) {
                this.$store.commit('SET_GITHUB_USERINFO', res);
                this.$router.replace('/show')
                Message.success("登录成功!!")
              }
            })
          })
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>