import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './containers/Home.vue';
import Schema from './containers/Schema.vue';
import Editor from './containers/Editor.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/schema', component: Schema },
  { path: '/editor', component: Editor }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router;
