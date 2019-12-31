
function countNumbers(str) {
  let arr = str.split('')
  let numberArr = [];
  for(let i = 0; i < arr.length; i++) {  
    let convertedVal = +arr[i]
    if(!isNaN(convertedVal)) {
      numberArr.push(convertedVal);  
    }
  } 
  let count = {};
  numberArr.forEach((i) => { 
    count[i] = (count[i]||0) + 1;
  });
    console.log(count);
}

countNumbers('erer384jj4444666888jfd123');

countNumbers('jdjjka000466588kkkfs662555');

countNumbers(''); 
