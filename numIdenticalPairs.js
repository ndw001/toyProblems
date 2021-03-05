/*
Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.


Input: nums = [1,2,3,1,1,3]
Output: 4

*/


var numIdenticalPairs = function(nums) {
  let count = 0;
  for(let i = 0; i < nums.length; i++){
      for(let k = 1; k < nums.length; k++){
          if(i < k){
              if(nums[i]===nums[k]){
                  count++;
              }
          }
      }
  }
  return count;
};

let test = () => {

}
