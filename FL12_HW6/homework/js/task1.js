const a = +prompt(`Please enter "a"`);
const b = +prompt(`Please enter "b"`);
const c = +prompt(`Please enter "c"`);

if (a && b && c !== NaN) {
  const D = Math.pow(b, 2) - (4 * a * c);
  if (D > 0) {
    const x1 = -b / (2 * a) - Math.sqrt(D) / (2 * a);
    const x2 = -b / (2 * a) + Math.sqrt(D) / (2 * a);
    console.log(`x1 = ${x1}, x2 = ${x2}`);
  } else {
    console.log('x = 0');  
  }
} else { 
  console.log('Invalid input data');
}

