# vue-swimlane

An Text Swimlane plugin for Vue.js in alpha stage. :p

## Demo

[Demo and Playground](https://mubaidr.github.io/vue-swimlane)

## How to use

Easy peasy

```<vue-swimlane :words="textArray" :circular="options.circular" :rows="options.rows" :scale="options.scale" :animationDuration="options.animationDuration" :delay="options.delay"></vue-swimlane>```

## Options

Following options can be passed as props.

* words - string[]: Array of tags or words to be used on display.
* rows - int: Number of rows always visible at a time.
* scale - float: Set size for the display container.
* animationDuration - float in ms: Animation duration for rows.
* delay - float in ms: Delays between each animation duration.
* circular - boolean: If false, animation will start from top after completion.
