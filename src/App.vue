<template>
  <div class="app">
    <p>
      show an
      <i>Alert</i> Component below.
    </p>
    <Alert />
    <Banner mode="loop" disable-on-hover>
      <Slide>
        <img src="./assets/1.jpg" />
      </Slide>
      <Slide>
        <img src="./assets/2.jpg" />
      </Slide>
      <Slide>
        <img src="./assets/3.jpg" />
      </Slide>
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
        apply: true
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
