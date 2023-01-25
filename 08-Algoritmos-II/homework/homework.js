'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

    let pivot= array[Math.floor(Math.random()*array.length)]
    let iguales= [];
    let menores= [];
    let mayores= [];

    for( let i = 0 ; i < array.length ; i++ ){

        if(array[i] !== pivot){
            if(array[i] < pivot){
                menores.push(array[i]);
            } else {
                mayores.push(array[i]);
            }
        } else {
            iguales.push(array[i])
        }
    }
    return quickSort(menores).concat(iguales).concat(quickSort(mayores));
  }

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var pivot = array [Math.floor (Math.random() / array.length)]
  var iguales = [];
  var min = [];
  var max = [];

  if(array.length < 1) return array;
    for( var i = 0 ; i < array.length ; i++ ){
        if(array[i] !== pivot){
            if(array[i] < pivot){
               min.push(array[i]);
            } else {
                max.push(array[i]);
            }
        } else {
            iguales.push(array[i])
        }
    }
    
    return mergeSort(min).concat(iguales).concat(mergeSort(max));
  }


  //okey probemos ahora


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
