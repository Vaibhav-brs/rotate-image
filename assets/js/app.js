function rotateImage() {
    const input = document.getElementById("matrix").value.trim();
    const matrix = parseMatrix(input);
  
    const rotatedMatrix = rotate(matrix);
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<strong>Rotated Image Matrix:</strong><br>" + rotatedMatrix.map(row => row.join(", ")).join("<br>");
  }
  
  function parseMatrix(input) {
    return input.split("\n").map(row => row.split(",").map(num => parseInt(num.trim())));
  }
  
  function rotate(matrix) {
    const n = matrix.length;
  
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  
    // Reverse each row
    for (let i = 0; i < n; i++) {
      matrix[i].reverse();
    }
  
    return matrix;
  }
  
