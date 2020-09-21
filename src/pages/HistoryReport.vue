<template>
  <div>
    <Report :article="article"/>
    <RecentReportsCard/>
  </div>
</template>

<script>
import {getDetailArticle} from "@/api/Article";
import Report from "@/components/Report";
import RecentReportsCard from "@/components/RecentReportsCard";

export default {
  name: "HistoryReport",
  components: {RecentReportsCard, Report},
  data() {
    return{
      article:{},
    }
  },
  watch: {
    '$route.query.id': {
      handler(id) {
        if (id != null) {
          getDetailArticle(id).then(res=>{
            this.article=res.data
          });
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>