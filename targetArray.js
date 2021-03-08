var createTargetArray = function(nums, index) {
  let arr = [];
  for(let i = 0; i < index.length; i++){
      arr.splice(index[i],0,nums[i]);
  }
  return arr;
};