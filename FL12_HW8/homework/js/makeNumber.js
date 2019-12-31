
function makeNumber(str) {
  let arr = str.split('');
  let numberArr = [' '];
  for(let i = 0; i < arr.length; i++) {  
    let convertedVal = +arr[i]
    if(!isNaN(convertedVal)) {
      numberArr.push(convertedVal);  
    }
  } 
  let correctAnswer = numberArr.join(''); 
  console.log(correctAnswer);
}

makeNumber('erer384jjjfd123'); //=>384123
makeNumber('123098h76gfdd'); //=>12309876
makeNumber('ijifjgdj'); //=> should return empty string ->''
