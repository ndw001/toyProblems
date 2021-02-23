/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 * Step 2:
 *   make your solution work for all types of brackets
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 */

var balancedParens = function(input) {
  let storage = [];
  for(let i = 0; i < input.length; i++){
    if(input[i] === '(' || input[i] === '{' || input[i] === '['){
      storage.push(input[i]);
    } else {
      if(storage[storage.length - 1] === '(' && input[i] === ')' || storage[storage.length - 1] === '[' && input[i] === ']' || storage[storage.length - 1] === '{' && input[i] === '}'){
        storage.pop();
      } else {
        return false;
      }
    }
  }
  if(storage.length === 0){
    return true;
  } else {
    return false;
  }
};

let test = () => {
  let a = '()';
  let b = '({[]})';
  let c = '{{(})})';
  let d = '{(})';
  let r = balancedParens(a);
  let t = balancedParens(b);
  let y = balancedParens(c);
  let u = balancedParens(d);
  console.log(r,t,y,u);
};
test();