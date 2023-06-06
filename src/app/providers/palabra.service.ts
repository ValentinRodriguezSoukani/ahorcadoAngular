import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  algo: any;

  constructor(private afs: AngularFireDatabase) {

    this.getConexion().then( ()=>{
      console.log('conexion exitosa!');
      this.getBD();
    }).catch( (err)=>{
      console.log(err);
    });

    this.updateBD().then( ()=>{
      console.log('Modificación exitosa!');
    }).catch( (err) => {
      console.log('Ups!.. Ocurrió un error!');
      console.log(err);
    });
  }

  getBD(){
    console.log(this.algo);
    return this.algo;
  }

  getConexion(){
      return new Promise( (resolve, reject)=>{
        this.afs.object('simulacione/').snapshotChanges().subscribe( (datos) => {
        console.log(datos);
        if(datos.payload.exists()){
          resolve(this.algo = datos.payload.val());
        }else{
          reject(new Error('Ocurrió un problema en BD'));
        }
      });
     });
  }

  updateBD(){
    return this.afs.object('nuevo/').update(
      {'hola': 'esto es nuevo!'}
    );
  }
}
