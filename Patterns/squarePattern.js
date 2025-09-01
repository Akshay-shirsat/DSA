console.log("square pattern");

function squarePattern(n) {
  //     This is the outer loop.
  // It controls the rows of the square.
  // i starts at 0, goes up to size - 1 (so 0,1,2,3,4 → 5 times total).
  // Each time this loop runs, it creates one row.
  for (let i = 0; i < n; i++) {
    let row = "";
    // We start with an empty string called row.
    // This will hold the pattern for a single row (e.g., "* * * * * ").
    // We reset it to empty at the beginning of every new row.
    for (let j = 0; j < n; j++) {
      // This is the inner loop.
      // It controls the columns of the square.
      // For every row, it repeats size times to add stars.
      row += "* ";
      // Each time the inner loop runs, we add * to the row string.
      // After 5 repetitions, row becomes:
    }
    console.log(row);
    // After the inner loop finishes, we print the completed row.
    // This shows one line of the square in the console.
  }
}

squarePattern(5);
