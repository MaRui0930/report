import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index'
import QuilEditor from 'mavon-editor'
import "./router/permit"


Vue.config.productionTip = false

Vue.use(ElementUI,{ size: 'small'});
Vue.use(QuilEditor);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
