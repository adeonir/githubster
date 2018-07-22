<template>
  <div id="app">
    <h1 class="app__title">Githubster</h1>
    <router-view></router-view>
  </div>
</template>

<style lang="sass">
$dark-blue: #2c3e50

*, *::before, *::after
  box-sizing: border-box
  margin: 0
  padding: 0

html,
body,
#app,
  height: 100%
  padding: 10px

html
  background: $dark-blue

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-family: Lato, Helvetica, Arial, sans-serif
  text-align: center

.app__title
  color: white
  margin-bottom: 20px
  font-weight: 100
  font-size: 48px
</style>
