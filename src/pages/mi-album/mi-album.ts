import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {EquipoPage} from '../equipo/equipo';

@Component({
  selector: 'page-mi-album',
  templateUrl: 'mi-album.html'
})
export class MiAlbumPage {

  constructor(public navCtrl: NavController) {

  }
  
  goToEquipo(params){
    let data = {pais: params};
    console.log(data);
    this.navCtrl.push(EquipoPage,data);
  }

}
