import { drawCircle, drawingBrush, drawRectangle, drawText, drawTriangle } from '../drawingElements/drawingShapes';
import { delete_all_object_from_canvas, delete_single_selected_object } from '../features/delete';
import { Rectangle, Circle, Triangle, Brush, Eraser, Text } from './../assets';
import { useCanvasContext } from '../context/CanvasContext';


const Row1 = () => {

    const { canvas, userInputText, setUserInputText, colorSelect, textSearching, setTextSearching } = useCanvasContext();

    return (
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
                // onClick={eraseDrawing}
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
                    className={`px-2 py-1 rounded-sm ${false ? 'bg-red-400 ' : 'bg-gray-400 '}`}
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
    )
}

export default Row1