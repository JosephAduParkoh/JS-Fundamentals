// Get the first argument
const arg = parseInt(process.argv[2]);

// Define recursive factorial function
function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Print result
console.log(factorial(arg));
