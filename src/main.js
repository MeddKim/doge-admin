import Vue from 'vue'
import ElementUI  from 'element-ui'
// import iView from 'iview'
import App from './App'
import router from './router'
// import 'iview/dist/styles/iview.css';
import './assets/main.css'
import 'element-ui/lib/theme-default/index.css'  

console.log(router);

Vue.use(ElementUI);
// Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
