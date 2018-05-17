import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
  }
  goToLogin(params){
    if(!params) params={};
    console.log(this.afAuth.auth.currentUser.uid);
    //Se cierra sesión y se regresa a la página de login
    this.afAuth.auth.signOut();
    this.navCtrl.push(LoginPage);
  }
}