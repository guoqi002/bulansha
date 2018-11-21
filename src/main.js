// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAweSomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import './assets/styles/bases/border.css'
import './assets/styles/bases/reset.css'
import './assets/styles/bases/iconfont/iconfont.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAweSomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img.mp.sohu.com/upload/20170810/1c70f023f5c64ec5b3b18d380235aa6d.png',
  loading: 'http://img.mp.sohu.com/upload/20170810/1c70f023f5c64ec5b3b18d380235aa6d.png',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
