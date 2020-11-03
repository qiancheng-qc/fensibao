// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import axios from 'axios'
axios.defaults.withCredentials = true
// axios.get('./../static/serverconfig.json').then((result) => {
//   localStorage.setItem('baseUrl', result.data.baseUrl)
//   console.log('wwwww' + localStorage.getItem('baseUrl'))
// }).catch((error) => { console.log(error) })
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios
// import $ from 'jquery'
Vue.use(ElementUI)

// 修改网页标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + '商家客户资源管理系统'
  } else {
    document.title = '商家客户资源管理系统'
  }
  next()
})

Vue.config.productionTip = false
Vue.prototype.bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
