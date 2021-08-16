let Dolar_Em_Dolar = 1;
let Dolar_Em_Real = 5.25;
let Seu_Dinheiro_Em_Real = 194.5;
let Seu_Dinheiro_Em_Dolar;

Seu_Dinheiro_Em_Dolar = ( (Seu_Dinheiro_Em_Real * Dolar_Em_Dolar) / Dolar_Em_Real );

console.log( Seu_Dinheiro_Em_Dolar.toFixed(2) + 99 );
console.log( typeof(Seu_Dinheiro_Em_Dolar.toFixed(2)) );

console.log( Number(Seu_Dinheiro_Em_Dolar.toFixed(2)) + 99 );
console.log( typeof(Number(Seu_Dinheiro_Em_Dolar.toFixed(2))) );
