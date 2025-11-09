// Define the add function
function add(a, b) {
  return a + b;
}

// Get the first and second arguments from the command line
const firstNum = parseInt(process.argv[2]);
const secondNum = parseInt(process.argv[3]);

// Print the result of adding them
console.log(add(firstNum, secondNum));
