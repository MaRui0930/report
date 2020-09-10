<template>
  <el-container class="post-article">
    <el-header class="header">
      <el-input v-model="article.title" placeholder="请输入标题..." style="width: 400px;margin-left: 10px"></el-input>
    </el-header>
    <el-main class="main">
      <div class="main">
        <mavon-editor :toolbars="toolbarsConfig" style="height: 300px" id="editor" :imageFilter="imageFilter" ref=md v-model="mdContent"
                      @imgAdd="imgAdd"></mavon-editor>
      </div>
      <div style="display: flex;align-items: center;margin-top: 15px;justify-content: flex-end">
        <el-button type="primary" @click="submit">发表日报</el-button>
      </div>
    </el-main>
  </el-container>
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
.post-article > .main > #editor {
  width: 100%;
  height: 450px;
  text-align: left;
}

.post-article > .header {
  background-color: #ececec;
  margin-top: 10px;
  padding-left: 5px;
  display: flex;
  justify-content: flex-start;
}

.post-article > .main {
  /*justify-content: flex-start;*/
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  background-color: #ececec;
  padding-top: 0px;
}

.post-article > .header > .el-tag + .el-tag {
  margin-left: 10px;
}

.post-article > .header > .button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.post-article > .header > .input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.post-article {
}
</style>