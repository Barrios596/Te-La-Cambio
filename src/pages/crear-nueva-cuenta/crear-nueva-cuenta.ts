import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import { User } from '../../models/User';
import { ToastController } from 'ionic-angular';
import {AngularFireDatabase}    from 'angularfire2/database';
import { Profile } from '../../models/profile';

@Component({
  selector: 'page-crear-nueva-cuenta',
  templateUrl: 'crear-nueva-cuenta.html'
})
export class CrearNuevaCuentaPage {
  user = {} as User;
  profile = {} as Profile
  constructor(private afAuth: AngularFireAuth ,public navCtrl: NavController, private toastCtrl: ToastController, private afDatabase: AngularFireDatabase) {
  }
  async registrar(user: User){
    try{
      this.profile.iniciales = [0,0,0,0,0,0,0,0];
      this.profile.estadios = [0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.Rusia = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.ArabiaSaudita = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.Egipto = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.Uruguay = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.Portugal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.España = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.Marruecos = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.Irán = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.Francia = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.Australia = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.Perú = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      this.profile.Argentina = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      this.profile.id = this.afAuth.auth.currentUser.uid;
      console.log(result);  
      this.afAuth.authState.take(1).subscribe(auth => {
        this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      })
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
