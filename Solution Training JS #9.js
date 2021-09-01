/*Task
Coding in function padIt, function accept 2 parameters:

str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/

//While Solution:

function padIt(str,n){
  let result = str;
  let i = 0;

  while (i < n) {
    if (i % 2 === 0) {
      result = `*${result}`;
    } else {
      result = `${result}*`;
    }
    i += 1;
  }
  return result;
}

//With Short:

const padIt = (str, n) =>
  `${'*'.repeat(Math.ceil(n / 2))}${str}${'*'.repeat(Math.floor(n / 2))}`

//With Ternary Operator:

function padIt(str, n) {
  while (n > 0) {
    str = n-- % 2 ? '*' + str : str + '*';
  }
  return str;
}
