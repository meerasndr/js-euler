let num = 600851475143
let factors = [];
while(num % 2 === 0){
  factors.push(2)
  num /= 2
}
for(let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2){
  while(num % i == 0){
    num /= i
    factors.push(i)
  }
}
factors.push(num)
console.log(Math.max(...factors))