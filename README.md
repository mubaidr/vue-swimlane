# vue-swimlane

An Text Swimlane plugin for Vue.js in alpha stage. :p Display a list of words as aan animated text Swimlane.

## Demo

[Demo and Playground](https://mubaidr.github.io/vue-swimlane)

## How to use

### Install

```npm install vue-swimlane --save```

### Use

```<vue-swimlane :words="wordsArray" :circular="circular" :rows="rows" :scale="scale" :transitionDuration="duration" :transitionDelay="delay" :transition="transition" :pauseOnHover="true"></vue-swimlane>```

## Options

Following options can be passed as props.

* <strong>words</strong> - string[] - <i>required</i>: Array of tags or words to be used on display.
* <strong>circular</strong> - bool (Default: false): If true, list starts from the top after completion.
* <strong>pauseOnHover</strong> - bool (Default: false): If true, animation will pause on mouse hover.
* <strong>rows</strong> - int (Default: 1): Number of rows always visible at a time.
* <strong>scale</strong> - float (Default: 1): Font size scaling relative to 16px.
* <strong>transitionDuration</strong> - float in ms (Default: 500): Animation duration for rows.
* <strong>transitionDelay</strong> - float in ms (Default: 250): Delays between each animation duration.
* <strong>transition</strong> - string (Default: ease-out): css transition name.
