
var luckyNumbers  = function(matrix) {
  let min = [];
  let max = [];
  let ans = [];
  for(let i=0;i<matrix.length;i++){
      let row = matrix[i][0];
      for(let k=0;k<matrix[0].length;k++){
          if(matrix[i][k] < row){
              row = matrix[i][k];
          }
      }
      min.push(row);
  }
  for(let i=0;i<matrix[0].length;i++){
      let col = 0;
      for(let k=0;k<matrix.length;k++){
          if(matrix[k][i] > col){
              col = matrix[k][i];
          }
      }
      max.push(col);
  }
  for(let y=0;y<min.length;y++){
      for(let t = 0;t<max.length;t++){
        if(max[t] === min[y]){
          ans.push(max[t])
        }
      }
  }
  console.log(min, max)
  return ans;

};