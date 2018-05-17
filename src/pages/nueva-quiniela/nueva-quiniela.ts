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
            partido1: [-1, -1],
            partido2: [-1, -1],
            partido3: [-1, -1],
            partido4: [-1, -1],
            partido5: [-1, -1],
            partido6: [-1, -1]
        }
        this.quiniela = {
            nombre: this.nombre,
            usuarios: [this.user]
        };
        let id=this.makeid();
        this.afDatabase.object(`quiniela/${id}`).set(this.quiniela);
        let params = {
          codigo: id

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
