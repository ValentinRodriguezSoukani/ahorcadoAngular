import { Component } from '@angular/core'; // Importa el decorador 'Component' desde el módulo '@angular/core'.
import { Palabra } from 'src/app/models/palabra'; // Importa la clase 'Palabra' desde el archivo 'palabra.ts' ubicado en el directorio 'src/app/models'.
import { PalabraService } from 'src/app/providers/palabra.service'; // Importa la clase 'PalabraService' desde el archivo 'palabra.service.ts' ubicado en el directorio 'src/app/providers'.

@Component({
  selector: 'app-agregar-palabra', // Selector del componente. Permite usar el componente en la plantilla HTML utilizando <app-agregar-palabra>.
  templateUrl: './agregar-palabra.component.html', // Ruta de la plantilla HTML asociada al componente.
  styleUrls: ['./agregar-palabra.component.css'] // Ruta de los estilos CSS asociados al componente.
})
export class AgregarPalabraComponent {

  palabraNueva= ''; // Variable que almacena la nueva palabra a agregar.
  alertErr = false; // Variable que indica si se debe mostrar la alerta de error.
  alertOk = false; // Variable que indica si se debe mostrar la alerta de éxito.
  arrPalabras: Palabra[] = []; // Arreglo de palabras de tipo 'Palabra'.

  constructor(private palabraServ: PalabraService){ // Constructor del componente que recibe una instancia de 'PalabraService' como argumento y la asigna a la propiedad 'palabraServ'.
    this.palabraServ.getConexion().then( ()=>{ // Llama al método 'getConexion' del servicio 'palabraServ', que retorna una promesa, y realiza una acción cuando se resuelve la promesa.
      console.log('conexion exitosa!'); // Imprime un mensaje en la consola cuando la conexión es exitosa.
      this.arrPalabras = this.palabraServ.getArrPalabras(); // Asigna el arreglo de palabras obtenido del servicio a la propiedad 'arrPalabras'.
    }).catch( (err)=>{ // Captura el error en caso de que la promesa sea rechazada.
      console.log(err); // Imprime el error en la consola.
    });

  }

  AgregarPalabra(){ // Método para agregar una nueva palabra.
    console.log(this.palabraNueva); // Imprime la palabra nueva en la consola.
    this.palabraServ.agregarPalabra(this.palabraNueva).then( ()=>{ // Llama al método 'agregarPalabra' del servicio 'palabraServ' y realiza una acción cuando se resuelve la promesa.
      this.alertOk = true; // Establece la variable 'alertOk' en verdadero para mostrar la alerta de éxito.
      setTimeout( ()=>{ // Ejecuta una función después de un tiempo determinado.
        this.alertOk = false; // Establece la variable 'alertOk' en falso para ocultar la alerta de éxito.
        this.palabraNueva = ''; // Limpia la variable 'palabraNueva'.
      },2000); // Espera 2000 milisegundos (2 segundos) antes de ejecutar la función interna.
    }).catch( ()=>{ // Captura el error en caso de que la promesa sea rechazada.
      this.alertErr = true; // Establece la variable 'alertErr' en verdadero para mostrar la alerta de error.
      setTimeout( ()=>{ // Ejecuta una función después de un tiempo determinado.
        this.alertErr = false; // Establece la variable 'alertErr' en falso para ocultar la alerta de error.
      },2000); // Espera 2000 milisegundos (2 segundos) antes de ejecutar la función interna.
    });
  }
}