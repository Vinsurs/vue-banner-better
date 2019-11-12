import Vue from "vue";
import App from "@/App";
import Banner from "../dist/Banner";
Vue.use(Banner);
new Vue({
  el: "#root",
  components: {
    App
  },
  template: "<App/>"
});
