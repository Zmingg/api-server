import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';
import App from './App.vue';

Vue.use(VueRouter);

new Vue({
  router,
  components: {
    App
  },
  template: `<App/>`
}).$mount('#app');

