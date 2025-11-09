// Get the first argument from the command line and convert to integer
const size = parseInt(process.argv[2]);

// Check if the argument is not a number or missing
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // Loop to print the square
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
