import { useEffect, useRef, useState } from 'react'
import { fabric } from 'fabric';

const CanvasLine = () => {

    const fabricObj = useRef(null);
    const [canvas, setCanvas] = useState({});

    // let line;
    const [line, setLine] = useState({})
    const [mouseDown, setMouseDown] = useState(false)
    const [addLineBtnClick, setAddLineBtnClick] = useState(false)


    useEffect(() => {

        const initCanvas = new fabric.Canvas(fabricObj.current, {
            width: window.innerWidth,     // width control
            height: window.innerHeight,    // height control
            backgroundColor: '#FEFEFE',
        });

        setCanvas(initCanvas);

        return () => initCanvas.dispose();

    }, [fabricObj, setCanvas]);





    const addLine = _ => {
        // only 1 click apply...
        if (addLineBtnClick === false) {

            // remaining click don't work...
            setAddLineBtnClick(true)

            // fabric canvas have their own event listeners 
            // their own way of writing event listeners...
            canvas.on('mouse:down', startAddLine);
            canvas.on('mouse:move', startDrawingLine);
            canvas.on('mouse:up', stopDrawingLine);

            canvas.selection = false;
            canvas.hoverCursor = 'auto'

            objectSelectable('added-line', false);
        }

    }

    const disableLine = _ => {

        // the way to disable Fabric event listener...
        canvas.off('mouse:down', startAddLine);
        canvas.off('mouse:move', startDrawingLine);
        canvas.off('mouse:up', stopDrawingLine);

        objectSelectable('added-line', true);

        // open click btn for, next click...
        setAddLineBtnClick(false)

    }


    const objectSelectable = (id, status) => {

        // get all the object, that are present inside Fabric Canvas
        canvas.getObjects().forEach(obj => {

            if (obj.id === id) {
                obj.set({
                    selectable: status
                });

                // when hover on these object, pointer change
                if (status) {
                    canvas.hoverCursor = 'all-scroll'
                } else {
                    canvas.hoverCursor = 'auto'
                }
            };
        });
    }

    const startAddLine = o => {

        setMouseDown(true)

        // how can i tell the fabric canvas, that my cursor is over here...
        let pointer = canvas.getPointer(o.e); // 1st get the mouse pointer -> x , y position number

        // x1 + y1 == where is the mouse pointer right now
        // x2 + y2 == where is the mouse pointer going to stop
        const newLine = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
            id: 'added-line',
            stroke: 'red',
            strokeWidth: 5,
            selectable: false,
        });
        // console.log(line);
        // canvas.renderAll();

        setLine(newLine)
        // canvas.renderAll();

        canvas.add(line);               // Just draw 2 point, start & end
        canvas.requestRenderAll();
    }

    const startDrawingLine = o => {

        if (mouseDown) {
            let pointer = canvas.getPointer(o.e);

            // drawing line...
            line.set({
                x2: pointer.x,
                y2: pointer.y,
            });

            canvas.requestRenderAll();
        }
    }

    const stopDrawingLine = _ => {
        // Fabric know where the line is, to select again...
        line.setCoords();

        setMouseDown(false);
    }



    return (
        <div className='h-screen'>

            <div className="">
                <button className="btn" id="addLine" onClick={addLine}>Add Line</button>
                <button className="btn" id="disableLine" onClick={disableLine}>Disable Line</button>
            </div>

            <canvas id="canvas" ref={fabricObj} />
        </div>

    )

}

export default CanvasLine