import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import { User } from '../../models/User';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-crear-nueva-cuenta',
  templateUrl: 'crear-nueva-cuenta.html'
})
export class CrearNuevaCuentaPage {
  user = {} as User;
  constructor(private afAuth: AngularFireAuth ,public navCtrl: NavController, private toastCtrl: ToastController) {
  }
  async registrar(user: User){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      console.log(result);  
      this.navCtrl.pop();
    }
    catch(e){
      console.error(e);
      let toast = this.toastCtrl.create({
        message: 'El correo electrónico ingresado ya ha sido usado para otra cuenta',
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
