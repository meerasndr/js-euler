let limit = 1000
let checkNum
let sumOfNums = 0
for(checkNum = 1; checkNum < 1000; checkNum++)
{
  if((checkNum % 3 == 0) || (checkNum % 5 == 0)){
     sumOfNums += checkNum
     }
}
console.log(sumOfNums)