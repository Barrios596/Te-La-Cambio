import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrearNuevaCuentaPage } from '../crear-nueva-cuenta/crear-nueva-cuenta';
import { MiAlbumPage } from '../mi-album/mi-album';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToCrearNuevaCuenta(params){
    if (!params) params = {};
    this.navCtrl.push(CrearNuevaCuentaPage);
  }goToMiAlbum(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
}
