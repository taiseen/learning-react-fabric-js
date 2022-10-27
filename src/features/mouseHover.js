export const mouseHoverIn = initCanvas => {

    initCanvas?.on("mouse:over", e => {

        if (e.target) {

            e.target.set('fill', 'green');
            initCanvas?.requestRenderAll();
        }
    })
}

// ################################################################################
// ################################################################################
// ################################################################################

export const mouseHoverOut = initCanvas => {

    initCanvas?.on("mouse:out", e => {

        if (e.target) {

            e.target.set('fill', 'blue');
            initCanvas?.requestRenderAll();
        }
    })
}