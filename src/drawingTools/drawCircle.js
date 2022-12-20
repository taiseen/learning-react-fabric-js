import { fabric } from 'fabric';

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