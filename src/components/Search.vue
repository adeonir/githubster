<template>
  <div class="search">
    <form @submit.prevent.stop="searchUser">
      <input class="search__input" type="text"
        placeholder="Search for GitHub user"
        v-model="search">
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Search',
  computed: {
    ...mapState(['search', 'username', 'users', 'profile', 'repos']),
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit('setSearch', value);
      }
    }
  },
  methods: {
    searchUser() {
      this.$router.push('/userlist');
    }
  }
};
</script>

<style lang="sass">
$white: #ecf0f1
$black: #131418
$dark-blue: #2c3e50
$light-blue: #7f8c8d
$sea-green: #16a085

.search__input
  background: $white
  border: none
  border-left: 8px solid transparent
  border-radius: 5px
  box-shadow: 0 5px 10px rgba($black, .5)
  color: $dark-blue
  font-size: 16px
  margin-bottom: 30px
  max-width: 100%
  outline: none
  padding: 13px
  transition: border .3s ease
  width: 400px

  &::placeholder
    color: $light-blue

  &:hover
  &:focus
    border-left: 8px solid $sea-green
</style>
