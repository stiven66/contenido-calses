// Tipos básicos de validación
type EsStringNoVacio<T> =
  T extends string ? (T extends "" ? "INVALIDO" : "VALIDO") : "INVALIDO"

type EsMayor18<T> =
  T extends number ? (T extends 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | number ? "VALIDO" : "INVALIDO") : "INVALIDO"
// (truco: este check es artificial, lo puedes extender a mano o dejar "number → VALIDO")

type EsBooleanTrue<T> =
  T extends true ? "VALIDO" : "INVALIDO"

// Evaluador de reglas simples
type EvaluarSimple<
  Objeto extends { nombre: string; edad: number; activo: boolean },
  R
> =
  R extends { campo: "nombre"; regla: "string_no_vacio" }
    ? EsStringNoVacio<Objeto["nombre"]>
  : R extends { campo: "edad"; regla: "mayor_18" }
    ? EsMayor18<Objeto["edad"]>
  : R extends { campo: "activo"; regla: "boolean_true" }
    ? EsBooleanTrue<Objeto["activo"]>
  : "INVALIDO"

// Evaluador de combinadores
type Evaluar<Objeto extends { nombre: string; edad: number; activo: boolean }, R> =
  R extends { tipo: "AND"; reglas: [infer A, infer B] }
    ? [Evaluar<Objeto, A>, Evaluar<Objeto, B>] extends ["VALIDO", "VALIDO"]
      ? "VALIDO"
      : "INVALIDO"
  : R extends { tipo: "OR"; reglas: [infer A, infer B] }
    ? [Evaluar<Objeto, A>, Evaluar<Objeto, B>] extends ["INVALIDO", "INVALIDO"]
      ? "INVALIDO"
      : "VALIDO"
  : R extends { tipo: "NOT"; regla: infer X }
    ? Evaluar<Objeto, X> extends "VALIDO" ? "INVALIDO" : "VALIDO"
  : EvaluarSimple<Objeto, R>

// ---------------------------------
// Ejemplo de uso

type Usuario = {
  nombre: string
  edad: number
  activo: boolean
}

type ValidacionNombre = { campo: "nombre"; regla: "string_no_vacio" }
type ValidacionEdad   = { campo: "edad";   regla: "mayor_18" }
type ValidacionActivo = { campo: "activo"; regla: "boolean_true" }

type ReglasUsuario = 
  | { tipo: "AND"; reglas: [ValidacionNombre, ValidacionEdad] }
  | { tipo: "OR";  reglas: [ValidacionActivo, ValidacionEdad] }

// ✅ Caso válido
type Resultado1 = Evaluar<
  { nombre: "Carlos"; edad: 25; activo: true },
  ReglasUsuario
> // "VALIDO"

// ❌ Caso inválido
type Resultado2 = Evaluar<
  { nombre: ""; edad: 17; activo: false },
  ReglasUsuario
> // "INVALIDO"

let resultado1: Resultado1 = "INVALIDO"