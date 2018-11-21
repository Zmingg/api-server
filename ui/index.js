import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';
import App from './App.vue';
import 'swagger-ui/dist/swagger-ui.css';

Vue.use(VueRouter);

new Vue({
  router,
  components: {
    App
  },
  template: `<App/>`
}).$mount('#app');

