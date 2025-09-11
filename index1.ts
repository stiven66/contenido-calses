// Partial: Todas las propiedades de un tipo sean opcionales

type Usuario = {
  nombre: string;
  edad: number;
}

// Usando nuestro Parcial
const usuarioParcial: Partial<Usuario> = {
  nombre: "Ana", // 'edad' no es obligatorio
};

console.log(usuarioParcial.nombre); // Salida: Ana
// console.log(usuarioParcial.edad); // Salida: undefined (porque es opcional)


////////////Required: Todas las propiedades de un tipo sean obligatorias

type Producto = {
    id?: number;
    nombre?: string;
}

// Usando nuestro Required
const productoRequerido: Required<Producto> = {
    id: 1,
    nombre: "Laptop", // Ambas propiedades son obligatorias
};

console.log(productoRequerido.id); // Salida: 1
console.log(productoRequerido.nombre); // Salida: Laptop


/////////////// Readonly: Todas las propiedades de un tipo sean de solo lectura

type Animal = {
    especie: string;
    edad: number;
    habitat: string;
}
// Usando nuestro Readonly
const animalReadonly: Readonly<Animal> = {
    especie: "Tigre",
    edad: 5,
    habitat: "Selva",
};

// animalReadonly.edad = 6; // Error: el valor es inmutable

console.log(animalReadonly.especie);
console.log(animalReadonly.edad);
console.log(animalReadonly.habitat);

//////////////// Pick: Selecciona un conjunto de propiedades de un tipo y crea un nuevo tipo con ellas

type Vehiculo = {
    marca: string;
    modelo: string;
    año: number;
    color: string;
}

// Usando nuestro Pick
const vehiculoPick: Pick<Vehiculo, "marca" | "modelo"> = {
    marca: "Toyota",
    modelo: "Corolla", // Solo 'marca' y 'modelo' son obligatorios
};

console.log(vehiculoPick.marca); // Salida: Toyota
console.log(vehiculoPick.modelo); // Salida: Corolla
// console.log(vehiculoPick.año); // Error: 'año' no existe en el tipo 'Pick<Vehiculo, "marca" | "modelo">'
// console.log(vehiculoPick.color); // Error: 'color' no existe en el tipo 'Pick<Vehiculo, "marca" | "modelo">'


///////////// Omit: Omite un conjunto de propiedades de un tipo y crea un nuevo tipo sin ellas

type Curso = {
    titulo: string;
    duracion: number;
    nivel: string;
    instructor: string;
}

// Usando nuestro Omit
const cursoOmit: Omit<Curso, "nivel" | "instructor"> = {
    titulo: "TypeScript Avanzado",
    duracion: 10, // Solo 'titulo' y 'duracion' son obligatorios
};

console.log(cursoOmit.titulo); // Salida: TypeScript Avanzado
console.log(cursoOmit.duracion); // Salida: 10
// console.log(cursoOmit.nivel); // Error: 'nivel' no existe en el tipo 'Omit<Curso, "nivel" | "instructor">'
// console.log(cursoOmit.instructor); // Error: 'instructor' no existe en el tipo 'Omit<Curso, "nivel" | "instructor">'

// Practicamente el omite hace la misma funcion que el pick pero al reves



///////// Exclude este utility type nos permite crear un nuevo tipo excluyendo ciertos tipos de un conjunto dado

type coloresDisponibles = "rojo" | "verde" | "azul" | "amarillo";
type coloresExcluidos = Exclude<coloresDisponibles, "amarillo" | "verde">;

const color1: coloresExcluidos = "rojo";
const color2: coloresExcluidos = "azul";
// const color3: coloresExcluidos = "verde"; // Error: 'verde' ha sido excluido del tipo 'coloresExcluidos'
// const color4: coloresExcluidos = "amarillo"; // Error: 'amarillo' ha sido excluido del tipo 'coloresExcluidos'


/////////// Extract este utility type nos permite crear un nuevo tipo extrayendo ciertos tipos de un conjunto dado

type frutasDisponibles = "manzana" | "banana" | "naranja" | "uva";
type frutasExtraidas = Extract<frutasDisponibles, "banana" | "uva" | "kiwi">;

const fruta1: frutasExtraidas = "banana";
const fruta2: frutasExtraidas = "uva";
// const fruta3: frutasExtraidas = "manzana"; // Error: 'manzana' no ha sido extraído al tipo 'frutasExtraidas'
// const fruta4: frutasExtraidas = "kiwi"; // Error: 'kiwi' no existe en el tipo 'frutasDisponibles'


/////////// NonNullable este utility type nos permite crear un nuevo tipo excluyendo null y undefined de un tipo dado

type respuesta = string | number | null | undefined;
type respuestaNoNula = NonNullable<respuesta>;

const respuesta1: respuestaNoNula = "Éxito";
const respuesta2: respuestaNoNula = 200;
// const respuesta3: respuestaNoNula = null; // Error: 'null' ha sido excluido del tipo 'respuestaNoNula'
// const respuesta4: respuestaNoNula = undefined; // Error: 'undefined' ha sido excluido del tipo 'respuestaNoNula'


/////////// ReturnType este utility type nos permite obtener el tipo de retorno de una función

function obtenerUsuario() {
    return { nombre: "Carlos", edad: 30 };
}

type TipoRetorno = ReturnType<typeof obtenerUsuario>;

const usuario: TipoRetorno = { nombre: "Ana", edad: 25 };
// const usuarioInvalido: TipoRetorno = { nombre: "Ana" }; // Error: falta la propiedad 'edad'