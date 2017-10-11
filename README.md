# vue-swimlane

An Text Swimlane plugin for Vue.js in alpha stage. :p Display a list of words as aan animated text Swimlane.

[![NPM](https://nodei.co/npm/vue-swimlane.png?compact=true)](https://npmjs.org/package/vue-swimlane)

## Demo

[Demo and Playground](https://mubaidr.github.io/vue-swimlane)

## How to use

### Install

```npm install vue-swimlane --save```

### Plug in your main.js or where required

```import 'vue-swimlane'```

### Use

```<vue-swimlane :words="wordsArray" :circular="circular" :rows="rows" :scale="scale" :transitionDuration="duration" :transitionDelay="delay" :transition="transition" :pauseOnHover="true"></vue-swimlane>```

## Options

Following options can be passed as props.

* **words** - string[] - *required*: Array of tags or words to be used on display.
* **circular** - bool (Default: false): If true, list starts from the top after completion.
* **pauseOnHover** - bool (Default: false): If true, animation will pause on mouse hover.
* **rows** - int (Default: 1): Number of rows always visible at a time.
* **scale** - float (Default: 1): Font size scaling relative to 16px.
* **transitionDuration** - float in ms (Default: 500): Animation duration for rows.
* **transitionDelay** - float in ms (Default: 250): Delays between each animation duration.
* **transition** - string (Default: ease-out): css transition name.
