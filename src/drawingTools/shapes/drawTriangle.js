import { fabric } from 'fabric';

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