import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quiniela } from '../../models/quiniela';
import {AngularFireAuth} from "angularfire2/auth";
import { UsuarioQuiniela } from '../../models/UsuarioQuiniela';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-quiniela',
  templateUrl: 'quiniela.html',
})
export class QuinielaPage {
  quiniela: Quiniela;
  qid: string;
  user: UsuarioQuiniela;
  public itemRef: firebase.database.Reference;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quiniela = this.navParams.get('parametro');
    this.user = this.navParams.get('usuario');
    this.qid = this.quiniela.id;
    console.log(this.user.participa1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuinielaPage');
  }
  guardar(){
    for(var i = 0; i<this.quiniela.usuarios.length;i++){
      if(this.quiniela.usuarios[i].idProfile == this.user.idProfile){
        this.quiniela.usuarios[i] = this.user;
        break;
      }
    }
    this.itemRef = firebase.database().ref(`quiniela/${this.qid}/`);
    this.itemRef.update(this.quiniela);
  }

}
