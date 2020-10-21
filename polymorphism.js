/** 
 * OOPS Concept: Polymorphism
 * Polymorphism helps to design objects in a way that can share or override any behaviour with the specified provided objects.
 * Poly means "Many" and Morph means "Forms". i.e an object can take up many forms.
 * Takes advantages of inheritance
 
    In a strongly typed language, like Java, if Square and Circle are extending Shape, then we could create objects this way
    
    Shape s = new Square();
    Shape c = new Circle();

    Here s and c, automatically refers Square and Circle respectively -> Polymorphism
*/

class Shape {
    area() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

// Circle inherits Shape
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Square inherits Shape
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

const shapes = [new Square(4), new Circle(3)];

for (let shape of shapes) {
    shape.area();                               // Polymorphism. Shape automatically maps to area of square or circle.
}
