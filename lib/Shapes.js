userInput = require("../index.js")



class Shape {
    constructor (shapeName, characters, textColor, shapeColor) {
        this.shapeName = shapeName;
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.textInformation = `<text x="150" y="125" font-size="60" text-anchor="middle" `;
        this.svgHeader = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    }
}

class Circle extends Shape {
    constructor (shapeName, cx, cy, r, characters, textColor, shapeColor) {
        super(shapeName, characters, textColor, shapeColor);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    render() {
        return `${this.svgHeader} 
        ${this.shapeName} ${this.cx} ${this.cy} ${this.r} ${this.shapeColor}
        ${this.textInformation} ${this.textColor} ${this.characters}
        </svg>`;
    }
}

class Square extends Shape {
    constructor (shapeName, x, y, width, height, characters, textColor, shapeColor) {
        super(shapeName, characters, textColor, shapeColor);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render() {
        return `${this.svgHeader} 
        ${this.shapeName} ${this.x} ${this.y} ${this.width} ${this.height}+ ${this.shapeColor}
        ${this.textInformation} ${this.textColor} ${this.characters}
        </svg>`;
    }
}

class Triangle extends Shape {
    constructor (shapeName, points, characters, textColor, shapeColor) {
        super(shapeName, characters, textColor, shapeColor);

    }

    render() {
        return `${this.svgHeader} 
        ${this.shapeName} ${this.points} ${this.shapeColor}
        ${this.textInformation} ${this.textColor} ${this.characters}
        </svg>`;
    }
}


module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
    // circleShape,
    // squareShape,
    // triangleShape
}

// --------------------ATTEMPT THREE------------------

// let circleShape = new Circle (
//     "<circle ",
//     ` cx="150" `,
//     `cy="100" `,
//     `r="80" `,
//     `${characters} </text>`,
//     `fill="${textColor}">`,
//     `fill="${shapeColor}" />`,
//     `<text x="150" y="125" font-size="60" text-anchor="middle" ` 
// )

// let squareShape = new Square (
//     "<rect",
//     ` x="50" `,
//     ` y="0" `,
//     ` width="200" `,
//     ` height="200"`,
//     `${characters} </text>`,
//     `fill="${textColor}">`,
//     `fill="${shapeColor}" />`,
//     `<text x="150" y="125" font-size="60" text-anchor="middle" `
// )

// let triangleShape = new Triangle (
//     "<polygon ",
//     ` points="50 200 150 0 250 200"`,
//     `${characters} </text>`,
//     `fill="${textColor}">`,
//     `fill="${shapeColor}" />`,
//     `<text x="150" y="125" font-size="60" text-anchor="middle" `
// )

// --------------------ATTEMPT TWO--------------------
// https://www.youtube.com/watch?v=GJYMcLus3v0&t=25s
// class Shape {
//     shapeColor = '';
//     constructor() {
//         this.color=""
//     }
//     setColor(color) {
//         this.color=(color);
//     }
//     render() {
//         return this.text;
//     }
// }

// class Circle extends Shape {
//     render() {
//         return `<circle cx="150" cy="100" r="80" width="200" height="200" fill="${this.shapeColor}`
//     }
// }

// class Square extends Shape {
//     render() {
//         return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}`
//     }
// }

// class Triangle extends Shape {
//     render() {
//         return `<polygon points="0 100 50 0 100 100" fill="${this.shapeColor}`
//     }
// }

// const circleShape = new Circle ();
// const squareShape = new Square ();
// const triangleShape = new Triangle();

// module.exports = {
//     Circle,
//     Square,
//     Triangle
// }

// if (data.list === "circle") {

// }
