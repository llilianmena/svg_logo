const { Circle, Square, Triangle } = require("./shapes");

test("Circle renders correctly", () => {
    const shape = new Circle("red");
    expect(shape.render()).toContain('fill="red"');
});

test("Square renders correctly", () => {
    const shape = new Square("blue");
    expect(shape.render()).toContain('fill="blue"');
});

test("Triangle renders correctly", () => {
    const shape = new Triangle("green");
    expect(shape.render()).toContain('fill="green"');
});
