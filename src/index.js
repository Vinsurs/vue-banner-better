import Banner from '@/components/Banner'
import Slide from '@/components/Slide'
export default {
  install: Vue => {
    Vue.component(Banner.name, Banner)
    Vue.component(Slide.name, Slide)
  }
}
export {
  Banner,
  Slide
}
