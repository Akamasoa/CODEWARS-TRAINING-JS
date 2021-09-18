/*
Task
Coding in function , function accept 2 parameters: and . is a string. is a char. firstToLaststrcstrc

Please return the gap between the first position of and the last position of .cc

If there are a lot of in the , should return a positive integer; If there is only one in , should return 0; If there is no in the , should return -1. Retrieval should not ignored the case.cstrcstrcstr

for example:
*/

firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1

function firstToLast(str,c){
  return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

// Function Export
module.exports = firstToLast

//Test:

const firstToLast = require('.')

test('Test 1', () => {
  expect(firstToLast('ababc', 'a')).toBe(2)
})

test('Test 2', () => {
  expect(firstToLast('ababc', 'c')).toBe(0)
})

test('Test 3', () => {
  expect(firstToLast('ababc', 'd')).toBe(-1)
})
