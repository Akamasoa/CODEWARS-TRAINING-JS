/*
Task
Create a function shuffleIt. The function accepts two or more parameters. The first parameter arr is an array of numbers, 
followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr 
(the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, 
the spread operator, destructuring, and rest parameters.
*/

//Example:

shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]

var shuffleIt = (arr,...ex) => {
  for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
  return arr;
}

//Long Solution:

const shuffleIt = (array, ...swaps) => {
  const newArray = [...array]

  swaps.forEach(([firstIndex, secondIndex]) => {
    const [firstNumber, secondNumber] = [newArray[firstIndex], newArray[secondIndex]]
    ;[newArray[firstIndex], newArray[secondIndex]] = [secondNumber, firstNumber]
  })

  return newArray;
}

// Function Export
module.exports = shuffleIt

/*
Test:
const shuffleIt = require('.')

test('Test 1', () => {
  expect(shuffleIt([1, 2, 3, 4, 5], [1, 2])).toEqual([1, 3, 2, 4, 5])
})

test('Test 2', () => {
  expect(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4])).toEqual([1, 3, 2, 5, 4])
})

test('Test 3', () => {
  expect(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3])).toEqual([1, 3, 5, 2, 4])
})
*/
