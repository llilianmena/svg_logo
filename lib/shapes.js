class Shape {
    constructor(incomingBackgroundColor) {
        this.colorScopedtoThisClassOnly = incomingBackgroundColor;
    }
    render() {
        throw new Error("Render method must be implemented in subclass");
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.colorScopedtoThisClassOnly}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.colorScopedtoThisClassOnly}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 250,200 50,200" fill="${this.colorScopedtoThisClassOnly}" />`;
    }
}

module.exports = { Circle, Square, Triangle };
