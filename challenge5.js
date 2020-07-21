let number = 2520
while(true){
  if(number%11 === 0 && number%13 === 0 && number%14 === 0 && number%16 === 0 && number%17 === 0 && number%18 === 0 && number%19 === 0 && number%20 === 0){
      console.log(number)
      break;
  }
  else{
    number++;
  }

}
