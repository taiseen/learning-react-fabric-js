import { fabric } from 'fabric';


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
