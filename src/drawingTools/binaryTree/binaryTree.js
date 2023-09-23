import { fabric } from 'fabric';

const binaryTree = (canvas) => {

    // const jsonData = {
    //     n: [
    //         [1, 'Search for Destination', '🔍', 'start'],
    //         [2, 'Choose Destination', '📍', 'action'],
    //         [3, 'Book Flight', '✈️', 'action'],
    //         [4, 'Book Hotel', '🏨', 'action'],
    //         [5, 'Book Activities', '🎢', 'action'],
    //         [6, 'Confirm Bookings', '✅', 'action'],
    //         [7, 'Enjoy Trip', '🤩', 'end'],
    //     ],
    //     x: [
    //         [1, 2],
    //         [2, 3],
    //         [2, 4],
    //         [2, 5],
    //         [3, 6],
    //         [4, 6],
    //         [5, 6],
    //         [6, 7],
    //     ],
    // };

    // let nodeData = jsonData.n;
    // let edgeData = jsonData.x;
    // let nodes = [];

    // nodeData.forEach(node => {
    //     let textBox = new fabric.Textbox(node[1] + ' ' + node[2], {
    //         width: 200,
    //         fontSize: 18
    //     });
    //     nodes.push(textBox);
    // });

    // let pyramidSpacing = 180;
    // let pyramidHeight = 80;

    // nodes.forEach((node, index) => {
    //     node.left = index * pyramidSpacing + 50;
    //     node.top = canvas.height - pyramidHeight * (Math.floor(index / 2) + 1);
    //     canvas.add(node);
    // });


    // edgeData.forEach(edge => {
    //     let line = new fabric.Line([nodes[edge[0] - 1].left, nodes[edge[0] - 1].top, nodes[edge[1] - 1].left, nodes[edge[1] - 1].top], {
    //         stroke: 'black',
    //         strokeWidth: 2
    //     });
    //     canvas.add(line);
    // });

    // canvas.renderAll();


    // var n = jsonData.n.length;
    // var output = "";
    // for (var i = 0; i < n; i++) {
    //     var myspace = "";

    //     for (let s = 0; s < (n - i - 1); s++) {
    //         myspace += " ";
    //     }
    //     for (var j = 1; j <= 2 * i + 1; j++) {
    //         output += "*";

    //     }
    //     console.log(myspace + output);
    //     output = "";
    // }


    // Create the nodes
    // var rootNode = new fabric.Circle({
    //     radius: 30,
    //     fill: 'green',
    //     left: 200,
    //     top: 200
    // });

    // var leftChild = new fabric.Circle({
    //     radius: 30,
    //     fill: 'red',
    //     left: 100,
    //     top: 300
    // });
    // var rightChild = new fabric.Circle({
    //     radius: 30,
    //     fill: 'blue',
    //     left: 300,
    //     top: 300
    // });

    // // Create the edge connectors
    // var connector1 = new fabric.Line([rootNode.left + 10, rootNode.top + 80, leftChild.left + 80, leftChild.top + 10], {
    //     stroke: 'black',
    //     strokeWidth: 3
    // });
    // var connector2 = new fabric.Line([rootNode.left + 84, rootNode.top + 84, rightChild.left + 14, rightChild.top + 14], {
    //     stroke: 'orange',
    //     strokeWidth: 3,
    // });

    // // Add the nodes and connectors to the canvas
    // canvas.add(leftChild, rightChild, rootNode, connector1, connector2);

    // Define the text array
    var textArray = ['root', 'child1', 'child2', 'grandchild1', 'grandchild2', 'grandchild3'];

    // Create an array to store the nodes
    var nodes = [];

    // Create an array to store the connectors
    var connectors = [];

    // Set the starting position for the first node
    var x = 100;
    var y = 100;

    // Iterate through the text array
    for (var i = 0; i < textArray.length; i++) {
        // Create a node for each item in the array
        var node = new fabric.Circle({
            radius: 50,
            fill: 'red',
            left: x,
            top: y,
            // text: textArray[i]
        });

        // Add the node to the array
        nodes.push(node);

        // Increment the position for the next node
        // Calculate the position for the next node
        if (i % 2 === 0) {
            // Position the next node to the right of the current node
            x += 120;
            
        } else {
            // Position the next node to the left of the current node
            x -= 120;
            y -= 120;
        }
        y += 120;

    }

    // Connect the nodes using the connectors array
    for (var i = 0; i < nodes.length - 1; i++) {
        var connector = new fabric.Line([nodes[i].left + nodes[i].radius, nodes[i].top, nodes[i + 1].left, nodes[i + 1].top], {
            stroke: 'black',
            strokeWidth: 3
        });
        connectors.push(connector);
    }

    // Add the nodes and connectors to the canvas
    canvas.add(...nodes, ...connectors);

}


export default binaryTree


const demo = (canvas) => {


    let rootNode = new fabric.Circle({
        radius: 20,
        fill: 'red',
        left: 50,
        top: 50
    });

    let childNode1 = new fabric.Circle({
        radius: 20,
        fill: 'blue',
        left: 100,
        top: 100
    });

    let childNode2 = new fabric.Circle({
        radius: 20,
        fill: 'blue',
        left: 150,
        top: 100
    });

    let grandchildNode1 = new fabric.Circle({
        radius: 20,
        fill: 'green',
        left: 75,
        top: 150
    });

    let grandchildNode2 = new fabric.Circle({
        radius: 20,
        fill: 'green',
        left: 125,
        top: 150
    });

    let grandchildNode3 = new fabric.Circle({
        radius: 20,
        fill: 'green',
        left: 175,
        top: 150
    });

    canvas.add(rootNode);
    canvas.add(childNode1);
    canvas.add(childNode2);
    canvas.add(grandchildNode1);
    canvas.add(grandchildNode2);
    canvas.add(grandchildNode3);


    let connector1 = new fabric.Line([rootNode.left, rootNode.top, childNode1.left, childNode1.top], {
        stroke: 'black',
        strokeWidth: 2
    });

    let connector2 = new fabric.Line([rootNode.left, rootNode.top, childNode2.left, childNode2.top], {
        stroke: 'black',
        strokeWidth: 2
    });

    let connector3 = new fabric.Line([childNode1.left, childNode1.top, grandchildNode1.left, grandchildNode1.top], {
        stroke: 'black',
        strokeWidth: 2
    });

    let connector4 = new fabric.Line([childNode1.left, childNode1.top, grandchildNode2.left, grandchildNode2.top], {
        stroke: 'black',
        strokeWidth: 2
    });

    let connector5 = new fabric.Line([childNode2.left, childNode2.top, grandchildNode3.left, grandchildNode3.top], {
        stroke: 'black',
        strokeWidth: 2
    });

    canvas.add(connector1);
    canvas.add(connector2);
    canvas.add(connector3);
    canvas.add(connector4);
    canvas.add(connector5);

    rootNode.left = canvas.width / 2;
    rootNode.top = 50;

    childNode1.left = rootNode.left - 50;
    childNode1.top = rootNode.top + 50;

    childNode2.left = rootNode.left + 50;
    childNode2.top = rootNode.top + 50;

    grandchildNode1.left = childNode1.left - 25;
    grandchildNode1.top = childNode1.top + 50;

    grandchildNode2.left = childNode1.left;
    grandchildNode2.top = childNode1.top + 50;

    grandchildNode3.left = childNode2.left + 25;
    grandchildNode3.top = childNode2.top + 50;

    canvas.renderAll();
}