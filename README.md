> 27 - Sep - 2022

## Fabric Js Learning...

### Tailwind setup

 * yarn add -D tailwindcss postcss autoprefixer
 * npx tailwindcss init -p
 * tailwind.config 

### Fabric Js 

 * yarn add fabric
 * yarn add react-hot-toast



## Features:-

* 💾 save data at local-storage + ⌨ key operation
* 🆗 preventing app crash, when save data become undefined...
* 🔄 load data from local-storage...
* ❌ single object delete operation + ⌨ key operation
* ⛔ multiple object delete operation + ⌨ key operation
* 📸 save as image, whole canvas drawing + ⌨ key operation
* 🅰 select all object that draw in canvas + ⌨ key operation
* 🔎 canvas zoom functionality 
* ⌨ "tab" key press event to navigate inside canvas object for selection... 
* ⌨ Check that Caps Lock is on
* 🖱️ Get the mouse position
* 📝 StickyNote demo testing add...


<br/>

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


* `canvas.clear()` will clear all objects on canvas.
* `canvas.dispose()` will clear all objects on canvas & remove all listeners.

## File & Folder hierarchy

```
src
├── assets
|   ├── Brush.jsx
|   ├── Circle.jsx
|   ├── Eraser.jsx
|   ├── index.js
|   ├── Rectangle.jsx
|   ├── Text.jsx
|   └── Triangle.jsx
|
├── components
|   ├── Canvas.jsx
|   ├── CanvasLine.jsx
|   ├── Row1.jsx
|   └── Row2.jsx
|
├── context
|   └── CanvasContext.js
|
├── drawingTools
|   ├── draw-i-Text.js
|   ├── drawCircle.js
|   ├── drawingBrush.js
|   ├── drawRectangle.js
|   ├── drawText.js
|   ├── drawTextBox.js
|   └── drawTriangle.js
|
├── features
|   ├── copyPasteSelect.js
|   ├── delete.js
|   ├── loadSVG.js
|   ├── mouseHover.js
|   ├── r&d.js
|   ├── save.js
|   ├── search.js
|   ├── utils.js
|   └── zoom.js
|
├── style
|   └── index.css
|
├── App.jsx
└── index.js
```