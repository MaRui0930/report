<template>
  <div>
    <el-button @click="github">github登陆</el-button>
  </div>
</template>

<script>
export default {
  name: "GitHubLogin",
  data() {
    return{
      content:''
    }
  },
  methods:{
    github() {
      window.location.href="/githubAuthorize?client_id=5970480881ce0be5b32a&redirect_uri=http://localhost:8081/oauth"
    }
  }
}
</script>

<style scoped>

</style>