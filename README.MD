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
in your `template`: 
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
in your `script`:
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
# Api 
## `Banner`
## Properties 
|       Name       |   Type    |                                                                                   Default                                                                                    |                                                                                                                                                                                                                              Description                                                                                                                                                                                                                              |
| :--------------: | :-------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      width       | `String`  |                                                                                  `"400px"`                                                                                   |                                                                                                                                                                                                                  set the width of component "Banner"                                                                                                                                                                                                                  |
|      height      | `String`  |                                                                                  `"300px"`                                                                                   |                                                                                                                                                                                                                 set the height of component "Banner"                                                                                                                                                                                                                  |
|     bordered     | `Boolean` |                                                                                    `true`                                                                                    |                                                                                                                                                                                                             if true,the Banner component have 1px outline                                                                                                                                                                                                             |
|     duration     | `String`  |                                                                                  `"500ms"`                                                                                   |                                                                                                                                                                                                              set the Banner component animation duration                                                                                                                                                                                                              |
|      effect      | `String`  |                                                                                  `"slide"`                                                                                   |                                                                                                                                                                                             set the Banner component animation effect:Temporarily only supported "slide"                                                                                                                                                                                              |
|     autoplay     | `Object`  |                                                             `{interval: "2000", apply: true, mode: "alternate"}`                                                             |                                                                                                                                                    Set whether to play automatically :{  `interval`:Set the motion interval,`apply`:Set whether to enable autoplay,`mode`:"loop"\|"alternate" Set the sport mode }                                                                                                                                                    |
|    pagination    | `Object`  | `apply: true,align: "center",clickable: true,activeClassName: "active",type: "square",indicator: {          bgColor: "rgb(76, 0, 255)", color: "black", showCounter: false}` | Set pagination style :{  `apply`:Whether to enable pagination,`align`:"start"\|"center"\|"end"  Set the pager position,`clickable`:"Set whether the pager can be clicked",`activeClassName`:set the active indicator className,`type`:"bar"\|"square"\|"circle" set the shape of indicators,`bgColor`:set the backgoundColor of indicators,`color`:set the inner counter fontColor when set `showCounter` value to `true`,`showCounter`:Whether to display the count} |
| show-navigation  | `Boolean` |                                                                                     true                                                                                     |                                                                                                                                                                                                                     Whether to display navigation                                                                                                                                                                                                                     |
| disable-on-hover | `Boolean` |                                                                                     true                                                                                     |                                                                                                                                                                                                      Whether to disable the banner when setting the mouse hover                                                                                                                                                                                                       |
# MoreDetail
If you want to learn more about `vue-banner-better`, you can visit our hosting project to [github](https://github.com/Vinsurs/vue-banner-better) 

You can also clone and execute the following command: 
```javascript
npm run start
```
 to run the project, and welcome to mention [issure](https://github.com/Vinsurs/vue-banner-better/issues)