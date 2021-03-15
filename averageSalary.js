var average = function(salary) {
  let min = salary[0];
  let max = 0;
  let arr = [];
  let mi = true;
  let ma = true;
  for(let i=0;i<salary.length;i++){
      if(salary[i] < min){
          min = salary[i];
      } else if(salary[i] > max){
          max = salary[i]
      }
  }
  let sum =0;
  for(let k =0;k<salary.length;k++){
      if(salary[k] !== max && salary[k] !== min){
          sum +=salary[k];
      }
  }
  return sum / (salary.length -2)
};