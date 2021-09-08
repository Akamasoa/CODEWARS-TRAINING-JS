/*
So, we have a function we called pickIt and we will be given one parameter, it will be an array of numbers, so we called it: arr.
Then, we created two empty arrays, we called them: odd and even, inside them we'll push our arr elements depending are they even or odd.
Now, you can see the For Loop. Inside the For Loop, we have three blocks, separated with: ";". First, we have a starting block, 
which says at which point will our Loop start to execute. At the start, we created a variable: i (meaning index) and gave it a 
value of 0 which means that our code will start to run with the first element of the given array.

In the second block, we have a condition which has to be met in order to execute the code. If true, the code will run again, 
if false, the Loop will be finished. In our case we have a condition: i < arr.length, which means that the Loop will last, 
and the code will be executed until there are no more elements inside the array.

Finally, in the third block, we set what to do inside our Loop when it's starting the next round. Here we said: i++, 
which means, each time our code is running from the beginning again, increase our index by one, 
or move to the next number (element) inside the array.
So, let's repeat:
*/

      for(let i = 0; i < arr.length; i++){

/*
We are going to start our code for the first element (i=0), we are gonna run the code until there are no more elements inside 
the array (i<arr.length), every time a code has been run, we are gonna increase our index by 1 (i++) 
and that way ensuring to run the code for every element inside the array.
Once we have all the Loop statements covered, we have a code block to run:
*/
      
      arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);

/*
In our case, every given element of an array we would divide by 2 and if there is 0 left, that element is even and we push 
it into the even array. If not, the element is odd and we push it into the odd array:
*/

      return [odd,even];

/*
Finally, once the code has been run for all the elements in the given array, our Loop will finish and the function 
will return an array containing the odd and even arrays.
That's how we use the For Loop.
*/
      
//With the optional chaining operator:

function pickIt(arr){
  var odd=[],even=[];
  //coding here
    for(let i = 0; i < arr.length; i++){
  arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
   return [odd,even];
}


//With if..else:

function pickIt(arr){
  var odd=[],even=[];
   //coding here
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i]);
    }
    else {
      odd.push(arr[i]);
    }
  }
   return [odd,even];
}
