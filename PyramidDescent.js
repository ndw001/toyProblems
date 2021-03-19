/*
A Pyramid Descent Puzzle consists of a pyramid of positive integers. To solve the puzzle, you must find a
path that traverses the pyramid from top to bottom visiting numbers whose product is a given target value.
Each step in the path must go down one row, and go either one step to the left or one step to the right.

*/

let pyramidDescent = (root, target) => {
  let finish = false;
  let path = [];
  let recursiveMultiply = (node, currentProduct, pathArr) => {
    if(finish){
      return path;
    }
    currentProduct *= node.value;
    if(currentProduct === target && node.left === undefined && node.right === undefined){
      finish = true;
    }

    pathArr.push('L');
    recursiveMultiply(node.left, currentProduct, pathArr);
    path.pop();
    pathArr.push('R');
    recursiveMultiply(node.right, currentProduct, pathArr);

  }
  recursiveMultiply(root, 0, path);
}

let test = () => {

}
test;