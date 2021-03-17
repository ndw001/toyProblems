/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let arr = [ops[0]];
  let count = 1;
  for(let i=1; i<ops.length;i++){
      if(ops[i] === "C"){
          arr.pop();
          count -=1;
      } else if(ops[i] === "D"){
          arr.push(parseInt(arr[count-1]*2));
          count+=1;
      } else if(ops[i] === "+"){
          arr.push( parseInt(arr[count-1]) + parseInt(arr[count-2]));
          count+=1;
      } else {
          arr.push(ops[i]);
          count+=1;
      }
      console.log(arr)
  }
  let sum = 0;
  for(let k = 0; k < arr.length; k++){
      if(arr[k] === 'x'){
          ;
      } else {
          sum += parseInt(arr[k]);
      }
  }
  return sum;
};