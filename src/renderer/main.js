import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Element)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!store.state.User.User) {
      next ({
        path: '/Login'
      })
    }else {
      next()
    }
  }else {
    next()
  }
})

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
  data () {
    return {
      
    }
  },
  mounted() {
  }
}).$mount('#app')
