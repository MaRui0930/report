<template>
  <div>
    <el-card class="hidden-xs-only"
             style="top:calc(16vh + 60px);right:30px;float: right;position: fixed;width: 12vw;height: 60vh;font-size: 12px;line-height: 12px">
      <div style="text-align: center;height: 8px" slot="header" class="clearfix">
        <span style="font-size: 0.5em;">最新日报</span>
      </div>
      <template v-for="(article,index) in articles">
        <el-link @click.once="getDetailArticle(article.id)" :underline="false" style="font-size: 18px;display: block"
                 :key="index" class="item">
          {{ article.title }}
        </el-link>
      </template>
    </el-card>
  </div>
</template>

<script>
import {getDetailArticle, getRecentArticles} from "@/api/Article";

export default {
  name: "RecentReportsCard",
  data() {
    return{
      articles: []
    }
  },
  methods: {
    getDetailArticle(id) {
      getDetailArticle(id).then(res => {
        this.article = res.data
        this.$router.push({path: '/history', query: {id}});
      })
    }
  },
  mounted() {
    getRecentArticles().then(res => {
      this.articles = res.data;
    })
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 17px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
</style>