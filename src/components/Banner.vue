<template>
  <div
    v-cloak
    :class="['b-wrapper', bordered ? 'b-bordered' : '']"
    :style="{ width, height }"
    @mouseover="disableOnHover ? over($event) : ''"
    @mouseout="disableOnHover ? out() : ''"
  >
    <div v-show="!didOk" class="b-layout-placeholder"></div>
    <div
      v-show="didOk"
      class="b-banner"
      ref="banner"
      :style="{
        width: `${wraperWidth}px`,
        transform: `translateX(${offset}px)`,
        'transition-duration': stopTransition ? '0s' : '500ms'
      }"
    >
      <slot></slot>
    </div>

    <div
      class="b-pagination"
      v-if="PAGINATION.align && slideCount"
      :style="{
        'justify-content':
          PAGINATION.align != 'center' ? 'flex-' + PAGINATION.align : 'center'
      }"
      @mouseover="overPagenation($event)"
    >
      <ul class="b-indicators">
        <li
          v-for="(v, i) in Array(
            mode == 'loop'
              ? slideCount - 2 > 0
                ? slideCount - 2
                : 1
              : slideCount
          )"
          :key="i"
          :class="[
            'b-indicator',
            PAGINATION.clickable ? 'b-pointer' : '',
            `b-${PAGINATION.type}`
          ]"
          @click="
            PAGINATION.clickable ? (mode == 'loop' ? goLoop(i + 1) : go(i)) : ''
          "
          :style="{
            backgroundColor:
              i == cur - 1 ? PAGINATION.activeColor : PAGINATION.color,
            color:
              i == cur - 1 ? PAGINATION.activeTextColor : PAGINATION.textColor
          }"
        >{{ PAGINATION.showCounter ? i + 1 : '' }}</li>
      </ul>
    </div>
    <div
      class="b-nav b-left-arrow"
      @click="mode == 'loop' ? debouncedPrevLoop() : prev()"
      v-show="
        showNavigation ? (mode != 'loop' ? activeIndex != 0 : true) : false
      "
    ><</div>
    <div
      class="b-nav b-right-arrow"
      @click="mode == 'loop' ? debouncedNextLoop() : next()"
      v-show="
        showNavigation
          ? mode != 'loop'
            ? activeIndex != slideCount - 1
            : true
          : false
      "
    >></div>
  </div>
</template>
<script>
import * as PropConfig from "../config/com.config";
import throttle from "../utils/throttle";

export default {
  name: "Banner",
  data() {
    return {
      containerWidth: 600,
      activeIndex: 0,
      timer: null,
      slideCount: 20,
      flag: true,
      loopcurindex: 1,
      stopTransition: false,
      PAGINATION: {},
      shouldPause: false,
      didOk: false,
    };
  },
  beforeMount() {
    let pagination = this.$props.indicator;
    if (typeof pagination === "object") {
      this.PAGINATION = Object.assign({}, PropConfig.INDICATOR, pagination);
    } else if (typeof pagination === "boolean") {
      if (pagination) {
        this.PAGINATION = PropConfig.INDICATOR;
      }
    }
  },
  props: {
    width: {
      type: String,
      default: '800px',
    },
    height: {
      type: String,
      default: '400px',
    },
    bordered: {
      type: Boolean,
      default: PropConfig.BORDERED,
    },
    mode: {
      type: String,
      default: PropConfig.MODE,
      validator(val) {
        if (!["alternate", "loop"].includes(val)) {
          throw new TypeError(
            `invalid prop value for 'mode', expects 'alternate' or 'loop' but received '${val}'`
          );
        }
        return true;
      },
    },

    autoplay: {
      type: Boolean,
      default: PropConfig.AUTOPLAY,
    },
    interval: {
      type: Number,
      default: PropConfig.INTERVAL,
    },
    indicator: {
      type: [Object, Boolean],
      validator(val) {
        const isOptions = typeof val === "object";
        const isBool = typeof val === "boolean";
        if (!isOptions && !isBool) {
          throw new TypeError(`invalid prop type for 'indicator'`);
        }
        if (isOptions) {
          if (
            val.type &&
            !["bar", "circle", "square", "pill"].includes(val.type)
          ) {
            throw new TypeError(`invalid prop value for 'indicator.type'`);
          }
          if (val.align && !["center", "start", "end"].includes(val.align)) {
            throw new TypeError(`invalid prop value for 'indicator.align'`);
          }
        }
        return true;
      },
    },
    "show-navigation": {
      type: Boolean,
      default: PropConfig.SHOW_NAVIGATION,
    },
    "disable-on-hover": {
      type: Boolean,
      default: PropConfig.DISABLE_ON_HOVER,
    },
  },
  computed: {
    offset() {
      return -this.activeIndex * this.containerWidth;
    },
    wraperWidth() {
      return this.containerWidth * this.slideCount;
    },
    cur() {
      return this.slideCount > 1
        ? this.$props.mode == "loop"
          ? this.loopcurindex
          : this.activeIndex + 1
        : 1;
    },
  },
  mounted() {
    let banner = this.$refs.banner;
    this.containerWidth = banner.parentNode.offsetWidth;
    let slides = banner.children;
    if (slides.length == 0) {
      throw new Error(
        `The banner component must contain at least one slide component`
      );
    }
    if (
      Array.prototype.slice
        .call(slides)
        .some((slide) => !slide.classList.contains("b-slide"))
    ) {
      throw new Error(
        `The direct child element of Banner component can only be Slide component`
      );
    }
    if (this.mode == "loop") {
      if (slides.length > 1) {
        banner.appendChild(slides[0].cloneNode(true));
        banner.insertBefore(
          slides[slides.length - 2].cloneNode(true),
          slides[0]
        );
        this.activeIndex = 1;
      }
      // throttle
      this.debouncedPrevLoop = throttle(this.prevLoop, 500, this);
      this.debouncedNextLoop = throttle(this.nextLoop, 500, this);
      banner.addEventListener("transitionend", this.TREnd, false);
    }
    this.didOk = true;
    if (this.autoplay == true && slides.length > 1) {
      this.start();
    }
    this.slideCount = banner.children.length;
  },
  beforeDestroy() {
    this.cancel();
    this.$refs.banner.removeEventListener("transitionend", this.TREnd, false);
  },
  methods: {
    start() {
      this.cancel();
      if (!this.shouldPause) {
        this.timer = setInterval(this.move.bind(this), this.interval);
      }
    },
    cancel() {
      clearInterval(this.timer);
    },
    over(e) {
      if (this.slideCount < 2) return;
      const cls = e.target.classList;
      if (!cls.contains("b-nav")) {
        this.cancel();
      }
    },
    out() {
      if (this.slideCount < 2) return;
      if (this.autoplay == true) {
        this.start();
      }
    },
    move() {
      if (this.shouldPause) return;
      switch (this.mode) {
        case "loop":
          this.nextLoop();
          break;
        case "alternate":
          this.alternate();
          break;
        default:
          throw new TypeError(`unknow option ${this.mode} for 'mode'!`);
          break;
      }
    },
    next() {
      if (this.slideCount < 2) return;
      let n = this.activeIndex + 1;
      this.go(n);
    },
    nextLoop() {
      if (this.slideCount < 2) return;
      this.shouldPause = true;
      this.cancel();
      if (this.activeIndex == 1) {
        this.stopTransition = false;
      }
      if (this.activeIndex == this.slideCount - 2) {
        this.stopTransition = false;
      }
      let n = this.activeIndex + 1;
      if (n >= this.slideCount) {
        n = 1;
      }
      this.go(n);
      this.loopcurindex = n;
      if (n == this.slideCount - 1) {
        this.loopcurindex = 1;
      }
      if(this.autoplay) {
        this.$nextTick(() => {
          this.shouldPause = false;
          this.start();
        });
      }
    },
    TREnd() {
      if (this.activeIndex == this.slideCount - 1) {
        this.stopTransition = true;
        this.activeIndex = 1;
      } else if (this.activeIndex == 0) {
        this.stopTransition = true;
        this.activeIndex = this.slideCount - 2;
      }
    },
    prevLoop() {
      if (this.slideCount < 2) return;
      this.shouldPause = true;
      this.cancel();
      if (this.activeIndex == this.slideCount - 2) {
        this.stopTransition = false;
      }
      if (this.activeIndex == 1) {
        this.stopTransition = false;
      }
      let n = this.activeIndex - 1;
      if (n <= -1) {
        n = this.slideCount - 2;
      }
      this.go(n);
      this.loopcurindex = n;
      if (n <= 0) {
        this.loopcurindex = this.slideCount - 2;
      }
      if(this.autoplay) {
        this.$nextTick(() => {
          this.shouldPause = false;
          this.start();
        });
      }
    },
    prev() {
      if (this.slideCount < 2) return;
      let n = this.activeIndex - 1;
      this.go(n);
    },
    alternate() {
      if (this.slideCount < 2) return;
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
      if (this.slideCount < 2) return;
      this.cancel();
      this.activeIndex = i;
      if (this.autoplay == true) {
        this.$nextTick(() => {
          this.start();
        });
      }
    },
    goLoop(i) {
      if (this.slideCount < 2) return;
      this.cancel();
      this.activeIndex = i;
      this.loopcurindex = i;
      if (this.activeIndex == 2 || this.activeIndex == this.slideCount - 2) {
        this.stopTransition = false;
      }
      if (this.autoplay == true) {
        this.$nextTick(() => {
          this.start();
        });
      }
    },
    overPagenation(e) {
      e.stopPropagation();
      e.preventDefault();
    },
  },
};
</script>
<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.b-bordered {
  outline: 1px solid black;
}
.b-wrapper {
  position: relative;
  margin: 10px auto;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0;
  &:hover .b-nav {
    opacity: 1;
  }
  .b-banner {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    transform: translateX(0);
    transition: all ease-in;

    .b-slide {
      height: 100%;
      flex: 1;
    }
  }
  .b-pagination {
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 8px;
    .b-indicators {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding-left: 10px;
      padding-right: 10px;
      .b-indicator {
        flex: 1;
        flex-wrap: nowrap;
        height: 15px;
        width: 15px;
        margin: 4px;
        font-size: 50%;
        box-sizing: border-box;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        &.b-square {
          border: none;
        }
        &.b-circle {
          border-radius: 50%;
        }
        &.b-bar {
          width: 25px;
          height: 5px;
        }
        &.b-pill {
          width: 25px;
          height: 5px;
          border-radius: 5px;
        }
        &.b-pointer {
          cursor: pointer;
        }
      }
    }
  }
  .b-nav {
    position: absolute;
    text-align: center;
    width: 30px;
    height: 45px;
    top: 50%;
    opacity: 0;
    background: rgba(0, 0, 0, 0.3);
    transition: opacity 0.5s ease-in;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.6);
    &::selection {
      background: none;
    }
  }

  .b-nav.b-left-arrow {
    left: 0;
    transform: translate(15%, -50%);
  }
  .b-nav.b-right-arrow {
    right: 0;
    transform: translate(-15%, -50%);
  }
}
</style>
