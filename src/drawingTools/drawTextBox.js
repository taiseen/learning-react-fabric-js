import { fabric } from 'fabric';

// 📝📝📝
export const drawTextBox = (canvas, colorSelect) => {

    const textStyle = {
        left: 200,
        top: 200,
        width: 680,
        fontSize: 24,
        fill: colorSelect,
        // fontWeight : 'bold',
        fontFamily: 'Helvetica',
        styles: {
            // first line of text i.e Test
            0: {
                //first letter of first line i.e T
                0: { fontFamily: 'Arial' },
                //second letter of first line i.e e
                1: { fontFamily: 'Impact' }
            },
        }
    }

    // const typingText1 = 'hello world';
    const typingText = '\n1. Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. \n2. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. \n\n3. The writer can use the paragraph as the first one of a short story and build upon it. \n\n4. A second option is to use the random paragraph somewhere in a short story they create.';

    const textBox = new fabric.Textbox(typingText, textStyle);

    // finding the numbers...
    const numbers = textBox.text.match(/\d\./g);

    // If there are no matches, return 0
    if (numbers) {
        // Iterate over the array of matches
        for (var i = 0; i < numbers.length; i++) {
            // Get the start & end index of the current match
            var startIndex = textBox.text.indexOf(numbers[i]);
            var endIndex = startIndex + numbers[i].length;
            
            // Update the font weight & color of the matching characters...
            textBox.setSelectionStyles({ fontWeight: 'bold', fill: 'tomato' }, startIndex, endIndex);;
        }
    } else {
        textBox.set({ fontWeight: 'bold', fill: 'orange' });
    }
    canvas.add(textBox);

    // canvas.add(textBox);
    // canvas.add(textBox).setActiveObject(textBox);
    // canvas.setActiveObject(textBox);
    // const activeObject = canvas.getActiveObject();
}