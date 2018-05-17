import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Modal } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HelpPage } from '../help/help';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, AngularFireList}    from 'angularfire2/database';
import firebase from 'firebase';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {
  //cada país tiene un offset, que es el número de la primera estampa de la página
  offsetRusia: number;
  offsetArabia: number;
  offsetEgipto: number;
  offsetUruguay: number;
  offsetPortugal: number;
  offsetEspaña: number;
  offsetMarruecos: number;
  offsetIrán: number;
  offsetFrancia: number;
  offsetAustralia: number;
  offsetPerú: number;
  offsetArgentina: number;

  //el país es el que se manda desde la página de "Mi Album"
  pais: any;
  offset: number;
  //en números se guardan los números de las estampas de esta página
  numeros: number[];
  //en cantidades se guarda la cantidad que se tiene de cada estampa
  cantidades: Array<any> = [];
  //colores de cada boton
  colores: Array<String> = new Array(20);
  public itemRef: firebase.database.Reference;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) {
    //this.offset=0;
    this.offsetRusia = 20;
    this.offsetArabia = 40;
    this.offsetEgipto = 60;
    this.offsetUruguay = 80;
    this.offsetPortugal = 100;
    this.offsetEspaña = 120;
    this.offsetMarruecos = 140;
    this.offsetIrán = 160;
    this.offsetFrancia = 180;
    this.offsetAustralia = 200;
    this.offsetPerú = 220;
    this.offsetArgentina = 240;
    this.numeros = new Array(20);
    
    this.pais = this.navParams.get('pais');
    this.itemRef = firebase.database().ref(`profile/${afAuth.auth.currentUser.uid}/${this.pais}`)

    if(this.pais == "Rusia"){
      this.offset=this.offsetRusia;
    }
    else if(this.pais == "ArabiaSaudita"){
      this.offset=this.offsetArabia;
    }
    else if(this.pais == "Egipto"){
      this.offset=this.offsetEgipto;
    }
    else if(this.pais == "Uruguay"){
      this.offset=this.offsetUruguay;
    }
    else if(this.pais == "Portugal"){
      this.offset=this.offsetPortugal;
    }
    else if(this.pais == "España"){
      this.offset=this.offsetEspaña;
    }
    else if(this.pais == "Marruecos"){
      this.offset=this.offsetMarruecos;
    }
    else if(this.pais == "Irán"){
      this.offset=this.offsetIrán;
    }
    else if(this.pais == "Francia"){
      this.offset=this.offsetFrancia;
    }
    else if(this.pais == "Australia"){
      this.offset=this.offsetAustralia;
    }
    else if(this.pais == "Perú"){
      this.offset=this.offsetPerú;
    }
    else if(this.pais == "Argentina"){
      this.offset=this.offsetArgentina;
    }
    for (var i = 0; i < this.numeros.length; i++) {
      this.numeros[i] = this.offset+i;
      //console.log(this.numeros[i]);
    }

    this.itemRef.on('value', itemSnapshot => {
      this.cantidades = [];
      itemSnapshot.forEach( itemSnap => {
        this.cantidades.push(itemSnap.val());
        console.log(this.cantidades[0]);
        
        return false;
      });
      for(var i = 0; i<this.cantidades.length;i++){
        this.actualizarColor(i);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
  }
  //método que se activa al hacer click en uno de los botones de las estampas
  actualizarEstampa(i:number){
    //Si todavia no tenia la estampa
    if(this.cantidades[i] == 0 ){
      //ahora la marca como pegada
      this.cantidades[i] = 1;
    }
    //Si ya la tenía pegada
    else if(this.cantidades[i] == 1 ){
      //ahora la marca como repetida
      this.cantidades[i] = 2;
    }
    else{
      this.cantidades[i]= 0;
    }
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}/${this.pais}`).set(this.cantidades);
    })
    this.actualizarColor(i);
  }
  //metod que actualiza los colores de los componentes
  actualizarColor(i:number){
    if(this.cantidades[i] == 0){
      this.colores[i] = '#e8812e';
      console.log('naranja');
    }
    else if(this.cantidades[i] == 1){
      this.colores[i] = '#3fc157';
      console.log('verde');
    }
    else{
      this.colores[i] = '#e8ef26';
      console.log('amarillo');
    }
  }

  openHelp(){
    this.navCtrl.push(HelpPage);
  }
}
