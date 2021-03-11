var repeatedNTimes = function(A) {
  let arr = [];
  for(let i = 0; i < A.length; i++){
      if(arr.includes(A[i])){
          return A[i];
      } else {
          arr.push(A[i]);
      }
  }
};