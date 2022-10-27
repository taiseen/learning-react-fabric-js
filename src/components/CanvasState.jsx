import { delete_all_object_from_canvas, delete_multiple_selected_objects, delete_single_selected_object } from '../features/delete';
import { drawCircle, drawingBrush, drawRectangle, drawText, drawTriangle } from '../drawingElements/drawingShapes';
import { Rectangle, Circle, Triangle, Brush, Eraser, Text } from './../assets';
// import { mouseHoverIn, mouseHoverOut } from '../features/mouseHover';
import { copy, past, selectAll } from '../features/copyPasteSelect';
import { saveAsImg, saveCanvas } from '../features/save';
import { handleSearchText } from '../features/search';
import { useEffect, useRef, useState } from 'react'
import { zoom } from '../features/zoom';
import { fabric } from 'fabric';



const CanvasState = () => {

  // const { canvas, setCanvas } = useCanvasContext();

  const fabricObj = useRef(null);
  const [canvas, setCanvas] = useState({});
  // const [svgLoad, setSvgLoad] = useState([]);
  const [userInputText, setUserInputText] = useState('');
  const [textSearching, setTextSearching] = useState('');
  const [colorSelect, setColorSelect] = useState('blue');
  const [objectSelectForDelete, setObjectSelectForDelete] = useState(false);
  const colorList = ['red', 'green', 'blue', 'gray', 'tomato', 'orange']


  useEffect(() => {

    // 1st init fabric canvas object... 
    const initCanvas = new fabric.Canvas(fabricObj?.current, {
      width: 1000,
      height: 650,
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
    });


    initCanvas.on('mouse:down', _ => setObjectSelectForDelete(false));

    // only for zooming the canvas...
    initCanvas.on('mouse:wheel', object => zoom(object, initCanvas));


    return () => initCanvas.dispose();

  }, [fabricObj, setCanvas, objectSelectForDelete]);


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

      // ctrl + c ==> key press | for copy
      if (e.key === 'c') copy(canvas);

      // ctrl + v ==> key press | for past
      if (e.key === 'v') past(canvas);

      // ctrl + a ==> key press | for selecting all
      if (e.key === 'a') selectAll(canvas);

      // ctrl + s ==> key press | for save canvas as JSON format to load next time
      if (e.key === 's') saveCanvas();

      // ctrl + s ==> key press | for save as image formate
      if (e.key === 'i') saveAsImg();

    }

    handleSearchText(canvas, textSearching)

    window.addEventListener('keydown', handleKeyDownEvent);

    return () => {
      window.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [canvas, textSearching])


  const objectSelected = o => {

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
  const displayAllObj = _ => {

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

  const eraseDrawing = _ => {
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

  const loadSVG = e => {
    // setSvgLoad(e.target.files[0])
    const files = e.target.files
    const data = new FormData();
    data.append('svg', files[0])
    console.log(data)
    let img = 'http://fabricjs.com/assets/1.svg';
    console.log(img)

    fabric.loadSVGFromURL(img, function (objects, options) {
      var svgData = fabric.util.groupSVGElements(objects, options);

      svgData.top = 100;
      svgData.left = 250;
      // svgData.fill = 'red';

      canvas.add(svgData);
    });
  }


  return (
    <div>

      <div className='flex gap-4 items-center'>
        <Rectangle
          className='ml-1 cursor-pointer duration-200 hover:text-red-500'
          onClick={() => drawRectangle(canvas, colorSelect)}
        />
        <Circle
          className='cursor-pointer duration-200 hover:text-red-500'
          onClick={() => drawCircle(canvas, colorSelect)}
        />
        <Triangle
          className='cursor-pointer duration-200 hover:text-red-500'
          onClick={() => drawTriangle(canvas, colorSelect)}
        />
        <Brush title='Brush'
          className='cursor-pointer duration-200 hover:text-red-500'
          onClick={() => drawingBrush(canvas, colorSelect)}
        />
        <Eraser
          className='cursor-pointer duration-200 hover:text-red-500'
          onClick={eraseDrawing}
        />
        <Text
          className='cursor-pointer duration-200 hover:text-red-500'
          onClick={() => drawText(canvas, colorSelect, userInputText)}
        />

        {/* ✋✋✋ type & add this typing text into canvas ✋✋✋ */}
        <input
          type="text"
          value={userInputText}
          placeholder='input text...'
          className='px-2 py-1 outline-none'
          onChange={e => setUserInputText(e.target.value)}
          // by pressing enter key, draw this text element + clear this input fields
          onKeyDown={e => e.key === 'Enter' && [drawText(canvas, colorSelect, userInputText), setUserInputText('')]}
        />

        <div className='ml-auto space-x-4'>

          {/* 🔎🔎🔎 search typing text from canvas 🔎🔎🔎 */}
          <input
            type="text"
            value={textSearching}
            onChange={e => setTextSearching(e.target.value)}
            className='px-2 py-1 outline-none'
            placeholder='text searching by typing...'
            // by pressing enter key, search this text + clear this input fields
            onKeyDown={e => e.key === 'Enter' && [drawText(canvas, colorSelect, userInputText), setTextSearching('')]}
          />

          <button
            className={`px-2 py-1 rounded-sm ${objectSelectForDelete ? 'bg-red-400 ' : 'bg-gray-400 '}`}
            onClick={() => delete_single_selected_object(canvas)}
          >
            Delete it
          </button>

          <button
            className='px-2 py-1 bg-gray-500 hover:bg-red-500 duration-200 rounded-sm text-white'
            onClick={() => delete_all_object_from_canvas(canvas)}
          >
            Clear Canvas
          </button>
        </div>

      </div>


      <div className=' flex justify-between items-center'>
        <div className='flex items-center gap-4 my-2'>
          <div className='flex gap-2 my-2'>
            {
              // color display at ui + its according click functionality
              colorList.map(color =>
                <div
                  title={color}
                  key={color}
                  onClick={() => setColorSelect(color)}
                  style={{ backgroundColor: color }}
                  className='w-6 h-6 rounded-full cursor-pointer hover:opacity-60 duration-200'>
                </div>
              )
            }
          </div>

          <p onClick={displayAllObj} className='underline cursor-pointer'>show all at console</p>

        </div>

        <div className='flex gap-2'>
          <label
            htmlFor='svg'
            className='bg-gray-400 px-2 py-1 cursor-pointer duration-200 hover:text-gray-100'
          >SVG Upload
          </label>
          <input
            id='svg'
            type="file"
            onChange={loadSVG}
            style={{ display: 'none' }}
          />

          <p
            title='save at local-storage'
            onClick={() => saveCanvas(canvas)}
            className='bg-gray-400 px-2 py-1 cursor-pointer duration-200 hover:text-gray-100'
          >
            save canvas
          </p>

          <p
            title='save as image'
            onClick={() => saveAsImg(canvas)}
            className='bg-gray-400 px-2 py-1 cursor-pointer duration-200 hover:text-gray-100'
          >
            save as img
          </p>

        </div>
      </div>


      {/* 🟡🟡🟡 main canvas for drawing board 🟡🟡🟡 */}
      <canvas id="canvas" ref={fabricObj} />

    </div>
  )
}

export default CanvasState;