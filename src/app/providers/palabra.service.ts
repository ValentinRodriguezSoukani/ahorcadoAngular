import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { Palabra } from '../models/palabra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

 palabras: any[] =[];

  constructor(private afs: AngularFireDatabase) {
    // Constructor de la clase PalabraService. Recibe una instancia de AngularFireDatabase.
    // AngularFireDatabase es una herramienta de Angular para interactuar con la base de datos en tiempo real de Firebase.
  }

  getBD(){
    console.log(this.palabras);
    return this.palabras;
  }
  // Devuelve la variable "palabras" y la imprime en la consola.

  getConexion(){
      return new Promise( (resolve, reject)=>{
        this.afs.object('palabras/').snapshotChanges().subscribe( (datos: any) => {
        console.log(datos);
        if(datos.payload.exists()){
          resolve(this.palabras = datos.payload.val());
        }else{
          reject(new Error('Ocurrió un problema en BD'));
        }
      });
     });
  }
  // Establece una conexión con la base de datos de Firebase y recupera los datos de la colección 'palabras'.
  // Devuelve una promesa que se resuelve con los datos si existen, o se rechaza con un error si no existen.

  updateBD(){
    return this.afs.object('palabras/').set(this.palabras);
  }
  // Actualiza la base de datos de Firebase con los datos de la variable "palabras".

  getArrPalabras(): Palabra[]{
    return this.palabras;
  }
  // Devuelve el arreglo de palabras almacenadas en la variable "palabras".

  agregarPalabra(palabra: string){
    const p = new Palabra(palabra);
    this.palabras.push(p);
    return this.updateBD();
  }
  // Agrega una nueva palabra al arreglo "palabras" y luego actualiza la base de datos.

  getPalabraAleatoria(): string{
    const idx = this.idxAleatorio(this.palabras.length);
    console.log(this.palabras[idx].palabra);
    return this.palabras[idx].palabra;
  }
  // Obtiene una palabra aleatoria del arreglo "palabras" y la devuelve.

  idxAleatorio(max: number): number{
    return Math.floor(Math.random() * max);
  }
  // Genera un índice aleatorio entre 0 y el tamaño máximo especificado.

}