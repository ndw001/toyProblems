var isAnagram = function(s, t) {
  let sObj = {};
  let tObj = {};
  if(s.length !== t.length){
      return false;
  }
  for(let i=0;i<s.length;i++){
      if(sObj[s[i]] === undefined){
          sObj[s[i]] = 0;
      } else {
          sObj[s[i]] +=1;
      }
      if(tObj[t[i]] === undefined){
          tObj[t[i]] = 0;
      } else {
          tObj[t[i]] +=1;
      }
  }
  let objKeys = Object.keys(sObj);
  for(let k=0;k<objKeys.length;k++){
      if(sObj[objKeys[k]] !== tObj[objKeys[k]]){
          return false;
      }
  }
  return true;
};