<template>
  <div class="repos">
    <div v-for="repo of repos" :key="repo.id" class="card">
      <a class="card__link" :href="repo.html_url" target="_blank">{{ repo.name }}</a>
      <div class="card__icons">
        <p><img src="/assets/star.svg" alt="Stars"><span>{{ repo.stargazers_count }}</span></p>
        <p><img src="/assets/code-branch.svg" alt="Forks"><span>{{ repo.forks_count }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Repos',
  computed: {
    ...mapState(['search', 'username', 'users', 'profile', 'repos'])
  },
  created() {
    this.$store.dispatch('fetchRepos', this.$store.state.username);
  }
};
</script>

<style lang="sass" scoped>
$white: #ecf0f1
$black: #131418
$dark-blue: #2c3e50
$light-blue: #7f8c8d
$sea-green: #16a085

.repos
  padding: 40px

.card
  border-top: 1px solid $sea-green
  color: $dark-blue
  display: flex
  justify-content: space-between
  max-width: 100%
  padding: 20px 0
  text-align: left
  width: 600px

  &:last-child
    border-bottom: 1px solid $sea-green

  &__link
    color: $dark-blue
    font-decoration: none
    font-weight: bold
    transition: color .5 ease

    &:hover
      color: $sea-green

  &__icons
    display: flex

    img
      height: 16px
      margin: 0 5px
</style>
