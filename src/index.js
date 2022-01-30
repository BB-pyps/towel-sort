
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){
    return [];
  }
  const argsArr = Array.from(matrix);
  let newArr = [];
  for (let i=0; i < argsArr.length; i++){
    if(i % 2 === 0){
    argsArr[i].sort((a, b) => (a - b));
  }else{
    argsArr[i].sort((a, b) => (b - a));
  }
  }
  for (let i=0; i < argsArr.length; i++){
    for (let j=0; j < argsArr[i].length; j++){
      newArr.push(argsArr[i][j]);
    } 
  }
  return newArr;
}
