import { Component } from '@angular/core'; // Importa el módulo 'Component' desde '@angular/core'
import { Palabra } from 'src/app/models/palabra'; // Importa la clase 'Palabra' desde el archivo 'src/app/models/palabra'
import { PalabraService } from 'src/app/providers/palabra.service'; // Importa el servicio 'PalabraService' desde el archivo 'src/app/providers/palabra.service'

@Component({
  selector: 'app-ingresar-palabra', // Define el selector del componente
  templateUrl: './ingresar-palabra.component.html', // Define la ruta del archivo de plantilla HTML para el componente
  styleUrls: ['./ingresar-palabra.component.css'] // Define la ruta del archivo de estilos CSS para el componente
})
export class IngresarPalabraComponent {

  arrCoincidencias: string[] = []; // Declara e inicializa un arreglo vacío de strings llamado 'arrCoincidencias'
  arrAdivinar: string[] = []; // Declara e inicializa un arreglo vacío de strings llamado 'arrAdivinar'
  intentos: string[] = []; // Declara e inicializa un arreglo vacío de strings llamado 'intentos'
  imagen = [ // Declara e inicializa un arreglo de strings llamado 'imagen'
    '../../../assets/images/img1.png',
    '../../../assets/images/img2.png',
    '../../../assets/images/img3.png',
    '../../../assets/images/img4.png',
    '../../../assets/images/img5.png',
    '../../../assets/images/img6.png',
    '../../../assets/images/img7.png',
  ];
  title = 'ahorcadoAngular'; // Declara e inicializa una variable de tipo string llamada 'title'
  palabraAdivinar= ''; // Declara e inicializa una variable de tipo string llamada 'palabraAdivinar'
  letra = ''; // Declara e inicializa una variable de tipo string llamada 'letra'
  idx = 0; // Declara e inicializa una variable de tipo number llamada 'idx'
  input = true; // Declara e inicializa una variable de tipo boolean llamada 'input'
  juegoTerminado = false; // Declara e inicializa una variable de tipo boolean llamada 'juegoTerminado'
  juegoGanado = false; // Declara e inicializa una variable de tipo boolean llamada 'juegoGanado'

  constructor(private db: PalabraService){ // Constructor de la clase, recibe una instancia de 'PalabraService' como parámetro y la asigna a la variable 'db'
    this.db.getConexion().then( ()=>{ // Llama al método 'getConexion' de 'db', que devuelve una promesa
      console.log('conexion exitosa!'); // Imprime en la consola el mensaje 'conexion exitosa!' cuando la promesa se resuelve correctamente
      this.setPalabra(this.db.getPalabraAleatoria()); // Llama al método 'getPalabraAleatoria' de 'db' para obtener una palabra aleatoria y luego llama al método 'setPalabra' de la clase actual, pasando la palabra obtenida como parámetro
    }).catch( (err)=>{ // Captura el error si la promesa es rechazada y lo asigna al parámetro 'err'
      console.log(err); // Imprime en la consola el error capturado
    });
  }

  setPalabra(palabra: string){ // Define el método 'setPalabra' que recibe una palabra como parámetro
    this.palabraAdivinar = palabra; // Asigna la palabra recibida a la variable 'palabraAdivinar'
    this.arrAdivinar = palabra.split(''); // Convierte la palabra en un arreglo de letras y lo asigna a la variable 'arrAdivinar'
    console.log(this.arrAdivinar); // Imprime en la consola el arreglo de letras
    this.setArrAdivinar(); // Llama al método 'setArrAdivinar'
  }

  setArrAdivinar(){ // Define el método 'setArrAdivinar'
    this.arrAdivinar.forEach( (letra)=>{ // Itera sobre cada letra en 'arrAdivinar'
      this.arrCoincidencias.push('?'); // Agrega un elemento '?' al arreglo 'arrCoincidencias' por cada letra en 'arrAdivinar'
    });
  }

  revisarPalabra(){ // Define el método 'revisarPalabra'
    let aciertos = 0; // Declara e inicializa una variable de tipo number llamada 'aciertos'
    this.intentos.push(this.letra); // Agrega la letra actual al arreglo 'intentos'
    this.arrAdivinar.forEach((letra, index: number)=>{ // Itera sobre cada letra en 'arrAdivinar' y obtiene su índice
      if(this.letra === letra){ // Comprueba si la letra actual coincide con la letra en la posición actual del arreglo 'arrAdivinar'
        this.arrCoincidencias[index] = letra; // Si hay coincidencia, asigna la letra actual a la posición correspondiente en 'arrCoincidencias'
        aciertos++; // Incrementa la variable 'aciertos'
      }
    });
    if(aciertos == 0){ // Comprueba si no hubo aciertos
      this.vidas(); // Llama al método 'vidas'
    }
    this.reset(); // Llama al método 'reset'
    this.gameOver(); // Llama al método 'gameOver'
  }

  vidas(){ // Define el método 'vidas'
    this.idx ++; // Incrementa la variable 'idx' en 1
    console.log(this.idx); // Imprime en la consola el valor de 'idx'
  }

  reset(){ // Define el método 'reset'
    setTimeout( ()=>{ // Ejecuta la siguiente función después de 50 milisegundos
      this.letra = ''; // Asigna una cadena vacía a la variable 'letra'
    },50);
  }

  gameOver(){ // Define el método 'gameOver'
    if(this.idx > 5){ // Comprueba si 'idx' es mayor que 5
      this.juegoTerminado = true; // Asigna 'true' a la variable 'juegoTerminado'
      this.input = false; // Asigna 'false' a la variable 'input'
    }else{
      this.ganarJuego(); // Llama al método 'ganarJuego'
    }
  }

  ganarJuego(){ // Define el método 'ganarJuego'
    let ganar = 0; // Declara e inicializa una variable de tipo number llamada 'ganar'
    this.arrCoincidencias.forEach( (letra) => { // Itera sobre cada letra en 'arrCoincidencias'
      if(letra == "?"){ // Comprueba si la letra actual es igual a '?'
        ganar++; // Incrementa la variable 'ganar'
      }
    });
    if(ganar < 1){ // Comprueba si 'ganar' es menor que 1
      this.input = false; // Asigna 'false' a la variable 'input'
      this.juegoGanado = true; // Asigna 'true' a la variable 'juegoGanado'
    }
  }
}