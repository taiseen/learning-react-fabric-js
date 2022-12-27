import StickyNote from '../fabricExtend/StickyNote'

export const drawStickyNote = (canvas) => {

    // Create a StickyNote object
    const stickyNote = new StickyNote({
        top: 100,
        left: 100,
        width: 300,
        height: 100,
        text: 'This is StickyNote...',
        fill: 'orange',
        fontSize: 20,
    });

    // Add the StickyNote to the canvas
    canvas.add(stickyNote);
}