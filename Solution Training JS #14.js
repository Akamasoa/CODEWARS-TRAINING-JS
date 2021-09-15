/*
Task
Coding in function . function accept 3 parameter: . It means value of color red green and blue. the value range is 0-255.colorOfrgb

Use Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.toString(16)

the color code should starting with "#". and then use 2 characters per color.
*/

//for example:

colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"

//That's all of your work. My work is print your color code on your screen.

function colorOf(r,g,b){
  //coding here
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);
  
    red = red.length < 2 ? '0' + red : red;
    green = green.length < 2 ? '0' + green : green;
    blue = blue.length < 2 ? '0' + blue : blue;
  
   let color = '#' + red + green + blue;
  return color;
}
