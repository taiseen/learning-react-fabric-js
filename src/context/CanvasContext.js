import { createContext, useContext, useState } from "react";


// 1) context creation... 
const Canvas = createContext();


// 2) context provide to others... 
export const CanvasContext = ({ children }) => {

    const [canvas, setCanvas] = useState({});
    const [userInputText, setUserInputText] = useState(''); // user text input for paint in canvas 
    const [colorSelect, setColorSelect] = useState('blue'); // select color for shapes...
    const [textSearching, setTextSearching] = useState(''); // text search by user typing input 
    const [objectSelectForDelete, setObjectSelectForDelete] = useState(false);

    const colorList = ['red', 'green', 'blue', 'gray', 'tomato', 'orange']

    const values = {
        canvas, setCanvas,
        userInputText, setUserInputText,
        colorSelect, setColorSelect,
        textSearching, setTextSearching,
        objectSelectForDelete, setObjectSelectForDelete,
        colorList,
    }

    return (
        <Canvas.Provider value={values}>
            {
                children
            }
        </Canvas.Provider>
    )
}


// 3) context provided data consume by others...
export const useCanvasContext = () => useContext(Canvas);


// 1st - go to index.js file & wrap <App /> by this <CanvasContext> ... <CanvasContext/>
// 2nd - where need this data + function... just call this useCanvasContext()
// & destructure data from it.