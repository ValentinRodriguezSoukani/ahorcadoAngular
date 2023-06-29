import { Component } from '@angular/core';
import { Palabra } from 'src/app/models/palabra';
import { PalabraService } from 'src/app/providers/palabra.service';

@Component({
  selector: 'app-ingresar-palabra',
  templateUrl: './ingresar-palabra.component.html',
  styleUrls: ['./ingresar-palabra.component.css']
})
export class IngresarPalabraComponent {

  title = 'ahorcadoAngular';
  arrCoincidencias: string[] = []; // esto es para corregir!
  palabraAdivinar= '';
  arrAdivinar: string[] = [];
  letra = '';
  intentos: string[] = [];
  idx = 0;
  imagen = [
    '../../../assets/images/img1.png',
    '../../../assets/images/img2.png',
    '../../../assets/images/img3.png',
    '../../../assets/images/img4.png',
    '../../../assets/images/img5.png',
    '../../../assets/images/img6.png',
    '../../../assets/images/img7.png',
  ];

  constructor(private db: PalabraService){
    this.db.getConexion().then( ()=>{
      console.log('conexion exitosa!');
      this.setPalabra(this.db.getPalabraAleatoria());
    }).catch( (err)=>{
      console.log(err);
    });
  }

  setPalabra(palabra: string){
    this.arrAdivinar = palabra.split('');
    console.log(this.arrAdivinar);
    this.setArrAdivinar();
  }

  setArrAdivinar(){
    this.arrAdivinar.forEach( (letra)=>{
      this.arrCoincidencias.push('?');
    });
  }

  revisarPalabra(){
    let aciertos = 0;
    this.intentos.push(this.letra);
    this.arrAdivinar.forEach((letra, index: number)=>{
      if(this.letra === letra){
        this.arrCoincidencias[index] = letra;
        aciertos++;
      }
    });
    if(aciertos == 0){
      this.vidas();
    }
    this.reset();
  }

  vidas(){
    this.idx ++;
    console.log(this.idx);
  }

  reset(){
    setTimeout( ()=>{
      this.letra = '';
    },1000);
  }
}
