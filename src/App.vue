<template>
  <div id="app">
    <!-- <headnav> </headnav> -->
    <router-view />
  </div>
</template>

<script>
// import headnav from '../src/components/headnav'

export default {
  name: 'App',
  data () {
    return {}
  },
  mounted () {
    console.log(this.$router)
  }
  // components: {headnav}
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
