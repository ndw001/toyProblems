var uniqueOccurrences = function(arr) {
  let obj = {};
  let occurrences = [];
  for(let i = 0; i < arr.length; i++){
      if(obj[arr[i]] === undefined){
          obj[arr[i]] = 1;
      } else {
          obj[arr[i]] +=1;
      }
  }
  for(let key in obj){
      if(occurrences.includes(obj[key])){
          return false;
      } else{
          occurrences.push(obj[key]);
      }
  }
  return true;
};