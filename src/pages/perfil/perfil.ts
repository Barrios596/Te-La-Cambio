import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase}    from 'angularfire2/database';
import {ProveedorProvider} from "../../providers/proveedor/proveedor";

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
              public afAuth: AngularFireAuth) {
    this.pro.cargarRepetidas();
      this.nombre = this.pro.usuarioActual.nombre;
      this.usuario = this.pro.usuarioActual.email;
      this.telefono = this.pro.usuarioActual.telefono;
      this.departamento = this.pro.usuarioActual.departamento;
      //console.log(this.nombre);
  }
  goToLogin(params){
    if(!params) params={};
    console.log(this.afAuth.auth.currentUser.uid);
    //Se cierra sesión y se regresa a la página de login
    this.afAuth.auth.signOut();
    this.navCtrl.push(LoginPage);
  }
}