
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let sortArr = [];
    if (Array.isArray(matrix) === false) {return sortArr}
    else {
for (let i = 0 ; i < matrix.length ; i ++) {
  if ( i % 2 === 0 ) {
    sortArr.push(...matrix[i].sort((a, b) => a - b))
} else if ( i % 2 !== 0) {
    sortArr.push(...matrix[i].sort((a, b) => a - b).reverse())
}
}
  return sortArr
}
}
