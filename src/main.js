import Vue from 'vue'
import $ from 'jquery'

import './css/myStyle.css'
import App from './App.vue'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import '../lib/Semantic-UI-CSS-master/semantic.css'
import VueRouter from 'vue-router'
import router from './router.js'

Vue.use(ElementUI);
Vue.use(VueRouter);



var vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  filters: {},
  render: e => e(App),
  router: router
  
})