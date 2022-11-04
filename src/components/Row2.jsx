import { useCanvasContext } from '../context/CanvasContext';
import { saveAsImg, saveCanvas } from '../features/save';
import { displayAllObj } from '../features/utils';
import { loadSVG } from '../features/loadSVG';


const Row2 = () => {

    const { canvas, colorList, setColorSelect } = useCanvasContext();

    return (
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

                <p onClick={() => displayAllObj(canvas)} className='underline cursor-pointer'>show all at console</p>

            </div>

            <div className='flex gap-2'>
                {/* <p
                    title='save at local-storage'
                    // onClick={() => getFilesInfoOfBoard(canvas)}
                    className='bg-gray-400 px-2 py-1 cursor-pointer duration-200 hover:text-gray-100'
                >
                    IMG Upload
                </p> */}

                <label
                    htmlFor='svg'
                    className='bg-gray-400 px-2 py-1 cursor-pointer duration-200 hover:text-gray-100'
                >SVG Upload
                </label>
                <input
                    id='svg'
                    type="file"
                    onChange={e => loadSVG(e, canvas)}
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
    )
}

export default Row2