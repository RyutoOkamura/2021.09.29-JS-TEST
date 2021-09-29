// 問題①
const array1 = [2, 4, 7, 5, 4, 3, 8];
const result1 = array1.filter(function (x,i,self) {
  return self.indexOf(x) === i;
})

console.log(result1);

const array2 = [2, 4, 7, 5, 4, 3, 8];
const result2 = array2.filter((x, i, self) => self.indexOf(x) === i);

console.log(result2);

// 問題②
function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return `${year}年は閏年です`;
  } else {
    return `${year}年は閏年ではない`
  }
}

console.log(leapYear(2020));
console.log(leapYear(2021));