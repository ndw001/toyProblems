var singleNumber = function(nums) {
  let obj = {};
  for(let i=0;i<nums.length;i++){
      if(obj[nums[i]] === undefined){
          obj[nums[i]] = 1;
      } else {
          obj[nums[i]] +=1;
      }
  }
  console.log(obj)
  for(let keys in obj){
      if(obj[keys] === 1){
          return keys;
      }
  }
};