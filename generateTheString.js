var generateTheString = function(n) {
  let alpha = 'ab'
  let ans = ''
  if(n % 2 === 1){
      for(let i=0; i<n;i++){
          ans += alpha[0];
      }
  } else {
      for(let i=0; i<n-1;i++){
          ans += alpha[0];
      }
      ans += alpha[1];
  }
  return ans;
};