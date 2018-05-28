import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevaQuinielaPage } from '../nueva-quiniela/nueva-quiniela';
import { QuinielaCreadaPage } from '../quiniela-creada/quiniela-creada';
import { MisQuinielasPage } from '../mis-quinielas/mis-quinielas';
import { UnirseAQuinielaPage } from '../unirse-aquiniela/unirse-aquiniela';
import { QuinielaUnidaPage } from '../quiniela-unida/quiniela-unida';
import {ProveedorProvider} from '../../providers/proveedor/proveedor';

@Component({
  selector: 'page-quinielas',
  templateUrl: 'quinielas.html'
})
export class QuinielasPage {
  proveedor:ProveedorProvider;
  constructor(public navCtrl: NavController, public provider: ProveedorProvider) {
    this.proveedor = provider;
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
  }goToMisQuinielas(){
    let params ={
      proveedor:this.proveedor
    };
    this.navCtrl.push(MisQuinielasPage, params);
  }goToUnirseAQuiniela(params){
    if (!params) params = {};
    this.navCtrl.push(UnirseAQuinielaPage);
  }goToQuinielaUnida(params){
    if (!params) params = {};
    this.navCtrl.push(QuinielaUnidaPage);
  }
}
