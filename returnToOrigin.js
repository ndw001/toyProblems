var judgeCircle = function(moves) {
  let vert = {"U": 0, "D": 0};
  let hor = {"L": 0, "R": 0};
  for(let i =0; i<moves.length;i++){
      if(moves[i] === 'U'){
          if(vert["D"] > 0){
              vert["D"] -=1;
          } else {
              vert["U"] +=1;
          }
      } else if(moves[i] === 'D'){
          if(vert["U"] > 0){
              vert["U"] -=1;
          } else {
              vert["D"] +=1;
          }
      } else if(moves[i] === 'L'){
          if(hor["R"] > 0){
              hor["R"] -=1;
          } else {
              hor["L"] +=1;
          }
      } else if(moves[i] === 'R'){
          if(hor["L"] > 0){
              hor["L"] -=1;
          } else {
              hor["R"] +=1;
          }
      }
  }
  return (vert["U"] === 0) && (vert["D"]===0) && (hor["L"]===0) && (hor["R"] === 0);
};