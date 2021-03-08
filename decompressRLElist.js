var decompressRLElist = function(nums) {
  let arr = [];
  for(let i = 0; i < nums.length; i++){
      if(i % 2 ===0){
          for(let k = 0; k < nums[i]; k++){
              arr.push(nums[i+1]);
          }
      }
  }
  return arr;
};

let test = () => {

}
test();

