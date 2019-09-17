# vue-banner-better 
better banner component for vue.js,easy to use. 
# Features 
+ <b>Easy</b> 
  
  Few API, make it easy for developers to quickly develop a banner component. 
+ <b>Swift</b> 

  Just configure it on demand to get the banner effect you want.
# Install 
```javascript
npm install vue-banner-better -S
``` 
# Usage 
```html 
<Banner
      width="400px"
      height="300px"
      bordered
      duration="500ms"
      :autoplay="autoplay"
      effect="slide"
      :pagination="pagination"
      show-navigation
      disable-on-hover
    >
      <Slide>0</Slide>
      <Slide>1</Slide>
      <Slide>2</Slide>
</Banner>
```
```javascript
import Vue from 'vue' 
import {Banner,Slide} from 'vue-banner-better'
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
        interval: "2000",
        apply: true,
        mode: "loop"
      }
    };
  },
  components: {
    Alert,
    Banner,
    Slide
  }
```