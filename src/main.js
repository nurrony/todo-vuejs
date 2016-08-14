import Vue from 'vue'
import VueValidator from 'vue-validator'
import App from 'components/App/index.vue'

Vue.use(VueValidator)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
