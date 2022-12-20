import { fabric } from 'fabric';

// 🖌🖌🖌
export const drawingBrush = (canvas, colorSelect) => {

    // fabric.PencilBrush.prototype.globalCompositeOperation = "source-over";

    // SprayBrush
    // CircleBrush
    // PencilBrush
    // PatternBrush

    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.color = colorSelect;
    canvas.freeDrawingBrush.width = 5;
    canvas.isDrawingMode = true; // very very important...

    // canvas.on('mouse:move', (object) => {
    //   canvas.setCursor('grab');
    //   canvas.renderAll();
    //   const drawLine = new fabric.Point(object.e.movementX, object.e.movementY);
    //   canvas.relativePan(drawLine);
    // });

    canvas.on('mouse:up', () => canvas.isDrawingMode = false);
}