<template>
  <div class="app">
    <Banner
      mode="loop"
      width="800px"
      height="600px"
      :bordered="false"
      :pagination="pagination"
      :autoplay="{apply:true}"
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
    </Banner>
  </div>
</template>
<script>
// import Banner from "@/components/Banner";
// import Slide from "@/components/Slide";
export default {
  name: "App",
  data: () => {
    return {
      pagination: {
        apply: true,
        indicator: {
          color: "red",
          showCounter: true
        }
      }
    };
  }
};
</script>
