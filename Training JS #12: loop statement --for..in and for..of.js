//In lesson #11, we learned that for loop can traverse the array. If we want to traverse an object, 
//we can use the variant of the for: for..in, it can traverse all the keys of the object. an example:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}

var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);

//Code results:

keys of ob:
item1
item2
item3
item4
values of ob:
This
is
an
example

//for..in can also be used in arrays, at this time the array is treated as an object. Modify the code above, we can see:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var arr=["one","two","three"];
console.log("keys of arr:")
showObjectKeys(arr);
console.log("values of arr:")
showObjectValues(arr);

