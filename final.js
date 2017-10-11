
//Se ingresa el valor de la tarjeta a evaluar
var card=prompt("ingresar el numero de tarjeta")

//Se declara la función para validar la numeración de la tarjeta
function isValidCard(numbersCard){
  
//Se declaran las variables a utilizar
var cardArray=[];
var cardReverse=[];
var parArray=[];
var impArray=[];

//Los valores ingresados son ingresados dentro del array declarado
cardArray=Array.from(numbersCard);
//Los valores del array se invierten de orden de la ultima posicion a la primera
cardReverse=cardArray.reverse();

    // for (i=cardArray.length-1;i>=0;i--){
    // cardReverse.push(cardArray[i])}

/*Los valores son evaluados si estan en posiciones pares y estos de cumplir son ingresados en un array de posiciones pares.
Los valores que eran de tipo string se cambian a tipo numero*/
for (i=0;i<=cardReverse.length-1;i+=2){
    parNumber=parseInt(cardReverse[i])
    parArray.push(parNumber)}

//Los valores en posiciones pares se suman y dan de resultado una variable que evaluaremos al final
var sumPar = parArray.reduce(function(a, b){ return a + b; });

/*Los valores son evaluados si estan en posiciones impares y estos de cumplir son ingresados en un array de posicicones impares.
Los valores que eran de tipo string se cambian a tipo numero, cada valor es multiplicado *2 antes de ser ingresado en el array*/
for (j=1;j<=cardReverse.length-1;j+=2){
    impNumber=parseInt(cardReverse[j])
    impArray.push(impNumber*2) }

/*Se hace una validación antes de sumar los elementos del array de posiciones impares si estos resultados son mayor o igual a 10
se debe descomponer ese numero en unidades y decenas para luego sumar estos numeros obtenidos. Luego de hacer los cambios se suman
con el resto de valores del array que son menores a 10*/
    var sumImp=0
for (h=0;h<=impArray.length-1;h++){

    if (impArray[h]>=10){
        
        firstValue=Math.floor(impArray[h]/10);
        secondValue=(impArray[h]%10);
        sumImp+=firstValue+secondValue;
    }else{
        sumImp+=impArray[h]
    }

/*Tanto los valors de la suma impar como par se suman y a este total se le aplica la validacíon. Si el resultado del mod es 0 los
valores de la tarjeta son correctos*/
var total=((sumImp+sumPar)%10)===0?"Tarjeta valida":"Tarjeta invalida";

}

return total;
}

isValidCard(card);
