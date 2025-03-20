# Command-Line SVG Logo Generator

## Description
This application allows users to generate a simple logo in SVG format by providing text, colors, and a shape through command-line prompts. The output file will display the custom logo in a 300x200 pixel canvas.

## Acceptance Criteria

- **GIVEN** a command-line application that accepts user input
  - **WHEN** I am prompted for text
    - **THEN** I can enter up to three characters
  
  - **WHEN** I am prompted for the text color
    - **THEN** I can enter a color keyword (e.g., `red`, `blue`, `green`) **OR** a hexadecimal number (e.g., `#FF5733`)

  - **WHEN** I am prompted for a shape
    - **THEN** I am presented with a list of shapes to choose from: **circle**, **triangle**, and **square**

  - **WHEN** I am prompted for the shape's color
    - **THEN** I can enter a color keyword **OR** a hexadecimal number

  - **WHEN** I have entered input for all the prompts
    - **THEN** an SVG file is created named `logo.svg`
    - **AND** the output text **"Generated logo.svg"** is printed in the command line

  - **WHEN** I open the `logo.svg` file in a browser
    - **THEN** I am shown a **300x200** pixel image that matches the criteria I entered

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd svg-logo-generator
   ```
3. Install necessary packages (if applicable):
   ```bash
   npm install   # For Node.js-based apps
   ```

## Usage
1. Run the application:
   node index.js   # If using Node.js
2. Follow the prompts to enter text, colors, and shape.
3. Check the generated `logo.svg` file in your directory.
4. Open the file in a browser to view your logo.

## Example
? Enter up to three characters: ABC
? Enter text color
? Choose a shape (circle, triangle, square): circle
? Enter shape color (keyword or hex): b
Generated logo.svg

### Result
- A `logo.svg` file is created
- It contains the text "ABC" in `#FF5733` color inside a **green circle**
