class Shape {
    constructor (shapeName) {
        this.shapeName = shapeName;
    }
}

class Circle extends Shape {
    constructor (shapeName, cx, cy, r) {
        super(shapeName);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    printShape() {
        return this.shapeName + this.cx + this.cy + this.r
    }
}

class Square extends Shape {
    constructor (shapeName, x, y, width, height) {
        super(shapeName);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    printShape() {
        return this.shapeName + this.x + this.y + this.width + this.height
    }
}

class Triangle extends Shape {
    constructor (shapeName, points) {
        super(shapeName);
        this.points = points;
    }

    printShape() {
        return this.shapeName + this.points
    }
}

let circleShape = new Circle (
    "circle ",
    ` cx="150" `,
    `cy="100" `,
    `r="80"`,
)

let squareShape = new Square (
    "rect",
    ` x="50" `,
    ` y="0" `,
    ` width="200" `,
    ` height="200"`,
)

let triangleShape = new Triangle (
    "polygon ",
    // ` points="0 100 50 0 100 100"`
    // ` points="0 200 100 0 200 200"`
    ` points="50 200 150 0 250 200"`
)


module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
    circleShape,
    squareShape,
    triangleShape
}

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
