import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  algo: any;

  constructor(private afs: AngularFireDatabase) {
    this.algo = this.afs.object('simulaciones/').snapshotChanges();

  }

  getBD(){
    return this.algo();
  }
}
