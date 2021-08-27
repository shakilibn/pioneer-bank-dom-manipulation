const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        diag1 += arr[i][j];
      }
      if (i == n - j - 1) {
        diag2 += arr[i][j];
      }
    }
  }
  const result = Math.abs(diag1 - diag2);
  return result;
}

console.log(diagonalDifference(matrix));
