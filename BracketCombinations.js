function BracketCombinations(num) { 

  let factorial = (n) => {
    let j = 1;
    for(var i = n; i >= 1; i--){
      j *= i;
    }
    return j;
  }

  const resultado = (factorial(2 * num)) / ((factorial(num + 1)) * (factorial(num)));
  return resultado; 
}
   
// keep this function call here 
console.log(BracketCombinations(readline()));