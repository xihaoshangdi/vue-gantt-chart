import Vue from 'vue'
import App from './App.vue'
// 组件库注册
import GanttChart from './../packages/index'
Vue.use(GanttChart)
// Element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
