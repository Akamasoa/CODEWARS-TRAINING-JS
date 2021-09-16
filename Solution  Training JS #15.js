/*
Task
‎Codificación en función , función aceptar 2 parámetros: y . es una matriz decimal. es un decimal. ‎howManySmallerarrnarrn

‎La primera misión: dejar que todos los elementos de la matriz mantengan dos decimales (No es necesario convertir el número n). ‎

‎La segunda misión: Traversal arr, contar el número del elemento que es menor que n y devolverlo.‎
*/

//for example:

howManySmaller([1.234,1.235,1.228],1.24) should return 2
howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2

//Long Solution:

function howManySmaller(arr,n){

  Let count = 0;
  
  for (let i = 0; let i < arr.length; i++){
    if (arr[i].toFixed(2) < n)
      count++;
  }
  return count;
}
