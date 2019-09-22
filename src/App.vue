<template>
  <div class="app">
    <p>
      show an
      <i>Alert</i> Component below.
    </p>
    <Alert />
    <Banner
      width="400px"
      height="300px"
      bordered
      duration="500ms"
      :autoplay="autoplay"
      effect="slide"
      :pagination="pagination"
      show-navigation
      disable-on-hover
      mode="loop"
    >
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
    </Banner>
  </div>
</template>
<script>
import Alert from "@/components/Alert";
import Banner from "@/components/Banner";
import Slide from "@/components/Slide";
//import { Banner, Slide } from "../dist/Banner";
export default {
  name: "App",
  data() {
    return {
      pagination: {
        apply: true,
        align: "center",
        clickable: true,
        activeClassName: "active",
        type: "bar",
        indicator: {
          bgColor: "rgb(76, 0, 255)",
          color: "black",
          showCounter: true
        }
      },
      autoplay: {
        interval: 2000,
        apply: false
      }
    };
  },
  components: {
    Alert,
    Banner,
    Slide
  }
};
</script>
