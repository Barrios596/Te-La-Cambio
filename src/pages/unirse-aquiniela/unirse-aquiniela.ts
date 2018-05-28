import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuinielaUnidaPage } from '../quiniela-unida/quiniela-unida';
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase}    from 'angularfire2/database';
import { UsuarioQuiniela } from '../../models/UsuarioQuiniela';
import { Quiniela } from '../../models/quiniela';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-unirse-aquiniela',
  templateUrl: 'unirse-aquiniela.html'
})
export class UnirseAQuinielaPage {
  codigo: string;
  user: UsuarioQuiniela;
  quiniela = {} as Quiniela;  
  public itemRef: firebase.database.Reference;
  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase) {
    this.user = {
      idProfile: this.afAuth.auth.currentUser.uid,
      participa1:false,
      participa2:false,
      participa3:false,
      participa4:false,
      participa5:false,
      participa6:false,
      partido1: [0, 0],
      partido2: [0, 0],
      partido3: [0, 0],
      partido4: [0, 0],
      partido5: [0, 0],
      partido6: [0, 0]
    }
  }

  unirseAQuiniela(){
    this.itemRef = firebase.database().ref(`quiniela/${this.codigo}/`);
    this.itemRef.once('value',itemSnapshot =>{
      this.quiniela = itemSnapshot.val();
      if(this.quiniela){
        console.log(itemSnapshot.val())
        this.goToQuinielaUnida();
      }
      else{
        let toast = this.toastCtrl.create({
          message: 'La quiniela ingresada no existe, prueba con otro código.',
          duration: 3000,
          position: 'bottom'
        });
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
        toast.present();
      }
      return false;
    });
  }
  goToQuinielaUnida(){
    console.log(this.quiniela.nombre);
    this.quiniela.usuarios.push(this.user);
    this.itemRef.update(this.quiniela);
    let params = {
      code : this.codigo
    };
    this.navCtrl.push(QuinielaUnidaPage,params);
  }
}
