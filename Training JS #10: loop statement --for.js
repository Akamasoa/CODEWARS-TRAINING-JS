//for loop is one of the most frequently used loop statements in JS. It works like loop. 
//In lesson 9, we wrote a while loop:while

function sum1_100(){
  var sum=0,num=1
  while (num<=100){
    sum+=num;
    num++;
  }
  return sum;
}

//We can rewrite it by using for loop, like this:

function sum1_100(){
  for (var sum=0,num=1;num<=100;num++){
    sum+=num;
  }
  return sum;
}

