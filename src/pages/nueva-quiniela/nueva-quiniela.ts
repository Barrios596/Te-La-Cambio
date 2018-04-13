import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuinielaCreadaPage } from '../quiniela-creada/quiniela-creada';
import { QuinielasPage } from '../quinielas/quinielas';
import { MisQuinielasPage } from '../mis-quinielas/mis-quinielas';
import { UnirseAQuinielaPage } from '../unirse-aquiniela/unirse-aquiniela';
import { QuinielaUnidaPage } from '../quiniela-unida/quiniela-unida';

@Component({
  selector: 'page-nueva-quiniela',
  templateUrl: 'nueva-quiniela.html'
})
export class NuevaQuinielaPage {

  constructor(public navCtrl: NavController) {
  }
  goToQuinielaCreada(params){
    if (!params) params = {};
    this.navCtrl.push(QuinielaCreadaPage);
  }goToQuinielas(params){
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
