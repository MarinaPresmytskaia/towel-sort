
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if(matrix === undefined) {
    return [];
  }

  const arr =[];
  let i;
  for(i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
      const matrixSort = i % 2 === 0
      ? j
      : (matrix[i].length - j -1);
      arr.push(matrix[i][matrixSort]);
    }
  }
  return arr;
}
