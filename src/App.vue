<template>
  <div class="app">
    <Swiper
      mode="loop"
      width="100%"
      height="100%"
      :bordered="false"
      :pagination="pagination"
      autoplay
    >
      <Slide>
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3750211471,3151515749&fm=26&gp=0.jpg"
        />
      </Slide>
      <Slide>
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1085446177,1382949253&fm=26&gp=0.jpg"
        />
      </Slide>
      <Slide>
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=297838807,2854555713&fm=26&gp=0.jpg"
        />
      </Slide>
    </Swiper>
  </div>
</template>
<script>
import Swiper from "@/components/Swiper";
import Slide from "@/components/Slide";
export default {
  name: "App",
  data: () => {
    return {
      pagination: {
        apply: true,
        type: "circle",
        indicator: {
          showCounter: true
        }
      }
    };
  },
  components: {
    Swiper,
    Slide
  }
};
</script>
<style>
.app {
  width: 400px;
  height: 300px;
  margin: 0 auto;
}
</style>
