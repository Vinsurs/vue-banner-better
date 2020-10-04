<template>
  <div class="b-slide">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Slide'
}
</script>
<style lang="less" scoped>
.b-slide :first-child {
  width: 100%;
  height: 100%;
}
</style>
