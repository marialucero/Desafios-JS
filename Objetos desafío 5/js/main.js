// Sistema para calcular el precio final de un pedido y los datos del cliente: 
const suma = (num1, num2)=>{return num1+num2};
const resta = (num1, num2) =>{return num1-num2};
const multiplicar = (num1,num2) => {return num1*num2};
const descuento = y => y*0.9; 
const iva = x => x*1.21; 

let nombre = prompt("Ingrese su nombre"); 
let direccion = prompt("Ingrese la dirección de su local"); 
let telefono = parseFloat(prompt("Ingrese un número de celular para contactarnos"));
let email = prompt("Ingrese su e-mail"); 
let cantidadUnidades = parseFloat(prompt("Ingrese la cantidad de unidades a comprar del Bimbo Artesano 500g")); 
let precioNeto = 247;  
let totalNeto = multiplicar(precioNeto,cantidadUnidades);
let precioFinal = iva(descuento(totalNeto));


class Pedido { 
    constructor(nombre,direccion,telefono,email, cantidadUnidades, precioNeto, totalNeto, precioFinal) {
        this.nombre = nombre; 
        this.direccion = direccion; 
        this.telefono = telefono; 
        this.email = email;
        this.cantidadUnidades = cantidadUnidades;
        this.precioNeto = precioNeto;
        this.totalNeto = totalNeto;
        this.precioFinal = precioFinal; 
    }
    factura() {
        console.log(
        "Datos de facturación y envío: ", "\n", "Nomnbre: "+ this.nombre+ "\n"+ " Dirección: "+ this.direccion+"\n"+ "Sus datos de contacto son: "+ "\n "+ this.telefono+ "\n "+ this.email + "\n"+
            "Datos del pedido: ", "\n", "Unidades "+ this.cantidadUnidades + "\n"+ "Precio neto por unidad $" + this.precioNeto + "\n "+ "Precio neto total $" + this.totalNeto + "\n"+" Total final con IVA 21% $" + this.precioFinal + "\n"+
            "Su pedido se encuentra realizado, en breve nos comunicaremos con usted"
        );
    }
}
const pedido1 = new Pedido(nombre, direccion, telefono, email, cantidadUnidades, precioNeto, totalNeto, precioFinal);
pedido1.factura();
