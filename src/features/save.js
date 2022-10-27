// canvas drawing - save as image & download it...
export const saveAsImg = canvas => {

    const ext = "png";
    const base64 = canvas.toDataURL({
        format: ext,
        enableRetinaScaling: true
    });

    const link = document.createElement("a");
    link.href = base64;
    link.download = `${Date(Date.now()).slice(0, 24)}.${ext}`;
    link.click();
}

// ################################################################################
// ################################################################################
// ################################################################################

// save into local storage
export const saveCanvas = canvas => {

    const json = canvas.toJSON();
    localStorage.setItem('canvas', JSON.stringify(json));
}