import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevaQuinielaPage } from '../nueva-quiniela/nueva-quiniela';
import { QuinielaCreadaPage } from '../quiniela-creada/quiniela-creada';
import { MisQuinielasPage } from '../mis-quinielas/mis-quinielas';
import { UnirseAQuinielaPage } from '../unirse-aquiniela/unirse-aquiniela';
import { QuinielaUnidaPage } from '../quiniela-unida/quiniela-unida';

@Component({
  selector: 'page-quinielas',
  templateUrl: 'quinielas.html'
})
export class QuinielasPage {

  constructor(public navCtrl: NavController) {
  }
  goToNuevaQuiniela(params){
    if (!params) params = {};
    this.navCtrl.push(NuevaQuinielaPage);
  }goToQuinielaCreada(params){
    if (!params) params = {};
    this.navCtrl.push(QuinielaCreadaPage);
  }goToQuinielas(params){
    if (!params) params = {};
    this.navCtrl.push(QuinielasPage);
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
