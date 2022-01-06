// Sistema para calcular el precio final de un pedido: 
const suma = (num1, num2)=>{return num1+num2};
const resta = (num1, num2) =>{return num1-num2};
const multiplicar = (num1,num2) => {return num1*num2};
const descuento = y => y*0.9; 
const iva = x => x*1.21; 

let cantidadUnidades = parseFloat(prompt("Ingrese la cantidad de unidades a comprar del Bimbo Artesano 500g")); 
let precioNeto = 247;  
let totalNeto = multiplicar(precioNeto,cantidadUnidades);
let precioFinal = iva(descuento(totalNeto));

alert("El total de su pedido es: $"+precioFinal);
alert("Su pedido se encuentra realizado, en breve nos comunicaremos con usted"+"\n"+"¡Gracias!");