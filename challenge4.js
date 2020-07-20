let product
let firstNum
let secondNum
let revProduct
let prodArr = []

for(firstNum = 999; firstNum >= 100; firstNum--){
  for(secondNum = 999; secondNum > 100; secondNum--){
      product = firstNum * secondNum;
      product = String(product).split('')
      revProduct = Array.from(product)
      product.reverse()
      if(product.join('') === revProduct.join('')){
        prodArr.push(product.join(''))
        break;
    }
  }
}
let arr;
arr = prodArr.map(Number)
console.log(Math.max(...arr))
