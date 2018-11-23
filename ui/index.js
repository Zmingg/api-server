import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'swagger-ui/dist/swagger-ui.css';
import './swagger-editor/swagger-editor.css';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
  router,
  components: {
    App
  },
  template: `<App/>`
}).$mount('#app');

