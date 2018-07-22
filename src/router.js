import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/components/Search';
import UserList from '@/components/UserList';
import Profile from '@/components/Profile';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/userlist',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
});
