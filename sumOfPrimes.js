function sumOfPrimesBelowTwoMillion() {
  const limit = 2000000;
  const isPrime = new Array(limit).fill(true);
  let sum = 0;

  // Mark all non-prime numbers as false
  for (let i = 2; i < limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Add up all the prime numbers
  for (let i = 2; i < limit; i++) {
    if (isPrime[i]) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumOfPrimesBelowTwoMillion());
