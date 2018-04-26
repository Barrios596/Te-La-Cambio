import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrearNuevaCuentaPage } from '../crear-nueva-cuenta/crear-nueva-cuenta';
import { MiAlbumPage } from '../mi-album/mi-album';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import {AngularFireAuth} from "angularfire2/auth";
import { User } from '../../models/User';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth ,public navCtrl: NavController, private toastCtrl: ToastController) {
  }
  goToCrearNuevaCuenta(params){
    if (!params) params = {};
    this.navCtrl.push(CrearNuevaCuentaPage);
  }goToMiAlbum(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
  async login(){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password)
      console.log(result);
      this.navCtrl.push(TabsControllerPage);
    }
    catch(e){
      console.error(e)
      let toast = this.toastCtrl.create({
        message: 'El correo ingresado no se encuentra registrado o la contraseña es incorrecta',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }
  }
  
}
