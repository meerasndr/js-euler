let sum = 0
let squareOfSum = 0
let sumOfSquares = 0


for(let num = 1; num <= 100; num++){
   sum += num
  sumOfSquares += (num ** 2)
}
console.log(sum**2 - sumOfSquares)