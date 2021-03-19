/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0){
      return false;
  }
  let y = x.toString();
  for(let i=0;i<y.length;i++){
      if(y[i] !== y[y.length -1 - i]){
          return false;
      }
  }
  return true;
};