// this is the object that owns the method in a method invocation

const calc = {
    num: 0,
    increment() {
      console.log(this === calc); // => true
      this.num += 1;
      return this.num;
    }
  };
  
  // method invocation. this is calc
  calc.increment(); // => 1
  calc.increment(); // => 2



const myDog = Object.create({
    sayName() {
        console.log(this === myDog); // => true
        return this.name;
    }
});

myDog.name = 'Milo';
// method invocation. this is myDog
myDog.sayName(); // => 'Milo'


function Pet(type, legs) {
    this.type = type;
    this.legs = legs;

    this.logInfo = function () {
        console.log(this === myCat); // => false
        console.log(`The ${this.type} has ${this.legs} legs`);
    }

    this.arrowLoginfo = () =>{
        console.log(`this is arrow`)
        console.log(this === myCat); // => false
        console.log(`The ${this.type} has ${this.legs} legs`);

    }
}
  
  const myCat = new Pet('Cat', 4);
  // logs "The undefined has undefined legs"
  // or throws a TypeError in strict mode
setTimeout(myCat.logInfo, 1000);

setTimeout(
    myCat.arrowLoginfo
, 1000);

setTimeout(myCat.logInfo);

// is equivalent to:

const extractedLogInfo = myCat.logInfo;
setTimeout(extractedLogInfo);

// and this become a function invocation