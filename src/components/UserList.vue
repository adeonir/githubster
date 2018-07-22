<template>
  <div class="user-list">
    <div class="card" v-for="(user, index) of users" :key="index">
      <div class="card__body" @click.prevent="getProfile(user.login)">
        <img class="card__avatar" :src="user.avatar_url" alt="user.login">
        <p class="card__username">@{{ user.login }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UserList',
  computed: {
    ...mapState(['search', 'username', 'users', 'profile', 'repos'])
  },
  methods: {
    getProfile(value) {
      this.$store.commit('setUsername', value);
      this.$router.push('/profile');
    }
  },
  created() {
    if (this.$store.state.search === '') this.$router.push('/');
    this.$store.dispatch('fetchUsers', this.$store.state.search);
  }
};
</script>

<style scoped lang="sass">
$white: #ecf0f1
$black: #131418
$dark-blue: #2c3e50
$light-blue: #7f8c8d
$sea-green: #16a085

.user-list
  display: flex
  flex-wrap: wrap
  justify-content: center
  margin-bottom: 30px

.card
  background: $white
  border-radius: 6px 5px 5px 6px
  box-shadow: 0 5px 10px rgba($black, .5)
  color: $dark-blue
  margin: 10px
  max-width: 100%
  position: relative

  &:hover
    cursor: pointer

  &::before
    background: transparent
    border-radius: 5px 0 0 5px
    content: ''
    display: block
    height: 100%
    position: absolute
    transition: background .3s ease
    width: 8px

  &:hover::before
    background: $sea-green

  &__body
    display: flex
    height: 60px
    min-width: 320px

  &__avatar
    border-radius: 5px 0 0 5px
    display: block
    height: 100%

  &__username
    margin-left: 15px
    margin-top: 10px
    text-align: left
</style>
