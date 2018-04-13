import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuinielaUnidaPage } from '../quiniela-unida/quiniela-unida';

@Component({
  selector: 'page-unirse-aquiniela',
  templateUrl: 'unirse-aquiniela.html'
})
export class UnirseAQuinielaPage {

  constructor(public navCtrl: NavController) {
  }
  goToQuinielaUnida(params){
    if (!params) params = {};
    this.navCtrl.push(QuinielaUnidaPage);
  }
}
