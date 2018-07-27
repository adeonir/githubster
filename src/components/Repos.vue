<template>
  <div class="repos">
    <div class="card" v-for="repo of repos" :key="repo.id" @click="gotToRepo(repo.html_url)">
      <div class="card__body">
        <p class="card__title">{{ repo.name }}</p>
        <div class="card__icons">
          <p><img src="/assets/star.svg" alt="Stars"><span>{{ repo.stargazers_count }}</span></p>
          <p><img src="/assets/code-branch.svg" alt="Forks"><span>{{ repo.forks_count }}</span></p>
        </div>
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
  },
  methods: {
    gotToRepo(url) {
      window.open(url, '_blank');
    }
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
  max-width: 100%
  text-align: left
  width: 600px
  &:last-child
    border-bottom: 1px solid $sea-green
  
  &__body
    background: $white
    color: $dark-blue
    display: flex
    justify-content: space-between
    padding: 15px
    transition: background .5 ease
    &:hover
      background: desaturate(lighten($sea-green, 50%), 20%)
      cursor: pointer
    
    @media screen and (max-width: 430px)
      align-items: center
      flex-direction: column
      justify-content: center
      padding-bottom: 5px
      padding-top: 5px
      text-align: center

  &__title
    color: $dark-blue
    font-decoration: none
    font-weight: bold

    @media screen and (max-width: 430px)
      margin-bottom: 5px

  &__icons
    display: flex
    svg
      height: 16px
      margin: 0 5px
</style>
