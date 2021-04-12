
var moveZeroes = function(nums) {
  let zeroCount = 0;
  for(let i = nums.length-1;i>=0;i--){
      if(nums[i] === 0){
          nums.splice(i,1);
          zeroCount +=1;
      }
  }
  for(let k = 0; k<zeroCount;k++){
      nums.push(0);
  }
  return nums;
};