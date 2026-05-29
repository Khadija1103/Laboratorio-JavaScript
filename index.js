// =====================================
// LABORATORIO JAVASCRIPT
// =====================================


// =====================================
// EJERCICIO 1
// Calculadora de Propinas
// =====================================

function calcularPropina(total, porcentaje) {

    let propina = total * (porcentaje / 100);

    return total + propina;
}

console.log("========== EJERCICIO 1 ==========");
console.log("Total con propina:", calcularPropina(100, 10));



// =====================================
// EJERCICIO 2
// Validar Contraseña
// =====================================

function validarContraseña(contraseña) {

    let tiene8Caracteres = contraseña.length >= 8;

    let tieneNumero = /\d/.test(contraseña);

    let tieneMayuscula = /[A-Z]/.test(contraseña);

    return tiene8Caracteres && tieneNumero && tieneMayuscula;
}

console.log("========== EJERCICIO 2 ==========");
console.log(validarContraseña("Hola1234"));



// =====================================
// EJERCICIO 3
// Buscar Producto en Inventario
// =====================================

const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Pantalon", precio: 40 }
];

function buscarProducto(nombre, inventario) {

    for (let i = 0; i < inventario.length; i++) {

        if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {

            return inventario[i];
        }
    }

    return null;
}

console.log("========== EJERCICIO 3 ==========");
console.log(buscarProducto("Camisa", inventario));


// =====================================
// EJERCICIO 5
// Filtrar Usuarios por Edad
// =====================================

const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 17 },
    { nombre: "Luisa", edad: 30 },
    { nombre: "Pedro", edad: 15 }
];

function filtrarUsuarios(usuarios, edadMinima) {

    return usuarios.filter(usuario => usuario.edad >= edadMinima);
}

console.log("========== EJERCICIO 5 ==========");
console.log(filtrarUsuarios(usuarios, 18));



// =====================================
// EJERCICIO 6
// Contador de Palabras
// =====================================

function contarPalabras(texto) {

    let palabras = texto.trim().split(" ");

    return palabras.length;
}

console.log("========== EJERCICIO 6 ==========");
console.log("Cantidad de palabras:", contarPalabras("Hola como estas hoy"));



// =====================================
// EJERCICIO 7
// Simulador de Cajero Automático
// =====================================

function retirarDinero(saldo, monto) {

    if (monto > saldo) {

        return "Fondos insuficientes";

    } else {

        return "Nuevo saldo: " + (saldo - monto);
    }
}

console.log("========== EJERCICIO 7 ==========");
console.log(retirarDinero(500, 200));



// =====================================
// EJERCICIO 8
// Cambio de Moneda
// =====================================

function convertirMoneda(monto, monedaDestino) {

    let tasaUSD = 0.00025;
    let tasaEUR = 0.00023;

    if (monedaDestino === "USD") {

        return (monto * tasaUSD).toFixed(2) + " USD";

    } else if (monedaDestino === "EUR") {

        return (monto * tasaEUR).toFixed(2) + " EUR";

    } else {

        return "Moneda no válida";
    }
}

console.log("========== EJERCICIO 8 ==========");
console.log(convertirMoneda(100000, "USD"));

// =====================================
// EJERCICIO 4
// Calcular Promedio de Notas
// =====================================
// Ejercicio 4: Calcular Promedio de Notas

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPromedio(notas) {

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    return (suma / notas.length).toFixed(2);
}

console.log("========== EJERCICIO 4 =========="); // 👈 PRIMERO EL TÍTULO

rl.question("Ingrese las notas separadas por coma: ", (entrada) => {

    let notas = entrada.split(",").map(Number);

    console.log("Promedio:", calcularPromedio(notas));

    rl.close();
});