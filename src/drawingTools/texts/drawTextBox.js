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
    // const typingText1111 = `1. Population: The number of people living in a city.
    // 2. Economy: The financial and commercial activities of a city.
    // 3. Infrastructure: The physical structures and services of a city, such as roads, bridges, public transportation, and utilities.
    // 4. Education: The quality of schools, universities, and other educational institutions in a city.
    // 5. Culture: The art, music, literature, and other forms of expression in a city.
    // 6. Safety: The level of crime and other public safety issues in a city.
    // 7. Environment: The air and water quality, green spaces, and other environmental factors in a city.
    // 8. Housing: The availability and affordability of housing in a city.
    // 9. Employment: The number of jobs and the types of industries in a city.
    // 10. Healthcare: The quality of medical care and other health services in a city.
    // 11. Recreation: The parks, sports facilities, and other recreational activities in a city.
    // 12. Transportation: The ease of getting around a city, including public transportation, roads, and bike lanes.
    // 13. Government: The local government and its policies in a city.
    // 14. Quality of Life: The overall satisfaction of living in a city, including factors such as cost of living, amenities, and community.`;

    // const typingText44 = `1. Identify the problem: Clearly define the problem you are trying to solve and the objectives you are trying to achieve.

    // 2. Gather data: Collect relevant data from internal and external sources.
    
    // 3. Analyze data: Analyze the data to identify patterns, trends, and relationships.
    
    // 4. Develop insights: Develop insights from the data analysis and identify potential solutions.
    
    // 5. Test solutions: Test the potential solutions to determine their effectiveness.
    
    // 6. Implement solutions: Implement the most effective solutions and monitor their performance.
    
    // 07. Evaluate results: Evaluate the results of the solutions and make adjustments as needed.`

    const typingText = `1. Just launched our new #AWS cloud platform! Ready to take your business to the next level. #CloudComputing
    2. We're excited to announce our new #AWS cloud storage solution. Get ready to store and access your data with ease. #CloudStorage
    3. Our #AWS cloud platform is now live! Get ready to experience the power of cloud computing. #CloudComputing
    4. We just launched our new #AWS cloud database solution. Get ready to store and access your data with ease. #CloudDatabase
    5. We're proud to announce our new #AWS cloud security solution. Get ready to keep your data safe and secure. #CloudSecurity`

    const textBox = new fabric.Textbox(typingText, textStyle);

    // finding the numbers...
    const numbers = textBox.text.match(/(\d+\.)/g);
    const heading = textBox.text.match(/\d+\. (.*?):/g);
    const hashtags = [...textBox.text.matchAll(/#(\w+)/g)];
    const textStyling = heading || numbers

    if (textStyling) {
        // Iterate over the array of matches
        for (var i = 0; i < textStyling.length; i++) {
            // Get the start & end index of the current match
            var startIndex = textBox.text.indexOf(textStyling[i]);
            var endIndex = startIndex + textStyling[i].length;
            console.log(startIndex)

            // Update the font weight & color of the matching characters...
            textBox.setSelectionStyles({ fontWeight: 'bold', fill: 'tomato' }, startIndex, endIndex);;
        }
    } else {
        textBox.set({ fontWeight: 'bold' });
    }



   
    const counts = {};
    hashtags.forEach((match) => {
      const hashtag = match[0];
      if (!counts[hashtag]) {
        counts[hashtag] = { count: 0, indices: [] };
      }
      counts[hashtag].count += 1;
      counts[hashtag].indices.push({ start: match.index, end: match.index + match[0].length });
    });
    
    Object.entries(counts).forEach(([hashtag, data]) => {
      data.indices.forEach((index) => {
        textBox.setSelectionStyles({ fill: 'orange' }, index.start, index.end);
      });
    });
    

    canvas.add(textBox);
    canvas.renderAll();

    // canvas.add(textBox);
    // canvas.add(textBox).setActiveObject(textBox);
    // canvas.setActiveObject(textBox);
    // const activeObject = canvas.getActiveObject();
}







