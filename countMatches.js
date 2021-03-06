/*
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.


Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2


*/

var countMatches = function(items, ruleKey, ruleValue) {
  let count = 0;
    for(let i = 0; i < items.length; i++){
        if(ruleKey === "type"){
            if(ruleValue === items[i][0]){
                count +=1;
            }
        } else if(ruleKey === "color"){
            if(ruleValue === items[i][1]){
                count +=1;
            }
        } else if(ruleKey === "name"){
            if(ruleValue === items[i][2]){
                count +=1;
            }
        }
    }
    return count;
};

let test = () => {
  let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
  console.log(countMatches(items, 'color', 'silver'));

}
test();



