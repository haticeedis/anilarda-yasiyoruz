// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import feather from 'vue-icon';
import '@/assets/scss/index.scss';
import App from './App';
import router from './router';
import store from './store';

// using vue-icon package
Vue.use(feather, 'v-icon');
// using bootstrap vue
Vue.use(BootstrapVue);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App) // render icons
});
