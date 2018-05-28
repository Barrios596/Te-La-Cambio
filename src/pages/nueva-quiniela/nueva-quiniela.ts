import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuinielaCreadaPage } from '../quiniela-creada/quiniela-creada';
import { QuinielasPage } from '../quinielas/quinielas';
import { MisQuinielasPage } from '../mis-quinielas/mis-quinielas';
import { UnirseAQuinielaPage } from '../unirse-aquiniela/unirse-aquiniela';
import { QuinielaUnidaPage } from '../quiniela-unida/quiniela-unida';
import {AngularFireDatabase}    from 'angularfire2/database';
import {Quiniela} from '../../models/quiniela'
import { UsuarioQuiniela } from '../../models/UsuarioQuiniela';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'page-nueva-quiniela',
  templateUrl: 'nueva-quiniela.html'
})
export class NuevaQuinielaPage {

    nombre: string;
    quiniela = {} as Quiniela;
    user: UsuarioQuiniela;

    constructor(public navCtrl: NavController, private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth) {

    }

    goToQuinielaCreada() {
        console.log(this.afAuth.auth.currentUser.uid);
        this.user = {
            idProfile: this.afAuth.auth.currentUser.uid,
            participa1: false,
            participa2: false,
            participa3: false,
            participa4: false,
            participa5: false,
            participa6: false,
            partido1: [0, 0],
            partido2: [0, 0],
            partido3: [0, 0],
            partido4: [0, 0],
            partido5: [0, 0],
            partido6: [0, 0]
        }
        let id=this.makeid();
        this.quiniela = {
            nombre: this.nombre,
            id: id,
            usuarios: [this.user]
        };
        this.afDatabase.object(`quiniela/${id}`).set(this.quiniela);
        let params = {
          codigo: id,
          name: this.nombre
        };
        this.navCtrl.push(QuinielaCreadaPage, params);
    }

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

  goToQuinielas(params){
    if (!params) params = {};
    this.navCtrl.push(QuinielasPage);
  }goToNuevaQuiniela(params){
    if (!params) params = {};
    this.navCtrl.push(NuevaQuinielaPage);
  }goToMisQuinielas(params){
    if (!params) params = {};
    this.navCtrl.push(MisQuinielasPage);
  }goToUnirseAQuiniela(params){
    if (!params) params = {};
    this.navCtrl.push(UnirseAQuinielaPage);
  }goToQuinielaUnida(params){
    if (!params) params = {};
    this.navCtrl.push(QuinielaUnidaPage);
  }
}
