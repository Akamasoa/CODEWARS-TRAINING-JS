//At this lesson, we will learn some methods about add/remove array elements. They are: push(), pop(), shift() and unshift(). 
//Their usage and details please refer to:     pop()     shift()     push()     unshift().

//Here are some examples to help us understand their usage:

var arr=[1,2,3,4,5]
arr.push(6)         //use push() add one element to the end of arr
console.log(arr)    //output: [1,2,3,4,5,6]

arr.push(7,8);       //also can add more than one elements to arr
console.log(arr);    //output: [1,2,3,4,5,6,7,8]

//use pop() can remove one element from the end of arr,
//and return the value of this element.
console.log(arr.pop());  //output: 8  (pop() returned a value 8)

//and then arr should left 7 elements
console.log(arr);  //output: [1,2,3,4,5,6,7]

//shift() is similar to pop(),
//but shift() removes the first element of the arr.
console.log(arr.shift());  //output: 1  (shift() returned a value 1)

//and then arr should left 6 elements
console.log(arr);  //output: [2,3,4,5,6,7]

//unshift() is the reverse operation of shift(), 
//it can add one or more elements to the start of arr
arr.unshift(1);
console.log(arr);  //output: [1,2,3,4,5,6,7]

arr.unshift(0,0);
console.log(arr);  //output: [0,0,1,2,3,4,5,6,7]

/*
These four methods are the most basic methods of adding and removing elements. We can choose to use them according to their needs.

Of course, their shortcomings are obvious. First, they can only manipulate the head and tail of the array, not flexible enough. 
Secondly, their speed is relatively slow. But we usually don't feel it, when you need to deal with big data, you will understand 
what is slow. For example, in some cases, the direct assignment of the array elements will be faster than the push method:
*/

//push method is slower
var arr1=[];
for (var i=0;i<1000000;i++) arr1.push(i);
//direct assignment will quiker than push()
var arr2=[];
for (var i=0;i<1000000;i++) arr2[i]=i;

//Ok, lesson is over. let's us do some task.
