import Vue from 'vue';
import "./utils/components"
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue';
import router from './router/index'
import QuilEditor from 'mavon-editor'
import "./router/permit"
import store from './store'
// import "./icons"

Vue.config.productionTip = false

Vue.use(QuilEditor);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
