import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Profile } from '../../models/profile';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, AngularFireList}    from 'angularfire2/database';
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-cambiar-estampas',
  templateUrl: 'cambiar-estampas.html'
})
export class CambiarEstampasPage {

  offsetRusia: number;
  offsetArabia: number;
  offsetEgipto: number;
  offsetUruguay: number;
  offsetPortugal: number;
  offsetEspaña: number;
  offsetMarruecos: number;
  offsetIrán: number;
  offsetFrancia: number;
  offsetAustralia: number;
  offsetPerú: number;
  offsetArgentina: number;
  salida: string;
  info: string;
  usuarioActual: Profile;
  usuarios: Array<Profile> = [];
  public itemRef: firebase.database.Reference;
  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
  public alertCtrl: AlertController) {
      
    this.offsetRusia = 20;
    this.offsetArabia = 40;
    this.offsetEgipto = 60;
    this.offsetUruguay = 80;
    this.offsetPortugal = 100;
    this.offsetEspaña = 120;
    this.offsetMarruecos = 140;
    this.offsetIrán = 160;
    this.offsetFrancia = 180;
    this.offsetAustralia = 200;
    this.offsetPerú = 220;
    this.offsetArgentina = 240;

    this.itemRef = firebase.database().ref(`profile/`);
    this.itemRef.on('value', itemSnapshot => {
      this.usuarios = [];
      itemSnapshot.forEach( itemSnap => {
        if(itemSnap.key != afAuth.auth.currentUser.uid){
          this.usuarios.push(itemSnap.val());
          console.log(itemSnap.val());
        }
        return false;
      });
    });
  }

  estampasRepetidas(s:string){
    let siencontro = false;
    this.salida="";
    for(var i = 0;i<this.usuarios.length;i++){
      if(s == this.usuarios[i].id){
        this.usuarioActual = this.usuarios[i];
        break;
      }
    }
    for(var rusia= 0;rusia<20;rusia++){
      if(this.usuarioActual.Rusia[rusia]>1){
        this.salida=this.salida+String(this.offsetRusia+rusia)+", ";
        siencontro = true;
      }
    }
    if(!siencontro){
      return "Este usuario no tiene estampas repetidas.";
    }
    return this.salida.substring(0,this.salida.length-2);
  }

  showInfo(s:string){
    this.info=this.estampasRepetidas(s);
    let alert = this.alertCtrl.create({
      title: "Estampas repetidas de este usuario",
      subTitle: this.info,
      buttons: ['OK']
    })
    alert.present();
  }
  
}
