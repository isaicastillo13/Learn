// Escribe una funcion en TS, que reciba como parametro un array de numeros enteros y devuelva el numero que mas se repite en el array.
var numRepetido = [1, 2, 3, 4, 5, 1, 2, 1, 6, 7, 8, 1, 2, 2, 2, 2, 2, 2, 2, 2];
console.log(numeroMasRepetido(numRepetido));
// function numeroMasRepetido(numRepetido: number[]) {
//   let contador = 0;
//   let numQueMasSeRepite = 0;
//   // recorrer el arreglo numero por numero
//   for (let i = 0; i < numRepetido.length; i++) {
//     // volver a recorrer el arreglo para comparar el numero actual con los demas
//     for (let j = i + 1; j < numRepetido.length; j++) {
//       if (numRepetido[i] === numRepetido[j]) {
//         numQueMasSeRepite = numRepetido[i];
//       }
//     }
//   }
//   console.log(`El numero que mas se repite es: ${numQueMasSeRepite}`);
// }
function numeroMasRepetido(numeros) {
    var maxRepeticiones = 0;
    var numeroResultado = numeros[0];
    for (var i = 0; i < numeros.length; i++) {
        var contador = 1; // se reinicia por cada número
        for (var j = i + 1; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                contador++;
            }
        }
        if (contador > maxRepeticiones) {
            maxRepeticiones = contador;
            numeroResultado = numeros[i];
        }
    }
    return numeroResultado;
}
