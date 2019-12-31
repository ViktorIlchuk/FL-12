function isLeapYear(date) {
  let dateInNumber = typeof(date) === "number" 
    ? date 
    : Date.parse(date.toString().replace(" ", "T"))
  
  let parsedDate = new Date(dateInNumber);

  if(isValidDate(parsedDate)) {
    let year = parsedDate.getFullYear();
    if(year % 4 === 0) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  } else {
    console.log("Invalid Date");
  }
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}


isLeapYear('2020-01-01 00:00:00'); // =>  ‘2020 is a leap year’
isLeapYear('2020-01-01 00:00:00777'); // =>  ‘Invalid Date’
isLeapYear('2021-01-15 13:00:00');  
isLeapYear('2200-01-15 13:00:00'); // =>  ‘2200 is not a leap year’
isLeapYear(1213131313135465656654564646542132132131); // =>  ‘Invalid Date’
isLeapYear(1213131313); // => ‘1970 is not a leap year’ 