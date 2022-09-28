> 27 - Sep - 2022

## Fabric Js Learning...

### Tailwind setup

 * yarn add -D tailwindcss postcss autoprefixer
 * npx tailwindcss init -p
 * tailwind.config 

### Fabric Js 

 * yarn add fabric  | Object model for HTML5 canvas, and SVG-to-canvas parser. Backed by jsdom and node-canvas

 

```
Developers describe Fabric.js as "The easiest way to work with HTML5 canvas". 
It provides interactive object model on top of canvas element. 
Fabric also has SVG-to-canvas (and canvas-to-SVG) parser. 
Using Fabric.js, you can create and populate objects on canvas, objects like simple geometrical shapes.
```

```
Things to keep in mind:
When inspecting the canvas, it’s important to note that there are two layers that exist 
1) upper canvas & 
2) lower canvas

The upper canvas is utilized by the Fabric.js API for handling events, groupings, etc. 
while we’re actually working on the lower canvas layer & The lower canvas contains the id we defined
```


* `canvas.clear()` will clear all objects on canvas
* `canvas.dispose()` will clear all objects on canvas & remove all listeners