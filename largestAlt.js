var largestAltitude = function(gain) {
  let arr = [0];
  let max = 0;
  for(let i = 0 ; i < gain.length; i++){
      let add = arr[i] + gain[i];
      arr.push(add);
  }
  for(let k = 0; k < arr.length; k++){
      if(arr[k] > max){
          max = arr[k];
      }
  }
  return max;
};