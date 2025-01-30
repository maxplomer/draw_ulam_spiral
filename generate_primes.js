
const primes = () => {
  let i = 3

  while (true) {

    if (isPrime(i)) {
      console.clear()
      console.log(i)
    }

    i += 1
  }
}

const isPrime = (x) => {
  let i = 2

  while (true) {
    if (i >= x / 2) return true
    if (x % i == 0) return false
    i += 1
  }
}


primes()
