


function sum(){
  var total =  0;
  var i=0;
  while(i<arguments.length){
     total += arguments[i];
     i++;
  }
  return total;
}
console.log(sum(1, 2)); // returns 3
console.log(sum(1, 2, 3)); // returns 6