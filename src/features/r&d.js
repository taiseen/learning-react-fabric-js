
// R & D
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

export const getFilesInfoOfBoard = canvas => {

    const canvasObjects = canvas.getObjects();
    // console.log(canvasObjects[0])

    let fileFiltered = [];

    for (const key in canvasObjects[0]) {

        if (canvasObjects[0].hasOwnProperty(key)) {

            console.log(key)

            const each_obj = canvasObjects[0][key];

            if (each_obj?.file_info) {
                
                fileFiltered.push(each_obj?.file_info);
            }
        }
    }

    return fileFiltered;
};

// R & D
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨

var canvas = new fabric.Canvas('c');
fabric.Image.fromURL("https://picsum.photos/200/300/?random", function(img) {
  img.set({
    id: 'changeimg',
    align: 'mid', //added
    originX: 'center', //added
    originY: 'center', //added,
    scaleX: 200 / img.width,
    scaleY: 200 / img.height,
  });
  canvas.centerObject(img);
  canvas.add(img);
  image = img;
})
fabric.Image.fromURL("https://picsum.photos/200/250/?random", function(img) {
  img.set({
    id: 'backgroundimg',
    angle: 0,
    scaleX: canvas.width / img.width,
    scaleY: canvas.height / img.height,
  });
  //canvas.centerObject(image1);
  canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
})

//On Image Browse and Set on Canvas
document.getElementById('uploadedImg').onchange = function handleImage(e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function(file) {
    addImage(file.target.result);
  }
  reader.readAsDataURL(file);
}

function addImage(imgLink) {
  fabric.Image.fromURL(imgLink, function(img) {
    var objects = canvas.getObjects();
    for (var i = 0, l = objects.length; i < l; i++) {
      if (objects[i].id == 'changeimg') {
        imageEl = objects[i];
        break
      }
    }
    if (imageEl) {
      imageEl.setSrc(img.getSrc(), function() {
        canvas.renderAll()
        imageEl.setCoords();
      },{
        left: 50,
        top: 150,
        scaleX: 150 / img.width,
        scaleY: 200 / img.height,
      })
    }
  });
}