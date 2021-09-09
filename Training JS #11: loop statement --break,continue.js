//We have seen in the switch statement, it can jump out the switch statement. 
//it can also be used in the loop statement. an example:break

function findFirstOddNumber(arr){
  var result;
  for (var i=0;i<arr.length;i++){
    if (arr[i]%2==1){
      result=arr[i];
      break;
    }
  }
  return result;
}
    

