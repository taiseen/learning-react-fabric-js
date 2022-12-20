import { fabric } from 'fabric';

// 📝📝📝
export const drawText = (canvas, colorSelect, userInputText) => {

    // Create a new Text instance

    // 🔴 can not edit this text on canvas
    const text = new fabric.Text(userInputText, {
      id: 'text',
      top: 150,
      left: 150,
      fill: colorSelect
    });

    // after click on icon, courser change... 
    canvas.set({ hoverCursor: "text" })

    // Render Text on Canvas
    canvas.add(text)
}