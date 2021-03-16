var countStudents = function(students, sandwiches) {
  let checkAll = false;
  while(!checkAll){
      checkAll = true;
      for(let i = 0;i<students.length;i++){
          if(students[i] === sandwiches[0]){
              students.splice(i,1);
              sandwiches.splice(0,1);
              checkAll = false;
          }
      }
  }
  return students.length;
};