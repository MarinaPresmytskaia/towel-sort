
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if(matrix === undefined) {
    return [];
  }
  return matrix.reduce((acc, curr, i) => {
    i % 2 === 0 
    ? matrix[curr]
    : curr.sort((a,b) => b - a);
    return acc.concat(curr)}, []);  
}
