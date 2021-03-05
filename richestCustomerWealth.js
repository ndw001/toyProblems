/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10

*/



var maximumWealth = function(accounts) {
  let max = 0;
  let currentSum = 0;
  for(let i = 0; i < accounts.length; i++){
    for(let k = 0; k < accounts[i].length; k++){
      currentSum += accounts[i][k];
    }
    if(currentSum > max){
      max = currentSum
    }
    currentSum = 0;
  }
  return max;
};

let test = () => {
  let a = [[1,2,3],[3,2,1]];
  let b = [[1,5],[7,3],[3,5]];
  console.log(maximumWealth(a));
  console.log(maximumWealth(b));

}
test();


