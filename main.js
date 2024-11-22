let firstNumber = document.querySelector(".firstNumber");
let secondNumber = document.querySelector(".secondNumber");
let resultNumber = document.querySelector(".resultNumber");
let submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  const first = parseInt(firstNumber.value, 10);
  const second = parseInt(secondNumber.value, 10);
  resultNumber.innerHTML = "";
  printPrime(first, second);
});

function printPrime(n, m) {
  if (isNaN(n) || isNaN(m) || n < 1 || m > 1000000 || n >= m) {
    resultNumber.innerHTML = "Invalid input. Please enter valid numbers.";
    return;
  }

  let primes = [];
  for (let i = n + 1; i < m; i++) {
    let isPrime = true;

    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }

    if (i > 1 && isPrime) {
      primes.push(i);
    }
  }

  resultNumber.innerHTML = primes.length
    ? ` ${primes.join(", ")}`
    : "No prime numbers found in the range.";
}
