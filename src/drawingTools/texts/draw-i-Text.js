import { fabric } from 'fabric';
// 📝📝📝
export const draw_i_Text = (canvas, colorSelect, userInputText) => {

    // Create a new Text instance

    // 🔴 can not edit this text on canvas
    // const text = new fabric.Text(userInputText, {
    //   id: 'text',
    //   top: 150,
    //   left: 150,
    //   fill: colorSelect
    // });

    // after click on icon, courser change... 
    // canvas.set({ hoverCursor: "text" })

    // 🔴 can edit this text on canvas
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
}