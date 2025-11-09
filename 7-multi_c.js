// Get the first argument from the command line
const x = parseInt(process.argv[2]);

// Check if x is a valid number
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  // Loop to print "C is fun" x times
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
