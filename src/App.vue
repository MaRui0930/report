<template>
  <div id="app">
    <el-header>
      <el-menu router default-active="/show" mode="horizontal">
        <el-row>
          <el-col style="text-align: center" :offset="3" :span="2">
            <el-menu-item index="/show">日报展示</el-menu-item>
          </el-col>
          <el-col style="text-align: center" :span="2">
            <el-menu-item index="/edit">上传日报</el-menu-item>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="2vh" style="height: calc(100vh - 80px) "  @mouseenter.native="enter">
          <el-drawer size="15%" :modal="false" :show-close="false" title="解锁编辑上传" :visible.sync="drawer"
                     direction="ltr">
            <el-form style="padding-top: 20vh">
              <el-form-item>
                <el-input style="width: 50%" v-model="form.password" placeholder="输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="submit">确定</el-button>
              </el-form-item>
            </el-form>
            <span style="font-size: 0.5em;line-height: 50px">开发不易,赏口饭吃</span>
            <el-image style="height: 20vh;width: 20vh" :src="require('@/assets/me.jpg')" ></el-image>
          </el-drawer>
      </el-aside>
      <el-container style="padding-right: 30vh;padding-left: 28vh">
        <el-main>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </el-main>
        <el-footer height="40px" style="text-align: center;line-height: 40px">
          powered by MaRui
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import {auth} from "@/api/User";

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      form: {
        password: ''

      }
    }
  },
  methods: {
    enter() {
      this.drawer = true;
    },
    submit() {
      auth(this.form.password)
    }
  }
}
</script>

<style>
.el-main {
  color: #333;
  text-align: center;
}

.el-aside {
  color: #333;
  text-align: center;
}
</style>
