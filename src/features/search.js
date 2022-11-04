// user search by typing at input field...
export const handleSearchText = (canvas, textSearching) => {

    // async work | execute at background 
    // setTextSearching(e.target.value)
    
    // console.log('#################',textSearching)
    // console.log(canvas)

    // sync work | execute it right now...
    if (Object.keys(canvas).length !== 0) {

        canvas?.getObjects()?.forEach(obj => {

            if (obj?.text?.includes(textSearching)) {

                // change border color + control false...
                obj?.set({
                    borderColor: '#FF5F5F',
                    hasControls: false
                })

                // select Fabric.js object programmatically
                canvas?.setActiveObject(obj)

                // ?.text.replaceAll(textSearching, `<mark>${textSearching}</mark>`)
                // console.log(obj?.text)
            }
        })
    }

}
