<template>
  <div id="app">
    <Bheader></Bheader>
    <router-view/>
    <Bbottom></Bbottom>
  </div>
</template>

<script>
  import Bheader from './components/Bheader.vue'
  import Bbottom from './components/Bbottom.vue'
export default {
  name: 'App',
  components: {
    Bheader,
    Bbottom,
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 540PX;
  margin: 0 auto;
}
</style>
