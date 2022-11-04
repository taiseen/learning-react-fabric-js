import { fabric } from 'fabric';

export const loadSVG = (e, canvas) => {

    var file = e.target.files[0];
    var reader = new FileReader();

    // only svg file rendering...
    if (file.type.includes('svg')) {
        reader.onload = svgFile => {
            add_only_SVG_to_canvas(svgFile.target.result, canvas)
        }
    } else {
        console.log(file)
    }

    reader.readAsDataURL(file);
}


const add_only_SVG_to_canvas = (svgFile, canvas) => {

    // let hen = 'http://fabricjs.com/assets/4.svg';
    // let girl = 'http://fabricjs.com/assets/5.svg'; // 🆗
    // let art = 'http://fabricjs.com/assets/6.svg';
    // let butterfly = 'http://fabricjs.com/assets/7.svg';
    // let tree = 'http://fabricjs.com/assets/8.svg';
    // let tatooFace = 'http://fabricjs.com/assets/10.svg';
    // let dropLine = 'http://fabricjs.com/assets/12.svg'; // 🆗


    fabric.loadSVGFromURL(svgFile, function (objects, options) {

        var svgData = fabric.util.groupSVGElements(objects, options);

        // screen position 
        svgData.top = 100;
        svgData.left = 250;

        // svg colors change...
        // if its a only path object 

        svgData.fill = 'orange';
        svgData.stroke = 'green';


        // if its a group object 
        if (svgData && svgData._objects) {
            for (var i = 0; i < svgData._objects.length; i++) {
                svgData._objects[i].set({
                    fill: 'orange',
                    stroke: 'green',
                });
            }
        }


        // svg border + corner styling...
        svgData.cornerStyle = 'circle';
        svgData.cornerStrokeColor = 'orange';
        svgData.borderDashArray = [5, 5];
        svgData.borderColor = 'green';

        canvas.add(svgData);
    });
}