import Vue from 'vue'
import ElementUI  from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import './assets/main.css'
import 'element-ui/lib/theme-default/index.css'  

Vue.use(ElementUI);
// Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
