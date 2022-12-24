import { delete_multiple_selected_objects, delete_single_selected_object } from '../features/delete';
// import { mouseHoverIn, mouseHoverOut } from '../features/mouseHover';
import { copy, past, selectAll } from '../features/copyPasteSelect';
import { useCanvasContext } from '../context/CanvasContext';
import { saveAsImg, saveCanvas } from '../features/save';
import { handleSearchText } from '../features/search';
import { objectSelected, tabKeyPressing } from '../features/utils';
import { capsLockKeyEvent } from '../features/capsLockKeyEvent';
import { zoom } from '../features/zoom';
import { useEffect } from 'react'
import { fabric } from 'fabric';
import Row1 from './Row1';
import Row2 from './Row2';


const Canvas = () => {

  const { fabricObj, canvas, setCanvas, textSearching, setObjectSelectForDelete } = useCanvasContext();


  useEffect(() => {

    // 1st init fabric canvas object... 
    const initCanvas = new fabric.Canvas(fabricObj?.current, {
      width: window.innerWidth - 20,
      height: window.innerHeight - 80,
      backgroundColor: '#FEFEFE',
      // selection: false, // disables drag-to-select
      // defaultCursor:
    });

    setCanvas(initCanvas);

    // preventing from crash, when data become ==> undefined
    try {
      // get old data from localStorage if have...
      const oldSavedCanvasLocally = localStorage.getItem('canvas') !== 'undefined'
        ? JSON.parse(localStorage.getItem('canvas'))
        : localStorage.removeItem('canvas');

      initCanvas?.loadFromJSON(oldSavedCanvasLocally);

    } catch (e) {
      console.log(e);
    }

    // these are mouse events...
    // mouseHoverIn(initCanvas);
    // mouseHoverOut(initCanvas);
    // objectSelected(initCanvas);


    initCanvas.on({
      'selection:created': objectSelected,
      'selection:updated': objectSelected,

      // 'selection:created': (o) => objectSelected(o, initCanvas),
      // 'selection:updated': (o) => objectSelected(o, initCanvas),

      // 'selection:updated': (o) => objectSelected(o, canvas, colorSelect),
      // 'object:selected': objectSelected(colorSelect),
    });


    initCanvas.on('mouse:down', _ => setObjectSelectForDelete(false));

    // only for zooming the canvas...
    initCanvas.on('mouse:wheel', object => zoom(object, initCanvas));


    return () => initCanvas.dispose();

  }, [fabricObj, setCanvas, setObjectSelectForDelete]);


  // all keyboard [ctrl+] related command code calling here... 
  // text searching also calling here...
  useEffect(() => {

    // user keyboard, key pressing for object interaction...
    const handleKeyDownEvent = e => {

      // delete ==> key press
      if (e.key === 'Delete' || e.key === 'Backspace') {

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
        if (e.key === 's') saveCanvas();

        // ctrl + i ==> key press | for save as image formate
        if (e.key === 'i') saveAsImg();
      }

    }

    // call here | define it another file...
    handleSearchText(canvas, textSearching)

    window.addEventListener('keydown', handleKeyDownEvent);
    // window.addEventListener('mousemove', getMousePointerLocation);

    return () => {
      window.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [canvas, textSearching])


  useEffect(() => {

    document.addEventListener('keydown', capsLockKeyEvent);

    return () => { document.removeEventListener('keydown', capsLockKeyEvent) };
  }, []);

  return (
    <div className=''>

      <div className='fixed top-0 left-0 right-0 p-4 z-30'>
        <Row1 />
        <Row2 />
      </div>

      {/* 🟡🟡🟡 main canvas for drawing board 🟡🟡🟡 */}
      <canvas id="canvas" ref={fabricObj} />

    </div>
  )
}

export default Canvas;