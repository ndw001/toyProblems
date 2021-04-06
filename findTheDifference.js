var findTheDifference = function(s, t) {
  let obj = {};
  for(let i=0;i<s.length;i++){
      if(obj[s[i]] === undefined){
          obj[s[i]] = 1;
      } else {
          obj[s[i]] +=1;
      }
  }
  console.log(obj)
  for(let k=0;k<t.length;k++){
      if(obj[t[k]] > 0){
          obj[t[k]] -=1;
      } else {
          return t[k];
      }
  }
};