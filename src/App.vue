<template>
  <HelloCesium />
</template>

<script>
import HelloCesium from './components/HelloCesium.vue'

export default {
  name: 'App',
  components: {
    HelloCesium
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  overflow: hidden;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
