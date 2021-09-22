/*
This time we learn three string methods used to single character operation :charAt() charCodeAt() and fromCharCode(). Their usage:

stringObject.charAt(index)
stringObject.charCodeAt(index)
String.fromCharCode(num1,num2,...,numX)

//charAt() method can return to the specified location of the character. like this:

var str="abcde";
console.log(str.charAt(0));
console.log(str.charAt(1));
//output:
a
b

//In practical use, the charAt() method is usually replaced by str[index]. Because it is more convenient:

var str="abcde";
console.log(str[0]);
console.log(str[1]);
//output:
a
b

/*
charCodeAt() method can return the specified location of the character of the Unicode encoding. This return value is an integer between 
0 and 65535.

Method charCodeAt() and charAt() operation is similar, but the former is returned to the specified location of the character encoding, 
and the latter is returned to the character string.

Unicode is a computing industry standard for the consistent encoding, representation, and handling of text expressed in most of the world's 
writing systems.This is the reference information of unicode.

This example will display the character value and unicode value of each characters in str:
*/

var str="abcde";
for (var i=0;i<str.length;i++){
  console.log(str.charAt(i),str.charCodeAt(i));
}

//output:
a 97
b 98
c 99
d 100
e 101

//If parameter index of charCodeAt() is omitted, its returned value will be the first character of stringObject. So the parameter can be 
//omitted when the string length is 1; in other cases, you can't omit the parameter, unless you want to get the first character. 
//An example of omitted parameter:

var chars="abcde".split("");
for (var i=0;i<chars.length;i++){
  var tmp=chars[i].charCodeAt();
  if (tmp==97) console.log("a for apple");
  else console.log(tmp);
}

//output:
a for apple
98
99
100
101

//fromCharCode() can accept one or more specified Unicode values, and then return a string. The method is a static method of String. 
//It cannot be used as a method of the String object you have created. So its syntax should be String.fromCharCode() 
//instead of stringObject.fromCharCode(). See example:

var chars=[];
for (var i=97;i<123;i++){
  chars.push(String.fromCharCode(i));
}
console.log(chars.join(""))
//output:
abcdefghijklmnopqrstuvwxyz

//This code uses fromCharCode() to create a string from a to z.

//When fromCharCode() has only one parameter, it is very much like the reverse operation of charCodeAt(). they are a pair of good partners. 
//We often see them in the kata about the shift encryption. See an example:

function decode(str){
  var chars=str.split("");
  for (var i=0;i<chars.length;i++) 
    chars[i]=String.fromCharCode(chars[i].charCodeAt()-1);
  return chars.join("");
}
function encode(str){
  var chars=str.split("");
  for (var i=0;i<chars.length;i++) 
    chars[i]=String.fromCharCode(chars[i].charCodeAt()+1);
  return chars.join("");
}
var s="abcde"
s=encode(s);
console.log("encode:",s)    //encryption s
s=decode(s);
console.log("decode:",s)    //decryption s
//output:
encode: bcdef
decode: abcde

/*
This is a simple example of the shift of encryption, encryption to the right (Unicode value becomes large) shift 1. 
The decryption and encryption on the contrary.

Ok, lesson is over. let's us do some task.
