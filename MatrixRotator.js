/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;

}

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  var cwArray = [];
  var ccwArray = [];
  // do work here
  if (direction === Direction.CW) {
    for (var i = 0; i < this.matrix.length; i++) {
      cwArray.push([]);
      for (var j = 0; j < this.matrix.length; j++) {
        cwArray[i].push(this.matrix[this.matrix.length - j - 1][i]);
        console.log(i + ',' + j);
        }
      }
    this.matrix = cwArray;
    } else if (direction === Direction.CCW) {
    for (var i1 = 0; i1 < this.matrix.length; i1++) {
      ccwArray.push([]);
      for (var j1 = 0; j1 < this.matrix.length; j1++) {
        ccwArray[i1].push(this.matrix[j1][this.matrix.length - i1 - 1]);
        console.log(i1 + ',' + j1);

        // newMatrix[i][j] = matrix[j][matrix.length - i - 1];

        // if (i >= j && i + j >= this.matrix.length - 1) {

        // } else if (i >= j && i + j < this.matrix.length - 1) {

        // } else if (i < j && i + j >= this.matrix.length - 1) {

        // } else if (i < j && i + j < this.matrix.length - 1) {

        // }


      }
    }
    this.matrix = ccwArray;
  }

  console.log('Test Output ', cwArray);
  console.log('Test Output ', ccwArray);
  // must be a valid Direction, see Direction.js


};

