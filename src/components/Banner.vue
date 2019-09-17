<template>
  <div
    class="container"
    :style="{width,height}"
    :class="bordered?'bordered':''"
    @mouseover="disableOnHover?over():''"
    @mouseout="disableOnHover?out():''"
  >
    <div
      class="wrapper"
      ref="banner"
      :style="{transform:`translateX(${offset}px)`,'transition-duration':stopTransition?'0s': duration,
        width: `${wraperWidth}px`}"
    >
      <slot></slot>
    </div>

    <div class="pagination" :style="{'justify-content':pagination.align}">
      <ul v-if="pagination.apply&&slideCount" class="list">
        <li
          v-for="(v,i) in Array(autoplay.mode=='loop'?slideCount-2:slideCount)"
          :key="i"
          :class="['indicator',pagination.type,i==cur-1?pagination.activeClassName:'']"
          @click="(pagination.clickable&&autoplay.mode!='loop')?go(i):''"
          :style="{backgroundColor:pagination.indicator.bgColor,color:pagination.indicator.color}"
        >{{pagination.indicator.showCounter?i+1:''}}</li>
      </ul>
    </div>
    <div
      class="nav left-arrow"
      @click="autoplay.mode=='loop'?prevLoop():prev()"
      v-show="autoplay.mode!='loop'?(showNavigation&&activeIndex!=0):true"
    ></div>
    <div
      class="nav right-arrow"
      @click="autoplay.mode=='loop'?nextLoop():next()"
      v-show="autoplay.mode!='loop'?(showNavigation&&activeIndex!=slideCount-1):true"
    ></div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      containerWidth: 0,
      activeIndex: 0,
      timer: null,
      slideCount: 0,
      flag: true,
      stopTransition: false,
      loopcurindex: 0
    };
  },
  props: {
    width: {
      type: String,
      default: "400px"
    },
    height: {
      type: String,
      default: "300px"
    },
    bordered: {
      type: Boolean,
      default: true
    },
    duration: {
      type: String,
      default: "500ms"
    },
    autoplay: {
      type: Object,
      default() {
        return {
          interval: "2000",
          apply: true,
          mode: "alternate"
        };
      },
      validator(val) {
        return ["alternate", "loop"].includes(val.mode);
      }
    },
    effect: {
      type: String,
      default: "slide",
      validator(val) {
        return ["slide", "fade"].includes(val);
      }
    },
    pagination: {
      type: Object,
      default() {
        return {
          apply: true,
          align: "center",
          clickable: true,
          activeClassName: "active",
          type: "square",
          indicator: {
            bgColor: "rgb(76, 0, 255)",
            color: "black",
            showCounter: false
          }
        };
      },
      validator(val) {
        return (
          ["bar", "circle", "square"].includes(val.type) &&
          ["center", "start", "end"].includes(val.align)
        );
      }
    },
    "show-navigation": {
      type: Boolean,
      default: true
    },
    "disable-on-hover": {
      type: Boolean,
      default: false
    }
  },
  computed: {
    offset() {
      return -this.activeIndex * this.containerWidth;
    },
    wraperWidth() {
      return this.containerWidth * this.slideCount;
    },
    cur() {
      return this.$props.autoplay.mode == "loop"
        ? this.loopcurindex
        : this.activeIndex + 1;
    }
  },
  mounted() {
    switch (this.effect) {
      case "slide":
        let banner = this.$refs.banner;
        this.containerWidth = banner.parentNode.offsetWidth;
        if (this.autoplay.apply) {
          if (this.autoplay.mode == "loop") {
            let aSlide = banner.children;
            banner.appendChild(aSlide[0].cloneNode(true));
            banner.insertBefore(
              aSlide[aSlide.length - 2].cloneNode(true),
              aSlide[0]
            );
            //this.slideCount = banner.children.length;
            this.activeIndex = 1;
          }
          this.start();
        }
        this.slideCount = banner.children.length;
        break;
      default:
        throw new ReferenceError(
          `unknow swiper effect ${this.effect},consider use effect 'fade' or 'slide' instead.`
        );
    }
  },
  beforeDestroy() {
    this.cancel();
  },
  methods: {
    start() {
      this.cancel();
      this.timer = setInterval(this.move.bind(this), this.autoplay.interval);
    },
    cancel() {
      clearInterval(this.timer);
    },
    over() {
      this.cancel();
    },
    out() {
      this.start();
    },
    move() {
      switch (this.autoplay.mode) {
        case "loop":
          this.nextLoop();
          break;
        case "alternate":
          this.alternate();
          break;
        default:
          throw new ReferenceError(
            `unknow option ${this.direction} for "direction"!`
          );
          break;
      }
    },
    next() {
      let n = this.activeIndex + 1;
      this.go(n);
    },
    nextLoop() {
      /**
       * index 0 1 2
       * i    0     1     2    3     4
       *      3                      1
       * slideCount=5
       */
      if (this.activeIndex == 1) {
        this.stopTransition = false;
      }
      let n = this.activeIndex + 1;
      this.go(n);
      this.loopcurindex = n;
      if (n == this.slideCount - 1) {
        this.loopcurindex = 1;
        this.stopTransition = true;
        this.go(1);
      }
    },
    prevLoop() {
      /**
       * index 0 1 2
       * i    0     1     2    3     4
       *      3                      1
       * slideCount=5
       */
      if (this.activeIndex == 3) {
        this.stopTransition = false;
      }
      let n = this.activeIndex - 1;
      this.go(n);
      this.loopcurindex = n;
      if (n == 0) {
        this.loopcurindex = 3;
        this.stopTransition = true;
        this.go(3);
      }
    },
    prev() {
      let n = this.activeIndex - 1;
      //   if (n == -1) {
      //     n = this.slideCount - 1;
      //   }
      this.go(n);
    },
    alternate() {
      let n = this.activeIndex;
      if (this.flag) {
        n++;
        if (n >= this.slideCount) {
          this.flag = false;
          n -= 2;
        }
      } else {
        n--;
        if (n <= -1) {
          this.flag = true;
          n += 2;
        }
      }
      this.activeIndex = n;
    },
    go(i) {
      this.cancel();
      this.activeIndex = i;
      this.$nextTick(() => {
        this.start();
      });
    }
  }
};
</script>
<style lang="less" scoped>
.bordered {
  outline: 1px solid black;
}
.container {
  position: relative;
  margin: 10px auto;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0;
  .wrapper {
    position: relative;
    height: 100%;
    //width: 1200px;
    display: flex;
    flex-direction: row;
    transform: translateX(0);
    transition: all ease-in;

    .slide {
      height: 100%;
      flex: 1;
    }
  }
  .pagination {
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.5rem;
    position: absolute;
    bottom: 0.2rem;
    .list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      .indicator {
        flex: 1;
        flex-wrap: nowrap;
        height: 1.2rem;
        width: 1.2rem;
        margin: 0.2rem;
        text-align: center;
        line-height: 1.2rem;
        font-size: 50%;
        &.active {
          background: rgb(235, 167, 135) !important;
        }
        &.square {
          border: none;
        }
        &.circle {
          border-radius: 100%;
        }
        &.bar {
          width: 2rem;
          height: 0.5rem;
          line-height: 0.5rem;
          border-radius: 2px;
        }
      }
    }
  }
  .nav {
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    opacity: 0.1;
    border: 1.5rem solid transparent;
    transition: opacity 0.5s ease-in;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }

  .nav.left-arrow {
    left: 0;
    transform: translate(-1.5rem, -50%);
    border-right-color: rgb(0, 68, 255);
  }
  .nav.right-arrow {
    right: 0;
    transform: translate(1.5rem, -50%);
    border-left-color: rgb(0, 68, 255);
  }
}
</style>