let fib = [1, 2]
let fibSum = 0
while(fib[fib.length-1] < (4000000)){
  if(fib[fib.length-1] % 2 == 0 && fib[fib.length - 1] < 4000000){
    fibSum += fib[fib.length - 1]
  }
  fib.push(fib[fib.length-1] + fib[fib.length-2])
}
console.log(fibSum)