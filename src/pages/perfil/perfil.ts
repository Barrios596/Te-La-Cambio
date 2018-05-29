import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {AngularFireAuth} from 'angularfire2/auth';
import {ProveedorProvider} from "../../providers/proveedor/proveedor";
import {AngularFireDatabase, AngularFireList}    from 'angularfire2/database';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  private nombre: string;
  private usuario: string;
  private telefono: string;
  private departamento: string;


  constructor(public navCtrl: NavController, public pro: ProveedorProvider,
              public afDatabase: AngularFireDatabase, public afAuth: AngularFireAuth, private toastCtrl: ToastController) {
    this.pro.cargarRepetidas();
      this.nombre = this.pro.usuarioActual.nombre;
      this.telefono = this.pro.usuarioActual.telefono;
      console.log(this.telefono);
      this.departamento = this.pro.usuarioActual.departamento;
      //console.log(this.nombre);
  }
  guardar(){
    this.afDatabase.object(`profile/${this.afAuth.auth.currentUser.uid}/nombre`).set(this.nombre);
    this.afDatabase.object(`profile/${this.afAuth.auth.currentUser.uid}/telefono`).set(this.telefono);
    this.afDatabase.object(`profile/${this.afAuth.auth.currentUser.uid}/departamento`).set(this.departamento);
    let toast = this.toastCtrl.create({
      message: 'Los cambios fueron guardados',
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  goToLogin(params){
    if(!params) params={};
    console.log(this.afAuth.auth.currentUser.uid);
    //Se cierra sesión y se regresa a la página de login
    this.afAuth.auth.signOut();
    this.navCtrl.push(LoginPage);
  }
}