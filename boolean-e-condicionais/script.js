var possuiFaculdade = true;

if (possuiFaculdade) {
  console.log("Tem Faculzinha");
} else {
  console.log("Tem nada, tem nada");
}

// Condicionais If e Else If
var possuiCarro = true,
  possuiMoto = true,
  possuiBike = false;

if (possuiCarro && possuiMoto) {
  console.log("O cara carro e moto mano");
} else if (possuiCarro) {
  console.log("O cara tem carro mano");
} else if (possuiMoto) {
  console.log("O cara tem moto mano");
} else if (possuiBike) {
  console.log("O cara tem Bike mano");
} else {
  console.log("O cara anda a pé truta");
}

// Como se da o valor false em uma váriavel
if (false);
if (0);
if (NaN);
if (null);
if (undefined);
if ("");

// Operador Lógico de Negação
if (!true); // false
if (!1); // false
if (!!"ola"); // true

// Operadores de Comparação
/*
if 10 > 5; (true)
if 10 > 10; (false)
if 10>= 10; (true)
*/

var a = +"10";
console.log(a === 10);

var b = 10;
console.log(b !== 10);

//erro aqui
