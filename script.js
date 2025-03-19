class Rectangle {
  // Constructor to initialize width and height
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  // Constructor for square takes side as a parameter
  constructor(side) {
    super(side, side);  // Call the parent constructor with side for both width and height
  }

  // Method to calculate perimeter for square
  getPerimeter() {
    return this.width * 4;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
