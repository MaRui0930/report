<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div>
          <div><h5 style="margin-top: 0px;margin-bottom: 0px">{{article.title}}</h5></div>
          <div style="width: 100%;margin-top: 5px;display: flex;justify-content: flex-end;align-items: center">
            <span style="color: #20a0ff;margin-right:20px;font-size: 12px;"> {{article.createTime}}</span>
            <span style="margin:0px 50px 0px 0px"></span>
          </div>
        </div>
      </el-col>
      <el-col>
        <div style="text-align: left;height: 300px" v-html="article.htmlContent">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>


import {getNewArticle} from "@/api/Article";

export default {
  name: "ReportShow",
  data() {
    return {
      article:{
        htmlContent: '',
        title: '',
        createTime: ''
      }
    }
  },
  methods: {},
  mounted() {
    getNewArticle().then(res=>{
      this.article = res.data;
    })
  }
}
</script>

<style scoped>

</style>