import { delete_multiple_selected_objects, delete_single_selected_object } from "./delete";
import { copy, past, selectAll } from "./copyPasteSelect";
import { saveAsImg, saveCanvas } from "./save";
import { tabKeyPressing } from "./utils";

// user keyboard, key pressing for object interaction...
export const handleKeyDownEvent = (e, canvas) => {

    // delete ==> key press
    if (e.key === 'Delete' || e.key === 'Backspace') {
        try {
            // just get selected object from canvas...
            const single_object_selected = canvas.getActiveObject();
            
            // for singe selected object delete operation
            if (single_object_selected) {
                delete_single_selected_object(canvas);
            }

            // for multiple selected object delete operation
            if (single_object_selected?._objects?.length) {
                delete_multiple_selected_objects(canvas, single_object_selected?._objects)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // tab key press event
    if (e.key === 'Tab') {
        e.preventDefault(); // for this statement, tab command not get out from the canvas window
        tabKeyPressing(canvas, true);
    }

    // shift + tab key press event
    if (e.shiftKey && e.key === 'Tab') {
        e.preventDefault();

        tabKeyPressing(canvas, false);
    }


    // this is responsible for checking ctrl key press
    // if we not check it, then only single press of c,v,a,s,i is going to working... which we don't want  
    if (e.ctrlKey || e.metaKey) {

        // ctrl + c ==> key press | for copy
        if (e.key === 'c') copy(canvas);

        // ctrl + v ==> key press | for past
        if (e.key === 'v') past(canvas);

        // ctrl + a ==> key press | for selecting all
        if (e.key === 'a') selectAll(canvas);

        // ctrl + s ==> key press | for save canvas as JSON format to load next time
        if (e.key === 's') {
            e.preventDefault(); // to prevent the browser's default save as dialog from being displayed
            saveCanvas(canvas);
        }

        // ctrl + i ==> key press | for save as image formate
        if (e.key === 'i') saveAsImg();
    }

}