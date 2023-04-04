const { Circle } = require("../lib/Shapes");

describe("circle" , () => {
    it("Should return a circle", () => {
        const shape = new Circle (
            "<circle ",
            ` cx="150" `,
            `cy="100" `,
            `r="80" `,
            `CRA </text>`,
            `fill="yellow">`,
            `fill="orange" />`,
        )
        shape.render()

        expect(shape.r).toEqual(`r="80" `);
        expect(shape.shapeColor).toEqual(`fill="orange" />`)
    })
}
)