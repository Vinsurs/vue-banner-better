<template>
  <div class="alert" v-if="show">
    <div class="alert-danger">
      <p>
        this is an alert message
        <span class="close" @click="show=!show">&times;</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Alert",
  data() {
    return {
      show: true
    };
  }
};
</script>
<style lang="less" scoped>
.alert {
  margin: 20px auto;
  padding: 0;
  text-align: center;
  width: 60%;
  .alert-danger {
    background: chartreuse;
    width: 100%;
    margin: 0;
    .close {
      width: 10px;
      height: 10px;
      line-height: 10px;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      float: right;
      margin: 5px;
    }
  }
}
</style>