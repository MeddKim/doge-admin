import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CompanyAccountList from '@/components/content/account/CompanyAccountList'
// import TimeEntries from 'components/TimeEntries'
// import LogTime from 'components/LogTime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
    	path:'/account/company',
    	component:CompanyAccountList
    }

 //    {
 //      path: '/home',
 //      name: 'Home',
 //      component: Home
 //    },
 //    {
	//   path : '/time-entries',
	//   component : TimeEntries,
	//   children : [{
	//     path : 'log-time',
	//     // 懒加载
	//     component : resolve => require(['components/LogTime.vue'],resolve),
	//   }]
	// }
  ]
})

