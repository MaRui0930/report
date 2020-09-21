<template>
  <div>
    <el-row style="text-align: center">
      <h3 style="margin-top: 0px;margin-bottom: 0px;">{{article.title}}</h3>
    </el-row>
    <el-row style="width: 100%;margin-top: 5px;display: flex;justify-content: flex-end;align-items: center;">
      <span style="color: #20a0ff;margin-right:20vw;font-size: 12px;"> {{article.createTime}}</span>
    </el-row>
    <el-row class="content" >
      <span v-html="article.htmlContent"></span>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "Report",
  props: {
    article: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped>
.content{
  overflow: hidden;
  margin: auto 15vw
}
@media screen and (max-width: 768px){
  .content{
    width: 100%;
    margin: 0;
  }
}
</style>