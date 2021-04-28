function FindIntersection(strArr) { 

  var n = strArr[0].split(', ')
  var m = strArr[1].split(', ')
  var result = n.filter(x => m.find(n => n === x))
  return result.length > 0 ? result.join(',') : 'false'

}
   
// keep this function call here 
console.log(FindIntersection(readline()));