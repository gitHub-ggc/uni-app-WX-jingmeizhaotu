import Vue from 'vue'
import App from './App'
import require from "./utils/require"
Vue.config.productionTip = false
Vue.prototype.https = require
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
