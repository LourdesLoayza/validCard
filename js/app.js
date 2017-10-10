//Se ingresa el valor a evaluar
var card=prompt("ingresar el numero de tarjeta")

//Se declara la función para validar el número de tarjeta
function isValidCard(numbersCard){

//Se declaran las variables para almacenar los datos ingresados previamente
var cardArray=[];
var cardReverse=[];
var cardCheck=[];

//Los datos ingresados se ingresan en el cardArray
cardArray=Array.from(numbersCard);

/*Los valores del primer arreglo se recorren de mayor a menor para ingresarlos de manera invertida
mientras se van ingresando los valores estos son cambiados de tipo string a tipo numero para que
se puedan hacer las operaciones
*/

   for (i=cardArray.length-1;i>=0;i--){
      var newNumber=parseInt(numbersCard.charAt(i));
      cardReverse.push(newNumber)}

return cardReverse;
alert (cardReverse)
}

isValidCard(card);