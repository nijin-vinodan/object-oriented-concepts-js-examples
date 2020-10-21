/**
 * Inheritance - Designing types around what they "are". (is A)
 * Composition - Designing types around what they "do". (has A)
 * Aggregation - Kind of composition
 
    Simple Rules between Composition & Aggregation
        A "owns" B = Composition : B has no meaning or purpose in the system without A
        A "uses" B = Aggregation : B exists independently (conceptually) from A

    Why prefer Composition over Inheritance (COI)?
        - In case a new member is created in the base class, and if the sub class doesn't need it then we are unwantedly extending.
 */

class Wheel {
    constructor(dimension) {
        this.dimension = dimension;
    }
}

class Engine {
    constructor(engine) {
        this.engine = engine;
    }

    start() {
        console.log(this.engine, "started");
    }

    stop() {
        console.log(this.engine, "stopped");
    }
}

// Creating a Aeroplane Class
// Here Aeroplane "uses" Engine and Wheel --> Aggregation
class Aeroplane {
    constructor(engine, wheelDimension) {
        this.wheel = new Wheel(wheelDimension);
        this.engine = new Engine(engine);
    }

    takeOff() {
        this.engine.start();
        // .....
    }

    land() {
        // .....
        this.engine.stop();
    }
}


/**

Try these!

const boeing = new Aeroplane("B-123", 55);              // Creates an Aeroplane object
boeing.takeOff();                                       // Aeroplane calls takeOff() which inturn calls Engine's start()
boeing.land();                                          // Aeroplane calls land() which inturn calls Engine's stop()

*/
