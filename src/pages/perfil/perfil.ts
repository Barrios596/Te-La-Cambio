import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if(!params) params={};
    this.navCtrl.setRoot(LoginPage);
  }
}