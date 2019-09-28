<template>
  <div class="app">
    <p>
      show an
      <i>Alert</i> Component below.
    </p>
    <Alert />
    <Banner
      mode="alternate"
      disable-on-hover
      width="800px"
      height="600px"
      :bordered="false"
      :pagination="{apply:true,align:'start'}"
    >
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
//import Banner from "@/components/Banner";
//import Slide from "@/components/Slide";
import { Banner, Slide } from "../dist/Banner";
export default {
  name: "App",
  components: {
    Alert,
    Banner,
    Slide
  }
};
</script>
