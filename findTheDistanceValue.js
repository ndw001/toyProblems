
var findTheDistanceValue = function(arr1, arr2, d) {
  let count = 0;
  for(let i = 0; i<arr1.length;i++){
      let found = false;
      for(let k=0;k<arr2.length;k++){
          if(arr1[i] > arr2[k]){
              if(arr1[i] - arr2[k] <= d){
                  console.log(1,i,k)
                  found = true;
              }
          } else {
              if(arr2[k] - arr1[i] <= d){
                  console.log(2,i,k)
                  found = true;
              }
          }
      }
      if(!found){
          count+=1;
      }
  }
  return count;
};