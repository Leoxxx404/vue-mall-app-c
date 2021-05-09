import Vue from 'vue';
import Vant from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible';
import 'vant/lib/index.css';
import api from './api';

Vue.prototype.$api = api;
Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
