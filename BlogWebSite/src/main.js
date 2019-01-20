import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueSession from 'vue-session'
import VueCookie from 'vue-cookie'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueSession)
Vue.use(VueCookie)

Vue.config.productionTip = false

let app = new Vue(
  {
    el: '#app',
    router,
    components: {'App': App},
    template: '<App/>'
  }
)

Vue.use(app)
