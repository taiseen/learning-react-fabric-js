import { useEffect, useRef, useState } from 'react'
import { fabric } from 'fabric';


const CanvasState = () => {

  const fabricObj = useRef(null);
  const [canvas, setCanvas] = useState({});
  const [userInputText, setUserInputText] = useState('');
  const [colorSelect, setColorSelect] = useState('blue');
  const colorList = ['red', 'green', 'blue', 'gray', 'tomato', 'orange']


  useEffect(() => {

    const initCanvas = new fabric.Canvas(fabricObj.current, {
      width: 1000,
      height: 600,
      backgroundColor: '#FEFEFE',
    });

    setCanvas(initCanvas);

    // mouseHoverIn(initCanvas);
    // mouseHoverOut(initCanvas);
    // objectSelected(initCanvas);

    initCanvas.on({
      'selection:updated': objectSelected,
      'selection:created': objectSelected
    });

    return () => initCanvas.dispose();

  }, [fabricObj, setCanvas]);



  const mouseHoverIn = (initCanvas) => {
    initCanvas.on("mouse:over", (e) => {
      if (e.target) {
        e.target.set('fill', 'green');
        initCanvas.requestRenderAll();
        // objSelected = e.target
      }
    })
  }

  const mouseHoverOut = (initCanvas) => {
    initCanvas.on("mouse:out", (e) => {
      if (e.target) {
        e.target.set('fill', 'blue');
        initCanvas.requestRenderAll();
        // objSelected = e.target
      }
    })
  }


  const objectSelected = o => {

    // if value is undefined, exit form this function... 
    if (o?.e === undefined || o?.selected[0] === undefined) return;

    const selectedObj = o?.selected[0];
    console.log(selectedObj)

    // selectedObj.set('fill', colorSelect);
    // canvas?.renderAll();

    // console.log(e.target.fill)
    // console.log(e.e)
    // console.log(e.selected)

    // e.selected[0].fill = colorSelect;

    // if (selectedObject) {
    //   console.log(selectedObject);
    //   setObjectSelectForDelete(true);
    // } else {
    //   setObjectSelectForDelete(false);
    // }


  }

  const drawing = _ => {

    // canvas .isDrawingMode : true,

  }


  // ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
  const drawRectangle = _ => {

    const rect = new fabric.Rect({
      id: 'rectangle',
      top: 50,
      left: 50,
      width: 50,
      height: 50,
      fill: colorSelect,
      objectCaching: false,
      padding: 10,
    });

    // Render Rectangle on Canvas
    canvas.add(rect);
  }


  // ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪
  const drawCircle = _ => {

    const canvasCenter = canvas.getCenter();

    const circle = new fabric.Circle({
      id: 'circle',
      top: canvasCenter.top,
      left: canvasCenter.left,
      radius: 50,
      originX: 'center',
      originY: 'center',
      fill: colorSelect,
      cornerColor: colorSelect,
      objectCaching: false,
      padding: 10,
    });

    // Render Circle on Canvas
    canvas.add(circle);
  }


  // 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
  const drawTriangle = _ => {

    const triangle = new fabric.Triangle({
      id: 'triangle',
      top: 150,
      left: 150,
      width: 100,
      height: 100,
      fill: colorSelect,
      objectCaching: false,
    });

    // Render Rectangle on Canvas
    canvas.add(triangle);

  }


  // 📝📝📝📝📝📝📝📝📝📝📝
  const drawText = () => {

    // Create a new Text instance

    // const text = new fabric.Text(userInputText, {
    //   id: 'text',
    //   top: 150,
    //   left: 150,
    //   fill: colorSelect ? colorSelect : 'blue'
    // });

    const text = new fabric.IText(userInputText,
      {
        editable: true,
        left: 200,
        top: 200,
        fontSize: 60,
        fill: colorSelect ? colorSelect : 'blue'
      }
    );

    // Render Text on Canvas
    canvas.add(text)
  }



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



  // delete selected one...
  // 🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯
  const delete_selected_object = _ => {

    // loop through all objects, that present in canvas
    canvas.getObjects().forEach(obj => {
      // console.log(objectSelectForDelete);
      // if selected object is == equal to == this object ==> delete it from canvas...
      if (canvas.getActiveObject() === obj) {
        // setObjectSelectForDelete(true);
        canvas.remove(obj)
      }
    })

  }


  // delete all...
  // 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
  const delete_all_object_from_canvas = _ => {
    canvas.getObjects().forEach(obj => canvas.remove(obj))
  }



  return (
    <div>

      <div className='flex gap-4 items-center'>
        <button className='px-2 py-1 bg-green-300 rounded-sm' onClick={drawRectangle}>Rectangle</button>
        <button className='px-2 py-1 bg-green-300 rounded-sm' onClick={drawCircle}>Circle</button>
        <button className='px-2 py-1 bg-green-300 rounded-sm' onClick={drawTriangle}>Triangle</button>
        <button className='px-2 py-1 bg-green-300 rounded-sm' onClick={drawing}>Drawing</button>

        <input
          className='px-2 py-1 outline-none'
          placeholder='example text...'
          type="text"
          value={userInputText}
          onChange={e => setUserInputText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && [drawText(), setUserInputText('')]}
        />
        {/* <button className='px-2 py-1 bg-green-300 rounded-sm' onClick={() => textDraw()}>Test</button> */}

        <p onClick={displayAllObj} className='underline'>show all at console</p>

        <div className='ml-auto space-x-4'>
          {/* <button className={`px-2 py-1 rounded-sm ${objectSelectForDelete ? 'bg-red-400 ' : 'bg-gray-400 '}`} onClick={() => delete_selected_object()}>Delete it</button> */}
          <button className={`px-2 py-1 rounded-sm bg-red-400`} onClick={() => delete_selected_object()}>Delete it</button>
          <button className='px-2 py-1 bg-gray-500 hover:bg-red-500 duration-200 rounded-sm text-white' onClick={() => delete_all_object_from_canvas()}>Delete all</button>
        </div>

      </div>

      <div className='flex gap-2 my-2'>
        {
          colorList.map(color =>
            <div
              key={color}
              onClick={() => setColorSelect(color)}
              style={{ backgroundColor: color }}
              className='w-6 h-6 rounded-full cursor-pointer hover:opacity-60 duration-200'>
            </div>
          )
        }
      </div>

      <canvas id="canvas" ref={fabricObj} />
    </div>

  )
}

export default CanvasState