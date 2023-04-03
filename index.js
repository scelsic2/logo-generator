const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const fs = require("fs");
const shapeOptions = require("./lib/Shapes.js");
const generateUserLogo = require("./lib/generateLogo.js")

console.log("Respond to the prompts to generate your logo.")

const logoPrompts = [
    
    {type: "maxlength-input",
    name: "characters",
    message: "Enter up to 3 characters:",
    maxLength: 3,
    validate:(value) => {if (value){return true}else {return "You must enter up to 3 characters to continue."}},
    },

    {name: "textColor",
    message: "What color do you want your text to be? (Enter a color keyword or a hexadecimal number):",
    validate:(value) => {if (value){return true}else {return "You must enter a color keyword or a hexadecimal number to continue."}},
    },

    {type: "list",
    name: "shapes",
    message: "Select a shape for your logo:",
    choices: ["circle", "triangle", "square"],
    default: ["circle"],
    },

    {name: "shapeColor",
    message: "What color do you want your shape to be? (Enter a color keyword or a hexadecimal number):",
    validate:(value) => {if (value){return true}else {return "You must enter a color keyword or a hexadecimal number to continue."}},
    },
    
]

function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log (err);
        } else {
            console.log ("Generated logo.svg")
        }
    })
}

function init() {
    inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt)
    inquirer.prompt(logoPrompts)
    .then(function(userInput){
        console.log('user input to follow: ' )
        console.log(userInput);
        let shapeContent = "";

        if (userInput.shapes === "circle") {
            //return `<${shapeName} this.cx this.cy this.r ${shapeColor}>`
            shapeContent = shapeOptions.circleShape.printShape()          
        }
        else if (userInput.shapes === "square") {
            //return `<${shapeName} this.x this.y this.width this.height ${shapeColor}>`
            //shapeContent = shapeOptions.squareShape;
            shapeContent = shapeOptions.squareShape.printShape()
        }

        else if (userInput.shapes === "triangle") {
            //`<${shapeName} this.points ${shapeColor}>`
            shapeContent = shapeOptions.triangleShape.printShape()
        } 


        const logo = generateUserLogo.generateLogo(userInput, shapeContent);
        writeToFile("logo.svg", logo, (err) => {
            if (err) {
                return console.log (err);
            } else {
                console.log ("Generated logo.svg")
            }
        })

    })
}

init()

// --------------------SECOND ATTEMPT-------------------

// const shapeTypes = require("./lib/Shapes.js")

// https://www.youtube.com/watch?v=Cgner9r9t5Y

// function generateLogo ({characters, textColor, shapeOptions, shapeColor}, shapeContent) {
//     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><
//         ${shapeContent}
    

//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
        
//         /svg>`
// }


        // try {
        // writeToFile("index.html", generateLogo(userInput, shapeContent));
        // }
        // catch(e) {
        // }


// --------------------FIRST ATTEMPT--------------------
// https://www.youtube.com/watch?v=GJYMcLus3v0&t=25s
// class Svg {
//     constructor(){
//         this.textElement = "";
//         this.shapeElement = "";
//     }
//     render() {
//         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
//     }
//     setTextElement(text, color) {
//         this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${maxlength-input}</text>`
//     }
//     setShapeElement(shape) {
//         this.shapeElement = shape.render()
//     }
// }

// function writeToFile (fileName, data) {
//     console.log(, data);
//     fs.writeFile('index.html', , (err) => {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Your logo has been generated.")
//     })
    /*
    fs.writeFile(filename, data, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log("Your logo has been generated.")
    })
    */
// }