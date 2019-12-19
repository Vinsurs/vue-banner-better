import Swiper from "@/components/Swiper";
import Slide from "@/components/Slide";
export default {
  install: Vue => {
    Vue.component(Swiper.name, Swiper);
    Vue.component(Slide.name, Slide);
  }
};
