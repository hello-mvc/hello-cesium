<template>
  <div id="cesiumContainer" />
</template>

<script setup>
import { onMounted } from 'vue'
import * as Cesium from 'cesium'
onMounted(() => {
  new Cesium.Viewer('cesiumContainer')
})
</script>

<style scoped>
#cesiumContainer {
  display: flex;
  flex: 1;
}
</style>
