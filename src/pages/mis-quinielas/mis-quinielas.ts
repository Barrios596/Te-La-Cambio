import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase}    from 'angularfire2/database';
import { UsuarioQuiniela } from '../../models/UsuarioQuiniela';
import { Quiniela } from '../../models/quiniela';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import {QuinielaPage} from '../quiniela/quiniela';
import { AlertController } from 'ionic-angular';
import {ProveedorProvider} from '../../providers/proveedor/proveedor';

@Component({
  selector: 'page-mis-quinielas',
  templateUrl: 'mis-quinielas.html'
})
export class MisQuinielasPage {
  quinielas: Array<Quiniela>;
  usuario: UsuarioQuiniela;
  constructor(public afDatabase: AngularFireDatabase, public navCtrl: NavController, public afAuth: AngularFireAuth, public alertCtrl: AlertController, public proveedor: ProveedorProvider, public navParams: NavParams) {
    this.quinielas = this.proveedor.quinielas;
  }
  ionViewDidLoad(){
    //this.proveedor.cargarQuinielas();
  }

  irAQuiniela(quiniela: Quiniela){
    for(var i = 0; i < quiniela.usuarios.length;i++){
      if(quiniela.usuarios[i].idProfile == this.afAuth.auth.currentUser.uid){
        this.usuario = quiniela.usuarios[i];
      }
    }
    let params = {
      parametro: quiniela,
      usuario: this.usuario 
    };
    this.navCtrl.push(QuinielaPage,params);
  }

  salirDeQuiniela(quiniela: Quiniela){
    let confirm = this.alertCtrl.create({
      title: 'Confirmar salida',
      message: '¿Está seguro que desea salir de la quiniela '+quiniela.nombre+'?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Salir',
          handler: () => {
            let nuevasQuinielas = [];
            for (var i = 0; i<this.quinielas.length;i++){
              if(this.quinielas[i].id!=quiniela.id){
                nuevasQuinielas.push(this.quinielas[i]);
              }
            }
            this.quinielas = nuevasQuinielas;
            let nuevosUsuarios = [];
            if(quiniela.usuarios.length>1){
            for(var j = 0; j<quiniela.usuarios.length;j++){
              if(quiniela.usuarios[j].idProfile!=this.afAuth.auth.currentUser.uid){
                nuevosUsuarios.push(quiniela.usuarios[j]);
              }
            }
            this.afDatabase.object(`quiniela/${quiniela.id}/usuarios`).set(nuevosUsuarios);
            }else{
              this.afDatabase.object(`quiniela/${quiniela.id}`).remove();
            }
          }
        }
      ]
    });
    confirm.present();
  }
  
}
