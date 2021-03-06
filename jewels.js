/*

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".


Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Input: jewels = "z", stones = "ZZ"
Output: 0

*/

var numJewelsInStones = function(jewels, stones) {
  let count = 0;
  for(let i = 0 ; i < jewels.length;i++){
    for(let k = 0; k < stones.length; k++){
      if(jewels[i] === stones[k]){
        count += 1;
      }
    }
  }
  return count;
};

let test = () => {
  console.log(numJewelsInStones("aA", "aAAbbbb"));
  console.log(numJewelsInStones("z", "ZZ"));

}
test();