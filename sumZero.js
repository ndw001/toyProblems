var sumZero = function(n) {
  let arr = [];
  if(n === 1){
      return [0];
  }
  if(n % 2 === 0){
      for(let i = 1; i<n; i+=2){
          arr.push(i);
          let neg = -i;
          arr.push(neg);
      }
  } else if(n % 2 === 1){
      for(let i = 1; i<n; i+=2){
          arr.push(i);
          let neg = -i;
          arr.push(neg);
      }
      arr.push(0);
  }
  return arr;
};