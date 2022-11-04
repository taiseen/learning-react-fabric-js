import { fabric } from 'fabric';


export const objectSelected = o => {

    // if value is undefined, exit form this function... 
    if (o?.e === undefined || o?.selected[0] === undefined) return;

    const selectedObj = o?.selected[0];

    selectedObj.set({
        // hasControls: false, // rotation + scale up down | OFF

        // border + corner styling...
        cornerStyle: 'circle',
        cornerStrokeColor: 'orange',
        borderDashArray: [5, 5],
        borderColor: 'blue',

        // fill: colorSelect,
    })

    console.log(selectedObj.type)
}


// print all object at Console
export const displayAllObj = canvas => {

    canvas.getObjects().forEach(obj => {

        // console.log(obj.aCoords.tl,)
        console.log(obj);

        if (canvas.getActiveObject() === obj) {
            console.log('Selected Object ====> ', obj)
            // obj.hasBorders = false
            // obj.hasControls = false
            // obj.selectable = false
            // obj.lockRotation  = true
            // obj.lockScalingX = obj.lockScalingY = true;
            // obj.lockMovementX = true
            // obj.lockMovementY = true
            // obj.hoverCursor = 'pointer';
        }

    });
}


export const eraseDrawing = canvas => {
    console.log('eraseing,,,,')

    //  same as `PencilBrush`
    canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
    canvas.isDrawingMode = true;
    //  optional
    canvas.freeDrawingBrush.width = 10;

    //  undo erasing
    canvas.freeDrawingBrush.inverted = true;


    // = fabric.util.createClass(fabric.BaseBrush, {})

}
