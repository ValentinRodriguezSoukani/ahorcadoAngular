export class Palabra {
  palabra: string; // Define una propiedad 'palabra' de tipo string en la clase Palabra.

  longitud: number; // Define una propiedad 'longitud' de tipo number en la clase Palabra.

  constructor(palabra: string) { // Constructor de la clase Palabra que recibe un parámetro 'palabra' de tipo string.
    this.palabra = palabra; // Asigna el valor del parámetro 'palabra' a la propiedad 'palabra' de la instancia actual.
    this.longitud = palabra.length; // Asigna la longitud de la palabra al atributo 'longitud' de la instancia actual.
  }
}