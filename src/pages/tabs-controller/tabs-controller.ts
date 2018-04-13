import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { QuinielasPage } from '../quinielas/quinielas';
import { MiAlbumPage } from '../mi-album/mi-album';
import { CambiarEstampasPage } from '../cambiar-estampas/cambiar-estampas';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = QuinielasPage;
  tab2Root: any = MiAlbumPage;
  tab3Root: any = CambiarEstampasPage;
  tab4Root: any = PerfilPage;
  constructor(public navCtrl: NavController) {
  }

  goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilPage);
  }
}
