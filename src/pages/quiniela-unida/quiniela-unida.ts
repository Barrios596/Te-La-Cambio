import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuinielasPage } from '../quinielas/quinielas';

@Component({
  selector: 'page-quiniela-unida',
  templateUrl: 'quiniela-unida.html'
})
export class QuinielaUnidaPage {

  constructor(public navCtrl: NavController) {
  }
  goToQuinielas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuinielasPage);
  }
  
}
