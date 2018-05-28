import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Profile } from '../../models/profile';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, AngularFireList}    from 'angularfire2/database';
import {AlertController} from 'ionic-angular';
import {ProveedorProvider} from '../../providers/proveedor/proveedor';

@Component({
  selector: 'page-cambiar-estampas',
  templateUrl: 'cambiar-estampas.html'
})
export class CambiarEstampasPage {
  offsetIniciales: number;
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
  salida: string;
  info: string;
  usuarioActual: Profile;
  usuarios: Array<Profile>;
  auth: AngularFireAuth;
  public itemRef: firebase.database.Reference;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
  public alertCtrl: AlertController, public proveedor: ProveedorProvider) {
    this.offsetIniciales = 0;
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
    this.auth = afAuth;
    this.usuarios = this.proveedor.usuarios;
  }

  estampasRepetidas(s:string){
    let siencontro = false;
    this.salida="";
    for(var i = 0;i<this.usuarios.length;i++){
      if(s == this.usuarios[i].id){
        this.usuarioActual = this.usuarios[i];
        break;
      }
    }
    for(var iniciales= 0;iniciales<20;iniciales++){
      if(this.usuarioActual.Iniciales[iniciales]>1){
        this.salida=this.salida+String(this.offsetIniciales+iniciales)+", ";
        siencontro = true;
      }
    }
    for(var rusia= 0;rusia<20;rusia++){
      if(this.usuarioActual.Rusia[rusia]>1){
        this.salida=this.salida+String(this.offsetRusia+rusia)+", ";
        siencontro = true;
      }
    }
    for(var arabia= 0;arabia<20;arabia++){
      if(this.usuarioActual.ArabiaSaudita[arabia]>1){
        this.salida=this.salida+String(this.offsetArabia+arabia)+", ";
        siencontro = true;
      }
    }
    for(var egipto= 0;egipto<20;egipto++){
      if(this.usuarioActual.Egipto[egipto]>1){
        this.salida=this.salida+String(this.offsetEgipto+egipto)+", ";
        siencontro = true;
      }
    }
    for(var uruguay= 0;uruguay<20;uruguay++){
      if(this.usuarioActual.Uruguay[uruguay]>1){
        this.salida=this.salida+String(this.offsetUruguay+uruguay)+", ";
        siencontro = true;
      }
    }
    for(var portugal= 0;portugal<20;portugal++){
      if(this.usuarioActual.Portugal[portugal]>1){
        this.salida=this.salida+String(this.offsetPortugal+portugal)+", ";
        siencontro = true;
      }
    }
    for(var españa= 0;españa<20;españa++){
      if(this.usuarioActual.España[españa]>1){
        this.salida=this.salida+String(this.offsetEspaña+españa)+", ";
        siencontro = true;
      }
    }
    for(var marruecos= 0;marruecos<20;marruecos++){
      if(this.usuarioActual.Marruecos[marruecos]>1){
        this.salida=this.salida+String(this.offsetMarruecos+marruecos)+", ";
        siencontro = true;
      }
    }
    for(var iran= 0;iran<20;iran++){
      if(this.usuarioActual.Irán[iran]>1){
        this.salida=this.salida+String(this.offsetIrán+iran)+", ";
        siencontro = true;
      }
    }
    for(var francia= 0;francia<20;francia++){
      if(this.usuarioActual.Francia[francia]>1){
        this.salida=this.salida+String(this.offsetFrancia+francia)+", ";
        siencontro = true;
      }
    }
    for(var australia= 0;australia<20;australia++){
      if(this.usuarioActual.Australia[australia]>1){
        this.salida=this.salida+String(this.offsetAustralia+australia)+", ";
        siencontro = true;
      }
    }
    for(var peru= 0;peru<20;peru++){
      if(this.usuarioActual.Perú[peru]>1){
        this.salida=this.salida+String(this.offsetPerú+peru)+", ";
        siencontro = true;
      }
    }
    for(var argentina= 0;argentina<20;argentina++){
      if(this.usuarioActual.Argentina[argentina]>1){
        this.salida=this.salida+String(this.offsetArgentina+argentina)+", ";
        siencontro = true;
      }
    }
    if(!siencontro){
      return "Este usuario no tiene estampas repetidas.";
    }
    return this.salida.substring(0,this.salida.length-2);
  }

  showInfo(s:string){
    this.info=this.estampasRepetidas(s);
    let alert = this.alertCtrl.create({
      title: "Estampas repetidas de este usuario",
      subTitle: this.info,
      buttons: ['OK']
    })
    alert.present();
  }
  
}
