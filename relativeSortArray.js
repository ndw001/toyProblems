/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let count = 0;
  let arr = [];
  let extra =[];
  for(let i =0;i<arr2.length;i++){
      for(let k=0;k<arr1.length;k++){
          if(arr1[k]===arr2[i]){
              count+=1;
          }
      }
      for(let c = 0; c<count;c++){
          arr.push(arr2[i]);
      }
      count=0;
  }
  for(let y=0;y<arr1.length;y++){
      if(!arr2.includes(arr1[y])){
          extra.push(arr1[y]);
      }
  }
  let extras = extra.sort(function(a, b){return a-b});
  return arr.concat(extra);
};