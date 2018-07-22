<template>
  <div class="profile">
    <div class="card">
      <div class="card__body">
        <img :src="profile.avatar_url" :alt="profile.name" class="card__avatar">
        <div class="card__info">
          <h3 class="card__name">{{ profile.name }}</h3>
          <p class="card__bio">{{ profile.bio }}</p>
        </div>
        <div class="card__stats">
          <div class="stats"><span class="stats__description">Repositories</span><span class="stats__number">{{ profile.public_repos }}</span></div>
          <div class="stats"><span class="stats__description">Followers</span><span class="stats__number">{{ profile.followers }}</span></div>
          <div class="stats"><span class="stats__description">Following</span><span class="stats__number">{{ profile.following }}</span></div>
        </div>
        <Repos />
      </div>
    </div>
  </div>
</template>

<script>
import Repos from '@/components/Repos';
import { mapState } from 'vuex';

export default {
  name: 'Profile',
  computed: {
    ...mapState(['search', 'username', 'users', 'profile', 'repos'])
  },
  created() {
    if (this.$store.state.search === '') this.$router.push('/');
    this.$store.dispatch('fetchProfile', this.$store.state.username);
  },
  components: {
    Repos
  }
};
</script>

<style lang="sass" scoped>
$white: #ecf0f1
$black: #131418
$dark-blue: #2c3e50
$light-blue: #7f8c8d
$sea-green: #16a085

.profile
  display: flex
  justify-content: center
  margin-top: 125px

.card
  background: $white
  border-radius: 5px
  color: $dark-blue
  max-width: 100%
  width: 600px

  &__body
    position: relative

  &__avatar
    border-radius: 100px
    border: 5px solid $sea-green
    box-shadow: 0px 5px 10px rgba($black, .5)
    height: 200px
    margin-bottom: 20px
    margin-top: -100px
    position: relative
    width: 200px

  &__info
    margin-bottom: 30px

  &__name
    font-size: 36px
    margin-bottom: 5px

  &__bio
    font-size: 16px
    color: $light-blue

  &__stats
    display: flex
    justify-content: center

.stats
  display: flex
  flex-direction: column
  justify-content: center
  padding: 2px 15px

  &:nth-child(2)
    border-left: 1px solid $sea-green
    border-right: 1px solid $sea-green

  &__description
    color: $light-blue
    font-size: 12px

  &__number
    font-size: 24px
    font-weight: bold
</style>
