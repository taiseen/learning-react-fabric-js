import { fabric } from 'fabric';

fabric.StickyNote = fabric.util.createClass(fabric.Object, {
    // Set the type of the object
    type: 'stickyNote',

    // Define the default values for the object's properties
    initialize: function (options) {
        options || (options = {});
        this.callSuper('initialize', options);
        this.set('text', options.text || 'This is a StickyNote');
        this.set('fontSize', options.fontSize || 20);
        this.set('fill', options.fill || 'yellow');
    },

    // Define the object's rendering method
    _render: function (ctx) {
        // Draw the note's background
        ctx.beginPath();
        ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.closePath();

        // Draw the note's text
        ctx.beginPath();
        ctx.font = this.fontSize + 'px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        ctx.fillText(this.text, 0, 0);
        ctx.closePath();
    }
});

// Register this custom StickyNote object class with Fabric.js
fabric.StickyNote.fromObject = function (object, callback) {
    return fabric.Object._fromObject('StickyNote', object, callback);
};

export default fabric.StickyNote;