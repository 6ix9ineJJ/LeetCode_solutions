var distributeCandies = function(candyType) {
    
    let k = candyType.length /2;
    let count ={}
    let result = 0

  for(let i of candyType){
      if(count[i]){
         count[i]++
      }
      else{
          count[i]=1
      }
  }
  
  for (var i in count) {
   if (count.hasOwnProperty(i))
        result++;
  }

  if(result<k){
    return result
  }
  
  else{
      return k
  }
  
};