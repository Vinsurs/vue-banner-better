<template>
  <div class="b-slide">
    <slot></slot>
  </div>
</template>
<script>
import Banner from './Banner.vue'
export default {
  name: 'Slide',
  parent: Banner,
}
</script>
<style lang="less" scoped>
.b-slide :first-child {
  width: 100%;
  height: 100%;
}
</style>
