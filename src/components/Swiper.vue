<template>
  <div
    v-cloak
    class="container"
    :style="{ width, height }"
    :class="bordered ? 'bordered' : ''"
    @mouseover="disableOnHover ? over() : ''"
    @mouseout="disableOnHover ? out() : ''"
  >
    <div
      class="wrapper"
      ref="banner"
      :style="{
        transform: `translateX(${offset}px)`,
        'transition-duration': stopTransition ? '0s' : duration
      }"
    >
      <slot></slot>
    </div>

    <div
      class="pagination"
      :style="{
        'justify-content':
          PAGINATION.align != 'center' ? 'flex-' + PAGINATION.align : 'center'
      }"
    >
      <ul v-if="PAGINATION.apply && slideCount" class="list">
        <li
          v-for="(v, i) in Array(mode == 'loop' ? slideCount - 2 : slideCount)"
          :key="i"
          :class="[
            'indicator',
            PAGINATION.clickable ? 'pointer' : '',
            PAGINATION.type,
            i == cur - 1 ? PAGINATION.activeClassName : ''
          ]"
          @click="PAGINATION.clickable && mode != 'loop' ? go(i) : ''"
          :style="{
            backgroundColor: PAGINATION.indicator.bgColor,
            color: PAGINATION.indicator.color
          }"
        >
          {{ PAGINATION.indicator.showCounter ? i + 1 : "" }}
        </li>
      </ul>
    </div>
    <div
      class="nav left-arrow"
      @click="mode == 'loop' ? prevLoop() : prev()"
      v-show="mode != 'loop' ? showNavigation && activeIndex != 0 : true"
    >
      <
    </div>
    <div
      class="nav right-arrow"
      @click="mode == 'loop' ? nextLoop() : next()"
      v-show="
        mode != 'loop' ? showNavigation && activeIndex != slideCount - 1 : true
      "
    >
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Swiper",
  data() {
    return {
      containerWidth: 0,
      activeIndex: 0,
      timer: null,
      slideCount: 20,
      flag: true,
      loopcurindex: 1,
      stopTransition: false,
      AUTOPLAY: {},
      PAGINATION: {}
    };
  },
  beforeMount() {
    let autoplay = this.$props.autoplay;
    this.AUTOPLAY = Object.assign(
      {},
      {
        interval: 3000,
        apply: false
      },
      typeof autoplay === "boolean" ? { apply: autoplay } : autoplay
    );
    let pagination = this.$props.pagination;
    if (typeof pagination === "object") {
      let { indicator } = pagination;
      let _indicator = {
        bgColor: "transparent",
        color: "black",
        showCounter: false
      };
      if (indicator) {
        pagination.indicator = Object.assign({}, _indicator, indicator);
      } else {
        pagination.indicator = _indicator;
      }
      this.PAGINATION = Object.assign(
        {},
        {
          apply: true,
          align: "center",
          clickable: true,
          activeClassName: "active",
          type: "square"
        },
        pagination
      );
    } else if (typeof pagination === "boolean") {
      this.PAGINATION = {
        apply: true,
        align: "center",
        clickable: true,
        activeClassName: "active",
        type: "square",
        indicator: {
          bgColor: "transparent",
          color: "black",
          showCounter: false
        }
      };
    }
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
    mode: {
      type: String,
      default: "alternate",
      validator(val) {
        return ["alternate", "loop"].includes(val);
      }
    },

    autoplay: {
      type: [Object, Boolean]
    },
    pagination: {
      type: [Object, Boolean],
      validator(val) {
        if (typeof val === "object") {
          if (val.type || val.align)
            return (
              ["bar", "circle", "square"].includes(val.type) ||
              ["center", "start", "end"].includes(val.align)
            );
          if (val.indicator && typeof val.indicator !== "object") {
            throw new TypeError(
              `the parameter'indicator' must be an object but received (${typeof val.indicator})`
            );
          }
        }
        return true;
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
      return this.$props.mode == "loop"
        ? this.loopcurindex
        : this.activeIndex + 1;
    }
  },
  mounted() {
    let banner = this.$refs.banner;
    this.containerWidth = banner.parentNode.offsetWidth;
    if (this.mode == "loop") {
      let aSlide = banner.children;
      banner.appendChild(aSlide[0].cloneNode(true));
      banner.insertBefore(aSlide[aSlide.length - 2].cloneNode(true), aSlide[0]);
      this.activeIndex = 1;
    }
    if (this.AUTOPLAY.apply == true) {
      this.start();
    }
    this.slideCount = banner.children.length;
    banner.style.width = `${this.wraperWidth}px`;
  },
  beforeDestroy() {
    this.cancel();
    this.$refs.banner.removeEventListener("transitionend", this.TREnd, false);
  },
  methods: {
    start() {
      this.cancel();
      this.timer = setInterval(this.move.bind(this), this.AUTOPLAY.interval);
    },
    cancel() {
      clearInterval(this.timer);
    },
    over() {
      this.cancel();
    },
    out() {
      if (this.AUTOPLAY.apply == true) {
        this.start();
      }
    },
    move() {
      switch (this.mode) {
        case "loop":
          this.nextLoop();
          this.$refs.banner.addEventListener(
            "transitionend",
            this.TREnd,
            false
          );
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
      if (this.activeIndex == 1) {
        this.stopTransition = false;
      }
      let n = this.activeIndex + 1;
      if (n >= 5) {
        n = 1;
      }
      this.go(n);
      this.loopcurindex = n;
      if (n == this.slideCount - 1) {
        this.loopcurindex = 1;
      }
    },
    TREnd() {
      if (this.activeIndex == this.slideCount - 1) {
        this.stopTransition = true;
        this.activeIndex = 1;
        this.start();
      } else if (this.activeIndex <= 0) {
        this.stopTransition = true;
        this.activeIndex = this.slideCount - 2;
      }
    },
    prevLoop() {
      if (this.activeIndex == this.slideCount - 2) {
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
    },
    prev() {
      let n = this.activeIndex - 1;
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
      if (this.AUTOPLAY.apply == true) {
        this.$nextTick(() => {
          this.start();
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.bordered {
  outline: 1px solid black;
}
.container {
  position: relative;
  margin: 10px auto;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0;
  &:hover .nav {
    opacity: 1;
  }
  .wrapper {
    position: relative;
    height: 100%;
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
        border: 1px solid rgba(255, 255, 255, 0.6);
        &.active {
          background-color: #0c40eb !important;
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
        &.pointer {
          cursor: pointer;
        }
      }
    }
  }
  .nav {
    position: absolute;
    text-align: center;
    width: 2.5rem;
    height: 2.5rem;
    top: 50%;
    opacity: 0.1;
    background: rgba(0, 0, 0, 0.3);
    transition: opacity 0.5s ease-in;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .nav.left-arrow {
    left: 0;
    transform: translate(15%, -50%);
  }
  .nav.right-arrow {
    right: 0;
    transform: translate(-15%, -50%);
  }
}
</style>
