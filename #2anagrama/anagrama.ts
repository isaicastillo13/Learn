/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

// 1. Enviar ambas palabras
// 2. descontruir una, letra por letra y gaurdarla en un arrreglo
// 3. descontruir la otra, letra por letra y gaurdarla en otro arrreglo
// 4. comparar ambos arreglos, si son iguales, retornar verdadero, sino falso

function anagrama(word1: string, word2: string): boolean {

    if (word1 === word2) return false;

    if (word1.length !== word2.length) return false;

    const sorted1 = word1.split("").sort().join("");
    const sorted2 = word2.split("").sort().join("");

    return sorted1 === sorted2;
}

// Pruebas
console.log(anagrama("amor", "roma"));