import { fabric } from 'fabric';

export const copy = canvas => {

    let activeObj = canvas?.getActiveObject();

    activeObj?.clone(function (cloned) {
        canvas._clipboard = cloned;
        console.log(canvas)
        console.log('copy ###########################################')
    });

}

// ################################################################################
// ################################################################################
// ################################################################################

export const past = canvas => {

    let activeObj = canvas?.getActiveObject();

    if (!activeObj) {
        return;
    }

    console.log(activeObj)
    console.log('past ###########################################')
    // let pointerLeft = pointer.x;
    // let pointerTop = pointer.y;
}

// ################################################################################
// ################################################################################
// ################################################################################

export const selectAll = canvas => {

    let selectAllObject = canvas?.getObjects()

    // deselect currently active or selected objects from the canvas.
    canvas?.discardActiveObject();

    const selectedObjects = new fabric.ActiveSelection(selectAllObject, { canvas: canvas, });
    canvas?.setActiveObject(selectedObjects);
    canvas?.requestRenderAll();
}