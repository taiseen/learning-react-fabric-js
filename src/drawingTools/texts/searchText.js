export const searchText = (canvas, textSearching) => {

    console.log(textSearching);

    const allObj = canvas.getObjects();

    const allTextObj = allObj.filter(obj => !!obj.text);


    const foundText = allTextObj.filter(obj => obj.text.includes(textSearching))

    console.log(foundText);

    if (foundText) {
        canvas.setActiveObject(...foundText);
        canvas?.requestRenderAll();
    }

}