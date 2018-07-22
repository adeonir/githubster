import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: '',
    users: [],
    username: '',
    profile: {},
    repos: []
  },
  getters: {
    search: state => state.search,
    users: state => state.users,
    username: state => state.username,
    profile: state => state.profile,
    repos: state => state.repos
  },
  actions: {
    fetchUsers({ commit }, search) {
      axios
        .get(`https://api.github.com/search/users?q=${search}`)
        .then(({ data }) => data.items)
        .then(users => {
          commit('setUsers', users);
        });
    },
    fetchProfile({ commit }, username) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(({ data }) => data)
        .then(profile => {
          commit('setProfile', profile);
        });
    },
    fetchRepos({ commit }, username) {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then(({ data }) => data)
        .then(repos => {
          commit('setRepos', repos);
        });
    }
  },
  mutations: {
    setSearch(state, search) {
      state.search = search;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setProfile(state, profile) {
      state.profile = profile;
    },
    setRepos(state, repos) {
      state.repos = repos;
    }
  }
});
