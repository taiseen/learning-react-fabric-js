import { fabric } from 'fabric';

export const objectSelected = o => {

    // if value is undefined, exit form this function... 
    if (o?.e === undefined || o?.selected[0] === undefined) return;

    const selectedObj = o?.selected[0];
    selectedObj.set({
        borderColor: 'gray',
        hasControls: true,
        // fill: colorSelect,
    })

    console.log(selectedObj.type)

    return selectedObj;
    // if (selectedObj.type) {
    //   setObjectSelectForDelete(true)
    // console.log('inside ==> ', objectSelectForDelete);
    // console.log('=================================');
    // }


    // selectedObj.set('fill', colorSelect);
    // canvas?.renderAll();

    // console.log(e.target.fill)
    // console.log(e.e)
    // console.log(e.selected)

    // e.selected[0].fill = colorSelect;

    // if (selectedObject) {
    // console.log(selectedObject);
    //   setObjectSelectForDelete(true);
    // } else {
    //   setObjectSelectForDelete(false);
    // }


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

export const loadSVG = (e, canvas) => {
    console.log(canvas);
    const files = e.target.files

    const uploadedFile = new FormData();
    uploadedFile.append('svg', files[0])

    console.log(uploadedFile)

    let imgURL = 'http://fabricjs.com/assets/1.svg';
    console.log(imgURL)

    fabric.loadSVGFromURL(imgURL, function (objects, options) {
        var svgData = fabric.util.groupSVGElements(objects, options);

        svgData.top = 100;
        svgData.left = 250;
        // svgData.fill = 'red';

        canvas.add(svgData);
    });
}