/*
Task
Implement a function which accepts 2 arguments: and .stringseparator

The expected algorithm: split the into words by spaces, split each word into separate characters and join them back with the specified , 
join all the resulting "words" back into a sentence with spaces.stringseparator

For example:
*/

splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

//Solution:

function splitAndMerge(string, separator) {
return string
  .split(" ")
  .map(word => word.split("").join(separator))
  .join(" ");
}
