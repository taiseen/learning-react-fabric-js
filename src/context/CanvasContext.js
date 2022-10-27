import { createContext, useContext, useState } from "react";


// 1) context creation... 
const Canvas = createContext();


// 2) context provide to others... 
export const CanvasContext = ({ children }) => {

    const [canvas, setCanvas] = useState({});

    return (
        <Canvas.Provider value={{ canvas, setCanvas }}>
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