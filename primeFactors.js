//Question: How could you find all prime factors of a number?

function primeFactors(num) {
  var factors = [];
  for (var i = 2; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }
  return factors.filter((num) => isPrime(num))
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true;
}

console.log(primeFactors(69))