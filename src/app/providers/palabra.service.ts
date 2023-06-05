import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  algo: any;

  constructor(private afs: AngularFireDatabase) {
    this.afs.object('simulaciones/').snapshotChanges().subscribe( (datos) => {
     console.log(datos.payload.val()) ;
     this.algo = datos.payload.val();
    });

  }

  getBD(){
    return this.algo;
  }
}
