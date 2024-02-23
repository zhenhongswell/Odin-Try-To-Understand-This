// this is the newly created object in a constructor invocation
function Country(name, traveled) {
    this.name = name ? name : 'United Kingdom';
    this.traveled = Boolean(traveled); // transform to a boolean
    console.log(this)
}

Country.prototype.travel = function () {
    this.traveled = true;
    console.log(this)
    // return function(){
    //     this.traveled = true;
    //     console.log(this)
    // }//.bind(this)
};

// Constructor invocation
const france = new Country('France', false);
// Constructor invocation
const unitedKingdom = new Country;

france.travel(); // Travel to France
// test()


// Using a function invocation to create objects is a potential problem 
// (excluding factory pattern), because some constructors may omit 
// the logic to initialize the object when new keyword is missing.


function Vehicle(type, wheelsCount) {
    this.type = type;
    this.wheelsCount = wheelsCount;
    console.log(this)
    return this;
  }
  
  // Function invocation
  const car = Vehicle('Car', 4);
//  
  const Newcar = new Vehicle('Car', 4);
  car.type; // => 'Car'
  car.wheelsCount // => 4
  car === window // => true