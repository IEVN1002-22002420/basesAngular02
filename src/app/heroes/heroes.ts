// heroes.ts
// Interfaz que define la forma de un objeto "Heroes" en la app.
// Sirve para tipar correctamente los objetos en TypeScript y ayudar al autocompletado.

export interface Heroes {
   imagen:string,
   nombre:string,
   descripcion:string,
   race:string,
   ki:number
}
