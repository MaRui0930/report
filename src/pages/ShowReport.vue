<template>
  <div>
    <Report :article="article"/>
    <RecentReportsCard/>
  </div>
</template>

<script>


import {getNewArticle} from "@/api/Article";
import Report from "@/components/Report";
import RecentReportsCard from "@/components/RecentReportsCard";

export default {
  name: "ReportShow",
  components: {RecentReportsCard, Report},
  data() {
    return {
      article:{},
      articles: []
    }
  },
  mounted() {
    getNewArticle().then(res=>{
      this.article = res.data;
    })
  }
}
</script>

<style scoped>

</style>