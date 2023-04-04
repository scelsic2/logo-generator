const { Triangle } = require("../lib/Shapes");

describe("triangle" , () => {
    it("Should return an equilateral triangle", () => {
        const shape = new Triangle (
            "<polygon ",
            ` points="50 200 150 0 250 200"`,
            `"CRA" </text>`,
            `fill="purple">`,
            `fill="pink" />`,
        )
        shape.render()

        expect(shape.points).toEqual(` points="50 200 150 0 250 200"`);
        expect(shape.shapeColor).toEqual(`fill="pink" />`)
    })
}
)
