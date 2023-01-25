'use strict';

function BinarioADecimal(num) {
   let sum = 0;
   let aux = num.split('').reverse().join('');
   for (let i = 0; i < aux.length; i++) {
      sum += aux[i]*(2**i);
   }
   return sum;
}

function DecimalABinario(num) {
   let array = [];
   while(num > 0){
      array.unshift(num%2);
      num = Math.floor(num/2);
   }
   return array.join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
