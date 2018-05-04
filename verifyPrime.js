//Question: How would you verify a prime number?

var verifyPrime = function(num) {
  for (var i = 2; i < num/2 ; i++) {
    if (num % i === 0) return false
  }
  return true
}

console.log(verifyPrime(16))