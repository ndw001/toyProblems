var thousandSeparator = function(n) {
  let num = n.toString();
  let ans ='';
  for(let i = 0; i<num.length;i++){
      if(i % 3 === 0 && i !==0){
          if(i !== num.length+1){
              ans = '.' + ans;
              ans = num[num.length - i -1] + ans;
          }
      } else{
          ans = num[num.length - i -1] + ans;
      }
  }
  return ans;
};