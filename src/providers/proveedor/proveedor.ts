import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase}    from 'angularfire2/database';
import { UsuarioQuiniela } from '../../models/UsuarioQuiniela';
import { Quiniela } from '../../models/quiniela';
import firebase from 'firebase';
import { Profile } from '../../models/profile';

@Injectable()
export class ProveedorProvider {

  public itemRef: firebase.database.Reference;
  id: string;
  quinielas: Array<Quiniela>;
  usuarios: Array<Profile>;
  auth: AngularFireAuth;
  constructor(public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, ) {
    console.log('Hello ProveedorProvider Provider');
    this.auth=afAuth;
    this.cargarQuinielas();
    this.id =  afAuth.auth.currentUser.uid;
  }

  cargarQuinielas(){
    this.itemRef = firebase.database().ref(`quiniela/`);
    this.itemRef.on('value', itemSnapshot => {
      this.quinielas = [];
      itemSnapshot.forEach( itemSnap => {
        let quiniela: Quiniela = itemSnap.val();
        for (var i = 0; i<quiniela.usuarios.length;i++){
          if(quiniela.usuarios[i].idProfile==this.id){
            this.quinielas.push(quiniela);
            console.log(quiniela);
            break;
          }
        }
        return false;
      });
    });
  }
  cargarRepetidas(){
    this.itemRef = firebase.database().ref(`profile/`);
    this.itemRef.on('value', itemSnapshot => {
      this.usuarios = [];
      itemSnapshot.forEach( itemSnap => {
        if(itemSnap.key != this.auth.auth.currentUser.uid){
          this.usuarios.push(itemSnap.val());
          console.log(itemSnap.val());
        }
        return false;
      });
    });
  }

}
