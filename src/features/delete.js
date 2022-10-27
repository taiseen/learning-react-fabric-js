// delete single selected object
export const delete_single_selected_object = canvas => {

    // loop through all objects, that present in canvas
    canvas.getObjects().forEach(obj => {

        // if selected object is == equal to == this object ==> delete it from canvas...
        if (canvas.getActiveObject() === obj) {
            canvas.remove(obj)
        }
    })
}

// ################################################################################
// ################################################################################
// ################################################################################

// delete multiple selected objects
export const delete_multiple_selected_objects = (canvas, multipleObject) => {

    // loop through all objects, that present in canvas
    // & delete OR remove it from canvas... 
    multipleObject.forEach(obj => canvas.remove(obj))

    // after deleting multiple objects...
    // clear selected border line also...
    canvas.discardActiveObject();
}

// ################################################################################
// ################################################################################
// ################################################################################

// delete all objects from canvas
export const delete_all_object_from_canvas = canvas => {
    canvas.getObjects().forEach(obj => canvas.remove(obj))

    // clear init canvas also...
    // canvas.clear();
}
