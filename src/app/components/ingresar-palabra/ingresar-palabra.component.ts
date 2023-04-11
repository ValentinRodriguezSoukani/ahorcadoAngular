import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresar-palabra',
  templateUrl: './ingresar-palabra.component.html',
  styleUrls: ['./ingresar-palabra.component.css']
})
export class IngresarPalabraComponent {

  title = 'ahorcadoAngular';
  arrCoincidencias = []; // esto es para corregir!
  palabraAdivinar = '';

}
