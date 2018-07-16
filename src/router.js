import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import User from './views/User';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
});
