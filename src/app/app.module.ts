import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { QuinielasPage } from '../pages/quinielas/quinielas';
import { MiAlbumPage } from '../pages/mi-album/mi-album';
import { CambiarEstampasPage } from '../pages/cambiar-estampas/cambiar-estampas';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { CrearNuevaCuentaPage } from '../pages/crear-nueva-cuenta/crear-nueva-cuenta';
import { PerfilPage } from '../pages/perfil/perfil';
import { NuevaQuinielaPage } from '../pages/nueva-quiniela/nueva-quiniela';
import { MisQuinielasPage } from '../pages/mis-quinielas/mis-quinielas';
import { UnirseAQuinielaPage } from '../pages/unirse-aquiniela/unirse-aquiniela';
import { QuinielaCreadaPage } from '../pages/quiniela-creada/quiniela-creada';
import { QuinielaUnidaPage } from '../pages/quiniela-unida/quiniela-unida';
import { AngularFireModule   } from 'angularfire2';
import { AngularFireAuthModule} from "angularfire2/auth";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    QuinielasPage,
    MiAlbumPage,
    CambiarEstampasPage,
    TabsControllerPage,
    LoginPage,
    CrearNuevaCuentaPage,
    PerfilPage,
    NuevaQuinielaPage,
    MisQuinielasPage,
    UnirseAQuinielaPage,
    QuinielaCreadaPage,
    QuinielaUnidaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuinielasPage,
    MiAlbumPage,
    CambiarEstampasPage,
    TabsControllerPage,
    LoginPage,
    CrearNuevaCuentaPage,
    PerfilPage,
    NuevaQuinielaPage,
    MisQuinielasPage,
    UnirseAQuinielaPage,
    QuinielaCreadaPage,
    QuinielaUnidaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}