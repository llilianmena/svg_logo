const inquirer =  require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

// Ensure the directory exists
const outputDir = "lib/svgs";
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true }); // Create directory if missing
}

const generateSVG = (text, textColor, shape) => {
    const shapeElement = shape.render();
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement}
        <text x="150" y="110" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;
};
console.log(inquirer)
inquirer.default.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter text for the logo (up to 3 characters):",
        validate: (input) => input.length <= 3 || "Text must be 3 characters or less",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter text color (color name or hex):",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: ["circle", "square", "triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter shape color (color name or hex):",
    },
]).then((answers) => {
    let shape;
    if (answers.shape === "circle") shape = new Circle(answers.shapeColor);
    else if (answers.shape === "square") shape = new Square(answers.shapeColor);
    else if (answers.shape === "triangle") shape = new Triangle(answers.shapeColor);
    const svgContent = generateSVG(answers.text, answers.textColor, shape);

    // Save to the svgs/ directory
    fs.writeFileSync(`${outputDir}/logo.svg`, svgContent);
    console.log(`✅ Generated ${outputDir}/logo.svg`);
});
