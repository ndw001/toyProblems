var countConsistentStrings = function(allowed, words) {
  let count = words.length;
  for(let i = 0 ; i < words.length; i++){
      for(let k = 0; k < words[i].length; k++){
          if(!allowed.includes(words[i][k])){
              count -=1;
              break;
          }
      }
  }
  return count;
};