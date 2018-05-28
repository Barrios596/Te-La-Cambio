import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { QuinielasPage } from '../quinielas/quinielas';
import { NuevaQuinielaPage } from '../nueva-quiniela/nueva-quiniela';
import { MisQuinielasPage } from '../mis-quinielas/mis-quinielas';
import { UnirseAQuinielaPage } from '../unirse-aquiniela/unirse-aquiniela';
import { QuinielaUnidaPage } from '../quiniela-unida/quiniela-unida';

@Component({
  selector: 'page-quiniela-creada',
  templateUrl: 'quiniela-creada.html'
})
export class QuinielaCreadaPage {
  codigo: string;
  nombre: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.codigo=this.navParams.get('codigo');
    this.nombre=this.navParams.get('name');
  }
  goToQuinielas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuinielasPage);
  }goToNuevaQuiniela(params){
    if (!params) params = {};
    this.navCtrl.push(NuevaQuinielaPage);
  }goToQuinielaCreada(params){
    if (!params) params = {};
    this.navCtrl.push(QuinielaCreadaPage);
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
