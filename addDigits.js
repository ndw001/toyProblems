
var addDigits = function(num) {
    let sum = 0;
    let nums = num.toString();
    while(num >= 10){
        for(let i=0; i<nums.length; i++){
            sum += parseInt(nums[i])
        }
        num = sum;
        nums = sum.toString();
        sum = 0;
    }
    return nums;
};