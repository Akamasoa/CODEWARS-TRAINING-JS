function bigToSmall(arr){
  //coding here...
  return [].concat(...arr).sort((a,b) => a-b).reverse().join('>');
}

//Another Solution:
function bigToSmall(arr) {
  return [].concat(...arr).sort((a, b) => b - a).join('>');
}
