/** 
 * OOPS Concept: Encapsulation
 * Closure is an example of encapsulation.
 * It encapsulates the body of code together within the lexical scope.
 * 
 * Whole Package of Data and Functions
*/

const enclosure = (function () {

    // Counter is PRIVATE and is enclosed within this function.
    let counter = 0;

    // This is PRIVATE
    function log(action) {
        console.log("Counter ", action)
    }

    // This is PUBLIC, as we are adding this function as a return value
    function increment() {
        counter += 1;
        log("incremented");
    }

    // This is PUBLIC, as we are adding this function as a return value
    function decrement() {
        counter += 1;
        log("decremented");
    }

    // This is PUBLIC and we are adding this function as a return value
    function getCounter() {
        return counter;
    }

    return {
        increment,
        decrement,
        getCounter
    }
})();


/**

Try these!

enclosure.counter                    // Throws an error. Private Variable.
enclosure.log("incremented")         // Throws an error. Private Function.
enclosure.increment()                // Works. increment is Public as we have returned the value.
enclosure.decrement()                // Works. decrement is Public as we have returned the value.
enclosure.getCounter()               // Works. getCounter is Public as we have returned the value.
 */