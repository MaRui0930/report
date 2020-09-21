<template>
  <div>
  <el-row>
    <el-input style="width: 20vw" v-model="article.title" placeholder="请输入标题..." ></el-input>
    <el-button type="primary" @click="submit">发表日报</el-button>
  </el-row>
  <el-row>
    <mavon-editor :toolbars="toolbarsConfig" style="height:60vh" id="editor" :imageFilter="imageFilter" ref=md
                  v-model="mdContent"
                  @imgAdd="imgAdd"></mavon-editor>
  </el-row>
  </div>
</template>

<script>
import {uploadImg} from "@/api/QiNiu";
import {addArticle} from "@/api/Article";

export default {
  name: 'Edit',
  data() {
    return {
      toolbarsConfig: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        ol: true, // 有序列表
        ul: true, // 无序列表
        imagelink: true, // 图片链接
        trash: true, // 清空
        subfield: true, // 单双栏模式
      },
      mdContent: '',
      article: {
        title: '',
        htmlContent: ''
      }
    }
  },
  methods: {
    imageFilter() {
      return true;
    },
    imgAdd(pos, $file) {
      let formData = new FormData();
      formData.append('image', $file);
      uploadImg(formData).then(res => {
        let key = res.data.key;
        const url = `http://upload.kremlindusk.top/${key}?imageMogr2/auto-orient/thumbnail/500x350>/blur/1x0/quality/100`
        this.$refs.md.$img2Url(pos, url);
      })
    },
    submit() {
      this.article.htmlContent = this.$refs.md.d_render;
      addArticle(this.article)
    }
  }
}
</script>

<style scoped>

</style>