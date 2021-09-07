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

/*
As you see, there are three parts in the brackets, separated by . 
The first part is the initialization variable, this part will run before the loop starts. 
The second part is the conditional expressions, check the expression before the start of each time loops, 
when the value of the expression is false, loop will be terminated. 
The third part is the statement about increasing and decreasing variables, they will run after the code block.";"
*/

//For the example above, the running order of the code is:

                              <--- back to part 2
                  -------------------------------------------
                  |                 true                    |
var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
                                |  
                           false|
                       loop terminated

