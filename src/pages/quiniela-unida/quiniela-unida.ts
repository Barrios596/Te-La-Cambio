import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuinielasPage } from '../quinielas/quinielas';
import firebase from 'firebase';
@Component({
  selector: 'page-quiniela-unida',
  templateUrl: 'quiniela-unida.html'
})
export class QuinielaUnidaPage {
  codigo: string;
  nombre: string;
  public itemRef: firebase.database.Reference;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.codigo = this.navParams.get('code');
    this.itemRef = firebase.database().ref(`quiniela/${this.codigo}/nombre`);
    this.itemRef.on('value',itemSnapshot =>{
      this.nombre = itemSnapshot.val()
    });
  }
  goToQuinielas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuinielasPage);
  }
  
}
