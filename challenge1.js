//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
let sumOfNums = 0
function sumOfMultiples(limit){
  for(let checkNum = 1; checkNum < limit; checkNum++)
  {
    if((checkNum % 3 == 0) || (checkNum % 5 == 0)){
       sumOfNums += checkNum
       }
  }
}
sumOfMultiples(1000)
console.log(sumOfNums)
