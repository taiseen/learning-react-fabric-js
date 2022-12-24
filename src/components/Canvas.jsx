import { handleKeyDownEvent } from '../features/handleKeyDownEvent';
import { capsLockKeyEvent } from '../features/capsLockKeyEvent';
import { useCanvasContext } from '../context/CanvasContext';
import { handleSearchText } from '../features/search';
import { objectSelected } from '../features/utils';
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

    // call here | define it another file...
    handleSearchText(canvas, textSearching)

    window.addEventListener('keydown', (e) => handleKeyDownEvent(e, canvas));
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