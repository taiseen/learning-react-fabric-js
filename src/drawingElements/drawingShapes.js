// import { useCanvasContext } from '../context/CanvasContext';
import { fabric } from 'fabric';

// we cant use context here... for global data sharing...
// const { canvas } = useCanvasContext();


// ⬜⬜⬜
export const drawRectangle = (canvas, colorSelect) => {

    const rect = new fabric.Rect({
        id: 'rectangle',
        top: (canvas.height - 50) * Math.random(),
        left: (canvas.width - 50) * Math.random(),
        width: 50,
        height: 50,
        fill: colorSelect,
        objectCaching: false,
        padding: 10,
        rx: 2, // radius
        ry: 2, // radius
    });

    // Render Rectangle on Canvas
    canvas.add(rect);
}


// ⚪⚪⚪
export const drawCircle = (canvas, colorSelect) => {

    const canvasCenter = canvas.getCenter();

    const circle = new fabric.Circle({
        id: 'circle',
        top: canvasCenter.top,
        left: canvasCenter.left,
        radius: 50,
        originX: 'center',
        originY: 'center',
        fill: colorSelect,
        objectCaching: false,
        padding: 10,
        cornerColor: colorSelect,
        cornerStyle: 'circle',
        cornerStrokeColor: colorSelect,
        borderDashArray: [5, 5],
        borderColor: '#000000',
        transparentCorners: true,
        lockRotation: true, // can not rotate 
        erasable: false, // can not erase it by erase tool-brush...
    });

    // Render Circle on Canvas
    canvas.add(circle);
}


// 🔺🔺🔺
export const drawTriangle = (canvas, colorSelect) => {

    const triangle = new fabric.Triangle({
        id: 'triangle',
        top: 150,
        left: 150,
        width: 100,
        height: 100,
        fill: colorSelect,
        objectCaching: false,
    });

    // Render Rectangle on Canvas
    canvas.add(triangle);
}


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


// 📝📝📝
export const drawText = (canvas, colorSelect, userInputText) => {

    // Create a new Text instance

    // const text = new fabric.Text(userInputText, {
    //   id: 'text',
    //   top: 150,
    //   left: 150,
    //   fill: colorSelect
    // });

    // after click on icon, courser change... 
    // canvas.set({ hoverCursor: "text" })

    const text = new fabric.IText(userInputText,
        {
            editable: true,
            left: (canvas.width - 50) * Math.random(),
            top: (canvas.height - 50) * Math.random(),
            fill: colorSelect,
            fontFamily: 'Arial',
            fontSize: 50,
            // fontWeight: 'bold',
            // fontStyle: 'italic'
        }
    );

    // Render Text on Canvas
    canvas.add(text)

    // canvas.setActiveObject(text)
    // text.enterEditing()
    // text.hiddenTextarea.focus()
}