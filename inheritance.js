/** 
 * OOPS Concept: Inheritance
 * Inheritance can be defined as the process where one class/function acquires the properties (methods and fields) of another. 
 * With the use of inheritance the information is made manageable in a hierarchical order.
 * The class which inherits the properties of other is known as subclass (derived class, child class).
 * The class whose properties are inherited is known as superclass (base class, parent class).
*/

// -------------------------- Example 1: Inheritance with Class --------------------------

class Rectangle {
    // Constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter method to get Area
    get area() {
        return this.width * this.height;
    }
}

// Inheritance
class Square extends Rectangle {
    constructor(side, color) {
        super(side, side);                          // Calls the parent constructor
        this.color = color
    }
}


/**
Try these!

const sq = new Square(10, 'red');                   // Works. Creates a square of 10 by 10 with red color.
sq.area;                                            // Works. Computes area
const rect = new Rect(10, 5);                       // Works. Creates a rectangle of 10 by 5
*/


// -------------------------- Example 2: Inheritance with Function --------------------------
function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.area = function () {
        return this.width * this.height;
    }
}

function Square(side, color) {
    Rectangle.call(this, side, side);               // Inheritance  // Composition
    this.color = color;
}

/**
Try these!

const sq = new Square(10, 'red');                   // Works. Creates a square of 10 by 10 with red color.
sq.area();                                          // Works. Computes area
const rect = new Rect(10, 5);                       // Works. Creates a rectangle of 10 by 5
*/