const sideA = parseInt(prompt('Enter  the side length A'), 10);
const sideB = parseInt(prompt('Enter  the side length B'), 10);
const sideC = parseInt(prompt('Enter  the side length C'), 10);

if (sideA === 0 || sideB === 0 || sideC === 0) {
  alert('A triangle must have 3 sides with a positive definite length');
} else if (sideA + sideB < sideC || 
  sideA + sideC < sideB || sideB + sideC < sideA) {
  console.log('Triangle doesn’t exist');
} else if (sideA === sideB && sideA === sideC) {
  console.log('Equilateral triangle');
} else if (sideA === sideB || sideA === sideC || sideB === sideC) {
  console.log('Isosceles triangle');
} else {
  console.log('Scalene triangle');
}
