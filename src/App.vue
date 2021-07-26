<template>
  <div class="app">
    <Banner indicator mode="loop" :show-navigation="true" :disable-on-hover="false" :autoplay="false"
    >
      <Slide>
        <img
          src="https://images.pexels.com/photos/289323/pexels-photo-289323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </Slide>
      <Slide>
        <img
          src="https://images.pexels.com/photos/70741/cereals-field-ripe-poppy-70741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </Slide>
      <Slide>
        <img
          src="https://images.pexels.com/photos/54323/rose-composites-flowers-spring-54323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </Slide>
    </Banner>
  </div>
</template>
<script>
import Banner from "@/components/Banner";
import Slide from "@/components/Slide";
export default {
  name: "App",
  data: () => {
    return {};
  },
  components: {
    Banner,
    Slide,
  },
};
</script>
<style lang="less">
.app {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  // .b-wrapper {
  //   width: 400px;
  //   height: 300px;
  // }
}
</style>
