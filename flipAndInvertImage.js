var flipAndInvertImage = function(image) {
  let flip = [];
  let subFlip = [];
  for(let i = 0; i < image.length; i++){
      for(let k = image[i].length-1; k >=0;k--){
          subFlip.push(image[i][k]);
      }
      flip.push(subFlip);
      subFlip = [];
  }
  let ans = [];
  let subAns = [];
  for(let i = 0; i < flip.length; i++){
      for(let k = 0; k < flip[i].length; k++){
          if(flip[i][k] === 0){
              subAns.push(1);
          } else {
              subAns.push(0);
          }
      }
      ans.push(subAns);
      subAns = [];
  }
  return ans;
};