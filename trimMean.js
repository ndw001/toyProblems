/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  for(let i=0;i<arr.length;i++){
      for(let k=0;k<arr.length;k++){
          if(arr[i] < arr[k]){
            let temp = arr[i];
            arr[i]= arr[k];
            arr[k] = temp;
          }
      }
  }
  let remove = Math.floor(arr.length*.05);
  for(let m=0;m<remove;m++){
      arr.pop();
      arr.splice(0,1);
  }
  let sum =0;
  for(let q=0;q<arr.length;q++){
      sum+=arr[q];
  }
  return (sum / arr.length);
};