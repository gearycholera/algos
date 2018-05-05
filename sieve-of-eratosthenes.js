var sieve = function(num) {
  var primes = [];

  var verifyPrime = function(num) {
    for (var i = 2; i < num ; i++) {
      if (num % i === 0) return false
    }
    return true
  }

  for (var i = 2; i <= num; i++) {
    if (verifyPrime(i)) primes.push(i);
  }

  return primes;
}

console.log(sieve(12))