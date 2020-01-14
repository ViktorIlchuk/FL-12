const a = 2, b = 3, c = 5, d = 7, e = 8, f = 58;

// Task 1

function convert() {
  let result = [];
  for(let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      result.push(arguments[i].toString())
    } else {
      result.push(+arguments[i])
    }
  }
  return console.log(result)
}

convert('1', a, b, '4')

// Task 2

function executeforEach() {
  const arr = arguments[0]
  const func = arguments[1]
  for(let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

executeforEach([1,a,b], function(el) {
  const a = 2
  console.log(el * a)
})

// Task 3

function mapArray() {
  const arr = arguments[0]
  const func = arguments[1]
  executeforEach(arr, func)  
}

mapArray([a, '5', e], function(el) {
  const a = 3
  return console.log(+el + a)
})

// Task 4

function filterArray() {
  const arr = arguments[0]
  const func = arguments[1]
  const filteredArr = []
  executeforEach(arr, function(el) {
    if(func(el)) {
      filteredArr.push(el)
    }  
  })
  console.log(filteredArr) 
}

filterArray([a, c, e], function(el) { 
  const a = 2 
  return el % a === 0 
}) 

// Task 5 

function flipOver(str) {
  let flippedStr = '';
  
  for (let i = str.length - 1; i >= 0; i--) { 
    flippedStr += str[i];
  }
  console.log(flippedStr)
}

flipOver('hey world') 

// Task 6 

function makeListFromRange(arr) {
  let listArr = [];
  
  for(let i = arr[0]; i <= arr[1]; i++){
    listArr.push(i)
  }
  
  console.log(listArr)
}

makeListFromRange([a, d])

// Task 7 

const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys(arr, key) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][key])
  }
  console.log(newArr)
}

getArrayOfKeys(actors, 'name'); 

// Task 8 

function substitute(arr) {
  let newArr = [];
  mapArray(arr, function(el) {
    const minNum = 30;
    if(el < minNum) {
      newArr.push('*')
    } else {
      newArr.push(el)
    }
  })
  console.log(newArr)
}

substitute([f, a]); 

// Task 9
const year = 2019;
const day = 2;
const date = new Date(year, 0, day);

function getPastDay(date, days) {
  date.setDate(date.getDate() - days);
  console.log(date.getDate())
}

getPastDay(date, day); 

// Task 10

function formatDate(date) {
  const minDubleNum = 10;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let hour = date.getHours()

  if(date.getHours() < minDubleNum) {
    hour = '0' + hour
  }

  let mins = date.getMinutes();

  if(date.getMinutes() < minDubleNum) {
    mins = '0' + mins
  }

  const formatedDate = `${year}/${month}/${day} ${hour}:${mins}`
  console.log(formatedDate)
}

formatDate(new Date('6/15/2018 09:15:00')) 
formatDate(new Date()) 


