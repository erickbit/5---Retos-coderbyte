function MinWindowSubstring(strArr) { 

  var subst = []
  for (let i = 0; i < strArr[0].length; i++) {
    for (let j = strArr[0].length; j > i; j--) {
      subst.push(strArr[0].substring(i,j))
    }
  }
  
  function matches(str,arr) {
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (str[i] === arr[j]) {
          arr.splice(j,1);
          break;
        }
      }
    }
    return arr.length === 0 ? true : false
  }
  
  subst = subst.filter(function(str){return matches(str, strArr[1].split(''))})
  subst.sort(function(a,b){return a.length-b.length})
  
  return subst[0]
         
}
   
// keep this function call here 
MinWindowSubstring(readline());