import { Component } from '@angular/core';  // Importa la clase 'Component' desde el módulo '@angular/core'.

@Component({
  selector: 'app-root',  // Selector del componente, se utiliza para identificar el componente en el HTML.
  templateUrl: './app.component.html',  // Ruta al archivo de plantilla HTML del componente.
  styleUrls: ['./app.component.css']  // Ruta(s) al archivo(s) de estilos CSS del componente.
})
export class AppComponent {
  title = 'ahorcadoAngular';  // Variable 'title' con el valor 'ahorcadoAngular'.
  arrCoincidencias = [];  // Arreglo vacío para almacenar coincidencias (se usa para corregir un error).
  palabraAdivinar = '';  // Variable para almacenar la palabra que se debe adivinar.

  componenteAgregar = false;  // Variable booleana que indica si se debe mostrar el componente de agregar palabras.
  componenteJugar = true;  // Variable booleana que indica si se debe mostrar el componente de juego.

  constructor(){

  }

  agregarPalabras(){  // Método que se ejecuta cuando se quiere agregar palabras.
    this.componenteAgregar = true;  // Establece la variable 'componenteAgregar' como verdadera.
    this.componenteJugar = false;  // Establece la variable 'componenteJugar' como falsa.
  }

  regresarJuego(){  // Método que se ejecuta cuando se quiere regresar al juego.
    this.componenteAgregar = false;  // Establece la variable 'componenteAgregar' como falsa.
    this.componenteJugar = true;  // Establece la variable 'componenteJugar' como verdadera.
  }
}