/*
The number is a basic data type in javascript. javascript also supports Number objects. 
The object is the original value of the package object. When necessary, JavaScript automatically converts between 
the original data and the objects. You can explicitly create a Number object with the constructor Number(). 
Although it is not necessary to do so. Usage:
*/

var num=new Number(value);

/*
Parameter value is the value of the Number object to be created or the value to be converted into a numeric value.

Constructor Number() can be used without operator new and directly as a transformation function to use. 
In this way, when the Number is called, it transforms itself into a number and then returns the converted value (or NaN). Usage:
*/

var num=Number(value);

/*
Number object has two generic object properties: constructor and prototype. all the objects in JS have these two properties. 
they are two very important attributes. because of their importance and complexity, we will learn it in the future.

In addition to the above two, the Number objects have five attributes (or called constant):

MAX_VALUE: The maximum number that can be expressed in JS. Usage:Number.MAX_VALUE. Its approximate value is 1.7976931348623157e+308

MIN_VALUE: The minimum number that can be expressed in JS(Close to 0, but not negative). Usage:Number.MIN_VALUE. 
Its approximate value is 5e-324

NaN: Non numeric value. Abbreviations of "Not a Number". When some arithmetic operations (such as the square root of a negative number) 
or the result of the method are not numbers, return NaN. Usage:Number.NaN. It can be simplified and replaced with NaN.
*/
