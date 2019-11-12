<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Slide"
};
</script>
<style lang="less">
.slide :first-child {
  width: 100%;
  height: 100%;
}
</style>