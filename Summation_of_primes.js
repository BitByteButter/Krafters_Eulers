function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const limit = 2000000;
let primeSum = 0;

for (let i = 2; i < limit; i++) {
  if (isPrime(i)) {
    primeSum += i;
  }
}

console.log(primeSum);
