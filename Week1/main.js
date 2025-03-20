
const {distance} = require("./mathHelpers");
//const mathHelpers = require("./mathHelpers")
//module.export = {distance};
//mathHelpers.distance(); //No need to export square, and squareRoot

//How can we export a function without its functions inside
//- Closers: Known as 'backpack' implicitely adds the functions needed for the exported function to work inside this 'backpack'
const process = require('node:process');
const fs = require('node:fs')
const userInput = process.argv.slice(2);
// const [x1,y1,x2,y2] = process.argv
// to skip values in array uses ,, so [,, x1, y2....]

function processInput() {
    const numbers = userInput.map(Number);
    const folderName = './dataPoints';
    const filePath = folderName + '/points.txt';
    const content = numbers.join('\n');
    const [x_2,x_1,y_2,y_1] = numbers; // We assign each element in the array a given name, this allows to call it in our distance fn
    const calculatedDistance = distance(x_2, x_1, y_2, y_1);
    const appendContent = `\nThe distance between your two points: (${x_1}, ${y_1}), (${x_2}, ${y_2}) is ${calculatedDistance}\n`;
    


    fs.mkdir(folderName, {recursive: true}, (err) => {
        if (err) {
            throw err('Folder has already been made');
            
        }
        fs.writeFile(filePath, content, (err) => {
            if (err) throw err('File has already been made');
            console.log('Content Saved')
        
        fs.appendFile(filePath, appendContent, (err) => {
            if (err) throw err;
            console.log('Distance has been added.');
        })
    });

    });
        

        
  
        
    
    }

    


processInput();    


            
      
      



//process.argv to get the arguments passed in from the terminal

//have a function called processInput which takes what the user typed in the terminal. It should take the users input and write to a file called points.txt
//should be saved in a folder called dataPoints, this folder does not exist so you need to create it using fs.mkdir before writing.

//after creating the folder and writing the users given points, show a message in the console stating content has been saved

//After showing the message you should use fs.appendFile to add the distance calculation to the end of the file. Like so: 
// The distance between your two points: (10,5), (2,3) is <distance here>