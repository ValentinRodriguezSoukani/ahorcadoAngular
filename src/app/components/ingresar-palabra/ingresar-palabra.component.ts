import { Component } from '@angular/core';
import { PalabraService } from 'src/app/providers/palabra.service';

@Component({
  selector: 'app-ingresar-palabra',
  templateUrl: './ingresar-palabra.component.html',
  styleUrls: ['./ingresar-palabra.component.css']
})
export class IngresarPalabraComponent {

  title = 'ahorcadoAngular';
  arrCoincidencias = []; // esto es para corregir!
  palabraAdivinar = '';

  constructor(private db: PalabraService){

    setTimeout( ()=> {

      console.log(this.db.getBD());
    },2000);

    this.primero();
  }

  primero(){
    setTimeout( ()=>{
      console.log('PRIMERO');
      this.segundo();
    },2000);
  }

  segundo(){
    console.log('SEGUNDO');
  }

}
