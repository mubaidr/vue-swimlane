# vue-swimlane
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

A Text Swimlane plugin for Vue.js to display a list of words as an animated text Swimlane.

[![NPM](https://nodei.co/npm/vue-swimlane.png?compact=true)](https://npmjs.org/package/vue-swimlane)

## Demo

[Demo and Playground](https://mubaidr.github.io/vue-swimlane)

## How to use

### Install using npm

`npm install vue-swimlane --save`

#### Plug in your main.js or where required

```javascript
import Vue from 'vue'
import VueSwimlane from 'vue-swimlane'

Vue.use(VueSwimlane)
```

### use CDN

```html
<script src="https://unpkg.com/vue-swimlane/dist/vue-swimlane.min.js"></script>
```

### Markup

`<vue-swimlane :words="['Some', 'Keywords', 'Array']"></vue-swimlane>`

## Options

Following options can be passed as props.

- **words** - string[] - _required_: Array of tags or words to be used on display.
- **continous** - bool (Default: false): If true, list continues forward, repeating the list. (Bugged, animation not working)
- **circular** - bool (Default: false): If true, list starts from the top after completion.
- **pauseOnHover** - bool (Default: false): If true, animation will pause on mouse hover.
- **rows** - int (Default: 1): Number of rows always visible at a time.
- **scale** - float (Default: 1): Font size scaling relative to 16px.
- **transitionDuration** - float in ms (Default: 500): Animation duration for rows.
- **transitionDelay** - float in ms (Default: 250): Delays between each animation duration.
- **transition** - string (Default: ease-out): css transition name.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://www.linkedin.com/in/jacob-k-hassel/"><img src="https://avatars2.githubusercontent.com/u/7563237?v=4" width="100px;" alt="Jake"/><br /><sub><b>Jake</b></sub></a><br /><a href="https://github.com/mubaidr/vue-swimlane/commits?author=shadskii" title="Code">💻</a> <a href="https://github.com/mubaidr/vue-swimlane/commits?author=shadskii" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!