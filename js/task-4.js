'use strict';
const countTotalSalary = function(employees) {
 
  // Write code under this line
  let sum = 0;
  for (let employer of Object.values(employees)) {
    sum += employer;
  }

  return sum;
}

// Объекты и ожидаемый результат
const developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
}
console.log(countTotalSalary(supports));
// 500

