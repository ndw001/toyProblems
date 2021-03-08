var interpret = function(command) {
  let str = '';
  for(let i = 0; i < command.length; i++){
      if(command[i] === "G"){
          str += 'G';
      } else {
          if(command[i] === "(" && command[i+1] === ")"){
              str += 'o';
          } else if(command[i+1] === "a"){
              str += 'al';
          }
      }
  }
  return str;
};