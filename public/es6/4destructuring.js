const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
console.log(vehicles, car, truck, suv);

console.log("-----------------------------------------------------------------------------");

// 배열 구조 분해
const vehicles_ = ['mustang', 'f-150', 'expedition'];
const [car_, truck_, suv_] = vehicles_;
console.log(vehicles_, car_, truck_, suv_);

// 저장이 필요 없는 요소는 제외 (건너뛰기)
console.log("-----------------------------------------------------------------------------");
const [car__,, suv__] = vehicles_;
console.log(vehicles_, car__, suv__);

console.log("-----------------------------------------------------------------------------");


const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  let result = myVehicle(vehicleOne);
  console.log(result)
  // 예전 방식
  function myVehicle(vehicle) {
    return   'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
  }

console.log("-----------------------------------------------------------------------------");

  const vehicleOne_ = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }

  // 새로운 방식
  myVehicle_(vehicleOne_);
  // Notice that the object properties do not have to be declared in a specific order.
  function myVehicle_({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    console.log("message : ", message);
  }


console.log("-----------------------------------------------------------------------------");
//   We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again /
//  destructure the items needed from the nested object:
  const vehicleOne__ = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  myVehicle__(vehicleOne__)
  // { } 양끝에 공백이 필요한지 확인해야함.
  function myVehicle__({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
    console.log("message :::: ", message);
  }

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}  //배열 리턴

const [ add,subtract, multiply, divide] = calculate(4, 7);
  console.log(add)
  console.log(subtract)
  console.log(multiply)
  console.log(divide)