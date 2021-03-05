/*
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25


Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8


Input: mat = [[5]]
Output: 5
*/


var diagonalSum = function(mat) {
  let count = 0;
  for(let i = 0; i < mat.length; i++){
      for(let k = 0; k < mat.length; k++){
          if(i === k || i + k === mat.length - 1){
              count += mat[i][k];
          }
      }
  }
  // if(mat.length % 2 === 1 && mat.length !==1){
  //   debugger;
  //     let half = Math.floor(mat.length / 2) - 1;
  //     count = count - mat[half][half];
  // }
  return count;
};

let test = () => {
  let a = [[1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1]];
  let b = [[1,2,3],
  [4,5,6],
  [7,8,9]];

  console.log(diagonalSum(a)); // 8
  console.log(diagonalSum(b)); // 25
}
test();