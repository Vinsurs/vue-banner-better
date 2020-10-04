# vue-banner-better

better banner(swiper,carousel) component for vue.js, easy to use.

# Features

- <b>Easy</b>

  Few API, make it easy for developers to quickly develop a swiper component.

- <b>Swift</b>

  Just configure it on demand to get the swiper effect you want.

# Install

```bash
npm install vue-banner-better -S
```

# Usage

First register `Banner` and `Slide` component in `main.js` file:

```javascript
import Vue from "vue";
import App from "./App";
// import swiper plugin
import Banner from "vue-banner-better";
// use plugin,it will mount Banner and slide components globally
Vue.use(Banner);

new Vue({
  el: "#root",
  render: h => h(App)
});
```

Then you can use them in your any `.vue` file:

> **NOTE** : The direct child element of the Banner component can **only** be the Slide component, otherwise it will cause an error!

```html
< Banner
  autoplay
  :indicator="indicator"
  show-navigation
  disable-on-hover
  mode="loop"
>
  <Slide>
    <img src="https://images.pexels.com/photos/289323/pexels-photo-289323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
  </Slide>
  <Slide>
    <img src="https://images.pexels.com/photos/70741/cereals-field-ripe-poppy-70741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
  </Slide>
  <Slide>
    <img src="https://images.pexels.com/photos/54323/rose-composites-flowers-spring-54323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
  </Slide>
</Swiper>
```

```javascript
export default {
  data() {
    return {
       indicator: {
            clickable: true,
            type: "pill",
            showCounter: false
        }
    };
  }
```

Of course you can also directly use the default component configuration:

```js
<Banner indicator>
	<Slide>something</Slide>
	<Slide>something</Slide>
	<Slide>something</Slide>
</Banner>
```

finally open your browser ,an amazing swiper view is shown!

# Api

## `Banner`

## Properties

|       Name       |        Type        | Default  | Description                                                |
| :--------------: | :----------------: | :------- | :--------------------------------------------------------- |
|     bordered     |     `Boolean`      | `false`  | if true,the Banner component have 1px outline              |
|     interval     |      `Number`      | `"3000"` | Set the rotation interval of swiper in milliseconds        |
|     autoplay     |     `Boolean`      | `true`   | Set whether swiper automatically rotates                   |
|       mode       |      `String`      | `'loop'` | Set the carousel mode, `loop`or `alternate`                |
|    indicator     | `Object`|`Boolean` | false    | See the `indicator` description below                      |
| show-navigation  |     `Boolean`      | `true`   | Whether to display navigation                              |
| disable-on-hover |     `Boolean`      | `true`   | Whether to disable the swiper when setting the mouse hover |

**`indicator`**

- **`indicator.align`**:Set the horizontal position of the indicator, 'start','center'(default) or 'end'.
- **`indicator.type`**:Set indicator style,'circle','square','bar'(default) or 'pill'.
- **`indicator.clickable`**:Indicates whether the indicator can be clicked to switch the carousel,defaults to be `true`.
- **`indicator.color`**:Set indicator default color.
- **`indicator.activeColor`**:Set the color when the indicator is activated.
- **`indicator.textColor`**:Set the text color of the counter in the indicator, available when `showCounter `is true.
- **`indicator.activeTextColor`**:Set the text color when the counter in the indicator is activated, available when `showCounter` is true.
- **`indicator.showCounter`**:Set whether to include a counter in the indicator,default value is `false`.

# MoreDetail

If you want to learn more about `vue-banner-better`, you can visit our hosting project to [github](https://github.com/Vinsurs/vue-banner-better)

You can also `git clone` and execute the following command:

```javascript
npm run start
```

to run the project, and welcome to mention [issure](https://github.com/Vinsurs/vue-banner-better/issues)!
