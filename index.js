function hasTargetSum(array, target) {
  // Write your algorithm here
  if(array.length>1){
 for(let i=1;i<array.length;i++){
  let j=0;
  
  let sum=array[i]+array[j];
  if(sum==target){
    return sum===target
  }else if(sum!==target){
    j++
    for(let l=2;l<array.length;l++){
      let sum=array[j]+array[l]
      if (sum===target)return sum===target
      
    }
  }else if(sum!==target){
return false
  }
 }
}else{
  return false
}
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
