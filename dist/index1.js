"use strict";
// Partial: Todas las propiedades de un tipo sean opcionales
Object.defineProperty(exports, "__esModule", { value: true });
// Usando nuestro Parcial
const usuarioParcial = {
    nombre: "Ana", // 'edad' no es obligatorio
};
console.log(usuarioParcial.nombre); // Salida: Ana
// Usando nuestro Required
const productoRequerido = {
    id: 1,
    nombre: "Laptop", // Ambas propiedades son obligatorias
};
console.log(productoRequerido.id); // Salida: 1
console.log(productoRequerido.nombre); // Salida: Laptop
// Usando nuestro Readonly
const animalReadonly = {
    especie: "Tigre",
    edad: 5,
    habitat: "Selva",
};
// animalReadonly.edad = 6; // Error: el valor es inmutable
console.log(animalReadonly.especie);
console.log(animalReadonly.edad);
console.log(animalReadonly.habitat);
// Usando nuestro Pick
const vehiculoPick = {
    marca: "Toyota",
    modelo: "Corolla", // Solo 'marca' y 'modelo' son obligatorios
};
console.log(vehiculoPick.marca); // Salida: Toyota
console.log(vehiculoPick.modelo); // Salida: Corolla
// Usando nuestro Omit
const cursoOmit = {
    titulo: "TypeScript Avanzado",
    duracion: 10, // Solo 'titulo' y 'duracion' son obligatorios
};
console.log(cursoOmit.titulo); // Salida: TypeScript Avanzado
console.log(cursoOmit.duracion); // Salida: 10
const color1 = "rojo";
const color2 = "azul";
const fruta1 = "banana";
const fruta2 = "uva";
const respuesta1 = "Éxito";
const respuesta2 = 200;
// const respuesta3: respuestaNoNula = null; // Error: 'null' ha sido excluido del tipo 'respuestaNoNula'
// const respuesta4: respuestaNoNula = undefined; // Error: 'undefined' ha sido excluido del tipo 'respuestaNoNula'
/////////// ReturnType este utility type nos permite obtener el tipo de retorno de una función
function obtenerUsuario() {
    return { nombre: "Carlos", edad: 30 };
}
const usuario = { nombre: "Ana", edad: 25 };
// const usuarioInvalido: TipoRetorno = { nombre: "Ana" }; // Error: falta la propiedad 'edad'
//# sourceMappingURL=index1.js.map