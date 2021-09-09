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
    
//In this example, for loop traverse the array arr. when the first odd number found, statement will jump out the for loop.break

//In the loop statement, we can use skipping some code. for example, the following code ignores negative values:continue

function dontDisplayNegative(arr){
  for (var i=0;i<arr.length;i++){
    if (arr[i]<0) continue;   
    console.log(arr[i])
  }
}

/*
In this example, is never executed for negative element. thanks to .console.log(arr[i])continue

Through the use of and , you can make the loop statement more flexible and convenient.breakcontinue

Ok, lesson is over. let's us do some task with and .breakcontinue
*/
