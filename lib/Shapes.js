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

class Shape {
    constructor (shapeName, fill) {
        this.shapeName = shapeName;
        this.fill = fill;
    }
}

class Circle extends Shape {
    constructor (shapeName, cx, cy, r, fill) {
        super(shapeName, fill);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }
    print = () => { return `<${this.shapeName} cx="${this.cx}" cy="${this.cy}" r="${this.r}" width="${this.width}" height="${this.height}" fill="${this.fill}" />` }
}

class Square extends Shape {
    constructor (shapeName, x, y, width, height, fill) {
        super(shapeName, fill);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    print = () => { return `<${this.shapeName} x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" />` }
}

class Triangle extends Shape {
    constructor (shapeName, points, fill) {
        super(shapeName, fill);
        this.points = points;
    }
    print = () => { return `<${this.shapeName} points="${this.points}" fill="${this.fill}" />` }
}

// if (data.list === "circle") {

// }

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}