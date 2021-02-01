function isPrime(number){
  for(let count = 2; count < number; count++){
    if(number % count === 0){
      return false
    }
  }
  return number > 1
}

module.exports = isPrime