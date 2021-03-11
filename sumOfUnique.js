var sumOfUnique = function(nums) {
  let uni = {};
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
      if(uni[nums[i]] === undefined){
          uni[nums[i]] = 1;
      } else {
          uni[nums[i]] += 1;
      }
  }
  console.log(uni);
  let objKeys = Object.keys(uni);
  for(let k=0;k<objKeys.length;k++){
      if(uni[objKeys[k]] === 1){
          sum += parseInt(objKeys[k]);
      }
  }
  return sum;
};