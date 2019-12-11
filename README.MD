# vue-banner-better

better banner component for vue.js,easy to use.

# Features

- <b>Easy</b>

  Few API, make it easy for developers to quickly develop a banner component.

- <b>Swift</b>

  Just configure it on demand to get the banner effect you want.

# Install

```javascript
npm install vue-banner-better -S
```

# Usage

First register `Banner` and `Slide` component in `main.js` file:

```javascript
import Vue from "vue";
import App from "./App";
// import banner plugin
import Banner from "vue-banner-better";
// use plugin
Vue.use(Banner);

new Vue({
  el: "#root",
  render: h => h(App)
});
```

Then you can use their in your any `.vue` file:

```html
<Banner
  width="800px"
  height="600px"
  bordered
  duration="500ms"
  autoplay
  :pagination="pagination"
  show-navigation
  disable-on-hover
  mode="loop"
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
```

```javascript
export default {
  data() {
    return {
       pagination: {
        apply: true,
        clickable: true,
        activeClassName: "active",
        type: "circle",
        indicator: {
          bgColor:"rgb(76, 0, 255)",
          color: "black",
          showCounter: true }
        }
    };
  }
```

finally open your browser ,an amazing banner view is shown!

# Api

## `Banner`

## Properties

|       Name       |        Type         | Default                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :--------------: | :-----------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|      width       |      `String`       | `"400px"`                                                                                                                                                                          | set the width of component "Banner"                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|      height      |      `String`       | `"300px"`                                                                                                                                                                          | set the height of component "Banner"                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     bordered     |      `Boolean`      | `true`                                                                                                                                                                             | if true,the Banner component have 1px outline                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     duration     |      `String`       | `"500ms"`                                                                                                                                                                          | set the Banner component animation duration                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     autoplay     | `Object`\|`Boolean` | `true\|false\|{ interval: 2000, apply: true }`                                                                                                                                     | Set whether to play automatically : { `interval`:Set the motion interval, `apply`:Set whether to enable autoplay }                                                                                                                                                                                                                                                                                                                                                  |
|       mode       |      `String`       | `'alternate'`                                                                                                                                                                      | `mode`:"loop"\|"alternate" Set the sport mode                                                                                                                                                                                                                                                                                                                                                                                                                       |
|    pagination    | `Object`\|`Boolean` | `true\|false\|{apply: true,align: "center",clickable: true,activeClassName: "active",type: "square",indicator: { bgColor: "rgb(76, 0, 255)", color: "black", showCounter: false}}` | Set pagination style :{ `apply`:Whether to enable pagination,`align`:"start"\|"center"\|"end" Set the pager position,`clickable`:"Set whether the pager can be clicked",`activeClassName`:set the active indicator className,`type`:"bar"\|"square"\|"circle" set the shape of indicators,`bgColor`:set the backgoundColor of indicators,`color`:set the inner counter fontColor when set `showCounter` value to `true`,`showCounter`:Whether to display the count} |
| show-navigation  |      `Boolean`      | `true`                                                                                                                                                                             | Whether to display navigation                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| disable-on-hover |      `Boolean`      | `false`                                                                                                                                                                            | Whether to disable the banner when setting the mouse hover                                                                                                                                                                                                                                                                                                                                                                                                          |

# MoreDetail

If you want to learn more about `vue-banner-better`, you can visit our hosting project to [github](https://github.com/Vinsurs/vue-banner-better)

You can also `git clone` and execute the following command:

```javascript
npm run start
```

to run the project, and welcome to mention [issure](https://github.com/Vinsurs/vue-banner-better/issues)!
