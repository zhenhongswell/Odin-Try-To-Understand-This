function hello(name) {
    console.log(this)
    return 'Hello ' + name + '!';
  }
  
// Function invocation
// this in a function invocation
// this is the global object in a function invocation.
const message = hello('World');


// this in a function invocation, strict mode
// this is undefined in a function invocation in strict mode

function multiply(a, b) {
    'use strict'; // enable the strict mode
    console.log(this === undefined); // => true
    return a * b;
  }
  // multiply() function invocation with strict mode enabled
  // this in multiply() is undefined
  multiply(2, 5); // => 10


const numbers = {
    numberA: 5,
    numberB: 10,
    
    sum: function(){
        // console.log(this === numbers); // => true
        console.log(this)
        function calculate() {
        // this is window or undefined in strict mode
            console.log(this === numbers); // => false
            return this.numberA + this.numberB;
        }

        const test = () => {
            console.log('test')
            console.log(this)
        }
        test()

        return calculate();
    }
};

function createObj(name) {
    this.name = name
    // method invocation
    this.test = function(){
        console.log(this);
        arrow = () => console.log(this)
        // arrow invocation
        arrow()
        
        normalFn = function(){
            console.log(this)
        }

        // function invocation
        normalFn()
    }


}

function createObj2(name){
    return this
}


const testObj_1 = new createObj('test')
testObj_1.test()
const testObj_2 = createObj2();



numbers.sum(); // => NaN or throws TypeError in strict mode