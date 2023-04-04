const { Square } = require("../lib/Shapes");

describe("square" , () => {
    it("Should return a square", () => {
        const shape = new Square (
            "<rect",
            ` x="50" `,
            ` y="0" `,
            ` width="200" `,
            ` height="200"`,
            `CRA </text>`,
            `fill="blue">`,
            `fill="green" />`,
        )
        shape.render()

        expect(shape.width).toEqual(` width="200" `);
        expect(shape.height).toEqual(` height="200"`);
        expect(shape.shapeColor).toEqual(`fill="green" />`)
    })
}
)