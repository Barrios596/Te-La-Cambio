webpackJsonp([2],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_controller_tabs_controller__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, navCtrl, toastCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.user = {};
    }
    LoginPage.prototype.goToCrearNuevaCuenta = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__crear_nueva_cuenta_crear_nueva_cuenta__["a" /* CrearNuevaCuentaPage */]);
    };
    LoginPage.prototype.goToMiAlbum = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        toast = this.toastCtrl.create({
                            message: 'El correo ingresado no se encuentra registrado o la contraseña es incorrecta.',
                            duration: 3000,
                            position: 'top'
                        });
                        toast.onDidDismiss(function () {
                            console.log('Dismissed toast');
                        });
                        toast.present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\login\login.html"*/'<ion-content padding id="page5" style="background-color:#ffffff">\n  <div id="login-container1">\n    <img src="assets/img/zLd2uKWTbOfIIO22i2AL_Logopit_1523240444463.png" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n  <form id="login-form1">\n    \n    <ion-list id="login-list1">\n      <ion-item id="login-input1">\n        <ion-label></ion-label>\n        <ion-input type="email" placeholder="Correo Electrónico" [(ngModel)]="user.email" name="correo"></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label></ion-label>\n        <ion-input type="password" placeholder="Contraseña" [(ngModel)]="user.password" name="contrasenia"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="width:300px;height:23px;" id="login-spacer1"></div>\n    <button id="login-button1" on-click="login(user)" ion-button color="olivo" block >\n      Iniciar Sesión\n    </button>\n    <button id="login-button2"  ion-button clear color="dark" block style="font-weight:400;font-size:15px;" on-click="goToCrearNuevaCuenta()">\n      Toca aquí para crear una cuenta nueva\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevaQuinielaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiniela_creada_quiniela_creada__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quinielas_quinielas__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mis_quinielas_mis_quinielas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unirse_aquiniela_unirse_aquiniela__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quiniela_unida_quiniela_unida__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NuevaQuinielaPage = /** @class */ (function () {
    function NuevaQuinielaPage(navCtrl, afDatabase, afAuth) {
        this.navCtrl = navCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.quiniela = {};
    }
    NuevaQuinielaPage_1 = NuevaQuinielaPage;
    NuevaQuinielaPage.prototype.goToQuinielaCreada = function () {
        console.log(this.afAuth.auth.currentUser.uid);
        this.user = {
            idProfile: this.afAuth.auth.currentUser.uid,
            partido1: [-1, -1],
            partido2: [-1, -1],
            partido3: [-1, -1],
            partido4: [-1, -1],
            partido5: [-1, -1],
            partido6: [-1, -1]
        };
        this.quiniela = {
            nombre: this.nombre,
            usuarios: [this.user]
        };
        var id = this.makeid();
        this.afDatabase.object("quiniela/" + id).set(this.quiniela);
        var params = {
            codigo: id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__quiniela_creada_quiniela_creada__["a" /* QuinielaCreadaPage */], params);
    };
    NuevaQuinielaPage.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    NuevaQuinielaPage.prototype.goToQuinielas = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quinielas_quinielas__["a" /* QuinielasPage */]);
    };
    NuevaQuinielaPage.prototype.goToNuevaQuiniela = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(NuevaQuinielaPage_1);
    };
    NuevaQuinielaPage.prototype.goToMisQuinielas = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mis_quinielas_mis_quinielas__["a" /* MisQuinielasPage */]);
    };
    NuevaQuinielaPage.prototype.goToUnirseAQuiniela = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__unirse_aquiniela_unirse_aquiniela__["a" /* UnirseAQuinielaPage */]);
    };
    NuevaQuinielaPage.prototype.goToQuinielaUnida = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__quiniela_unida_quiniela_unida__["a" /* QuinielaUnidaPage */]);
    };
    NuevaQuinielaPage = NuevaQuinielaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nueva-quiniela',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\nueva-quiniela\nueva-quiniela.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Nueva Quiniela\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8" style="background-color:#9BC637;">\n  <img src="assets/img/zm8W4DPbRiuUgfzAb3d6_Vista-kate.png" style="display:block;width:25%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h4 id="nuevaQuiniela-heading10" style="color:#FFFFFF;text-align:center;">\n    Ingresa el nombre de la quiniela:\n  </h4>\n  <form id="nuevaQuiniela-form5">\n    <ion-item id="nuevaQuiniela-input10">\n      <ion-label></ion-label>\n      <ion-input type="text" [(ngModel)]="nombre" placeholder="Nombre" name="nombre"></ion-input>\n    </ion-item>\n  </form>\n  <button id="nuevaQuiniela-button10" ion-button color="dark" block on-click="goToQuinielaCreada()">\n    Crear quiniela\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\nueva-quiniela\nueva-quiniela.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], NuevaQuinielaPage);
    return NuevaQuinielaPage;
    var NuevaQuinielaPage_1;
}());

//# sourceMappingURL=nueva-quiniela.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuinielaCreadaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quinielas_quinielas__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nueva_quiniela_nueva_quiniela__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mis_quinielas_mis_quinielas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unirse_aquiniela_unirse_aquiniela__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quiniela_unida_quiniela_unida__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuinielaCreadaPage = /** @class */ (function () {
    function QuinielaCreadaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codigo = this.navParams.get('codigo');
    }
    QuinielaCreadaPage_1 = QuinielaCreadaPage;
    QuinielaCreadaPage.prototype.goToQuinielas = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__quinielas_quinielas__["a" /* QuinielasPage */]);
    };
    QuinielaCreadaPage.prototype.goToNuevaQuiniela = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__nueva_quiniela_nueva_quiniela__["a" /* NuevaQuinielaPage */]);
    };
    QuinielaCreadaPage.prototype.goToQuinielaCreada = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(QuinielaCreadaPage_1);
    };
    QuinielaCreadaPage.prototype.goToMisQuinielas = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mis_quinielas_mis_quinielas__["a" /* MisQuinielasPage */]);
    };
    QuinielaCreadaPage.prototype.goToUnirseAQuiniela = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__unirse_aquiniela_unirse_aquiniela__["a" /* UnirseAQuinielaPage */]);
    };
    QuinielaCreadaPage.prototype.goToQuinielaUnida = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__quiniela_unida_quiniela_unida__["a" /* QuinielaUnidaPage */]);
    };
    QuinielaCreadaPage = QuinielaCreadaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quiniela-creada',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quiniela-creada\quiniela-creada.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12" style="background-color:#9BC637;">\n  <h4 id="quinielaCreada-heading14" style="color:#002626;font-weight:400;text-align:center;">\n    Quiniela creada, comparte el siguiente código con tus amigos para que puedan unirse a tu quiniela:\n  </h4>\n  <form id="quinielaCreada-form9">\n    <ion-item id="quinielaCreada-textarea3">\n      <ion-label>\n        Código:\n      </ion-label>\n      <ion-input placeholder="" [(ngModel)]="codigo" name="codigo">\n      </ion-input>\n    </ion-item>\n  </form>\n  <h4 id="quinielaCreada-heading15" style="color:#002626;font-weight:400;text-align:center;">\n    Tu quiniela aparece ahora en la sección de "Mis quinielas".\n  </h4>\n  <button id="quinielaCreada-button12" ion-button color="dark" block on-click="goToQuinielas()">\n    Regresar a quinielas\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quiniela-creada\quiniela-creada.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], QuinielaCreadaPage);
    return QuinielaCreadaPage;
    var QuinielaCreadaPage_1;
}());

//# sourceMappingURL=quiniela-creada.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_help__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EquipoPage = /** @class */ (function () {
    function EquipoPage(navCtrl, navParams, modalCtrl, afAuth, afDatabase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        //en cantidades se guarda la cantidad que se tiene de cada estampa
        this.cantidades = [];
        //colores de cada boton
        this.colores = new Array(20);
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
        this.itemRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("profile/" + afAuth.auth.currentUser.uid + "/" + this.pais);
        if (this.pais == "Rusia") {
            this.offset = this.offsetRusia;
        }
        else if (this.pais == "ArabiaSaudita") {
            this.offset = this.offsetArabia;
        }
        else if (this.pais == "Egipto") {
            this.offset = this.offsetEgipto;
        }
        else if (this.pais == "Uruguay") {
            this.offset = this.offsetUruguay;
        }
        else if (this.pais == "Portugal") {
            this.offset = this.offsetPortugal;
        }
        else if (this.pais == "España") {
            this.offset = this.offsetEspaña;
        }
        else if (this.pais == "Marruecos") {
            this.offset = this.offsetMarruecos;
        }
        else if (this.pais == "Irán") {
            this.offset = this.offsetIrán;
        }
        else if (this.pais == "Francia") {
            this.offset = this.offsetFrancia;
        }
        else if (this.pais == "Australia") {
            this.offset = this.offsetAustralia;
        }
        else if (this.pais == "Perú") {
            this.offset = this.offsetPerú;
        }
        else if (this.pais == "Argentina") {
            this.offset = this.offsetArgentina;
        }
        for (var i = 0; i < this.numeros.length; i++) {
            this.numeros[i] = this.offset + i;
            //console.log(this.numeros[i]);
        }
        this.itemRef.on('value', function (itemSnapshot) {
            _this.cantidades = [];
            itemSnapshot.forEach(function (itemSnap) {
                _this.cantidades.push(itemSnap.val());
                console.log(_this.cantidades[0]);
                return false;
            });
            for (var i = 0; i < _this.cantidades.length; i++) {
                _this.actualizarColor(i);
            }
        });
    }
    EquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquipoPage');
    };
    //método que se activa al hacer click en uno de los botones de las estampas
    EquipoPage.prototype.actualizarEstampa = function (i) {
        var _this = this;
        //Si todavia no tenia la estampa
        if (this.cantidades[i] == 0) {
            //ahora la marca como pegada
            this.cantidades[i] = 1;
        }
        else if (this.cantidades[i] == 1) {
            //ahora la marca como repetida
            this.cantidades[i] = 2;
        }
        else {
            this.cantidades[i] = 0;
        }
        this.afAuth.authState.take(1).subscribe(function (auth) {
            _this.afDatabase.object("profile/" + auth.uid + "/" + _this.pais).set(_this.cantidades);
        });
        this.actualizarColor(i);
    };
    //metod que actualiza los colores de los componentes
    EquipoPage.prototype.actualizarColor = function (i) {
        if (this.cantidades[i] == 0) {
            this.colores[i] = '#e8812e';
            console.log('naranja');
        }
        else if (this.cantidades[i] == 1) {
            this.colores[i] = '#3fc157';
            console.log('verde');
        }
        else {
            this.colores[i] = '#e8ef26';
            console.log('amarillo');
        }
    };
    EquipoPage.prototype.openHelp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__help_help__["a" /* HelpPage */]);
    };
    EquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\equipo\equipo.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title >\n      <h2 id="titulo">\n      {{pais}}\n      </h2>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="EquipoPage" style="background-color:whitesmoke">\n  <ion-grid text-center>\n    \n    <ion-row>\n      <ion-col>\n        <button ion-button round [ngStyle]="{\'background-color\': colores[0]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(0)" id="boton0">{{numeros[0]}}</button>\n      </ion-col>\n      \n      <ion-col>\n        <button ion-button round [ngStyle]="{\'background-color\': colores[1]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(1)" id="boton1">{{numeros[1]}}</button>\n      </ion-col>\n\n      <ion-col>\n        <button ion-button round [ngStyle]="{\'background-color\': colores[2]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(2)" id="boton2">{{numeros[2]}}</button>\n      </ion-col>\n\n      <ion-col>\n        <button ion-button round [ngStyle]="{\'background-color\': colores[3]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(3)" id="boton3">{{numeros[3]}}</button>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n          <button ion-button round [ngStyle]="{\'background-color\': colores[4]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(4)" id="boton4">{{numeros[4]}}</button>\n        </ion-col>\n        \n        <ion-col>\n          <button ion-button round [ngStyle]="{\'background-color\': colores[5]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(5)" id="boton5">{{numeros[5]}}</button>\n        </ion-col>\n  \n        <ion-col>\n          <button ion-button round [ngStyle]="{\'background-color\': colores[6]}" style=" color: black;font-size: 15px" on-click="actualizarEstampa(6)" id="boton6">{{numeros[6]}}</button>\n        </ion-col>\n  \n        <ion-col>\n          <button ion-button round [ngStyle]="{\'background-color\': colores[7]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(7)" id="boton7">{{numeros[7]}}</button>\n        </ion-col>\n  \n      </ion-row>\n\n      <ion-row>\n          <ion-col>\n            <button ion-button round [ngStyle]="{\'background-color\': colores[8]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(8)" id="boton8">{{numeros[8]}}</button>\n          </ion-col>\n          \n          <ion-col>\n            <button ion-button round [ngStyle]="{\'background-color\': colores[9]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(9)" id="boton9">{{numeros[9]}}</button>\n          </ion-col>\n    \n          <ion-col>\n            <button ion-button round [ngStyle]="{\'background-color\': colores[10]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(10)" id="boton10">{{numeros[10]}}</button>\n          </ion-col>\n    \n          <ion-col>\n            <button ion-button round [ngStyle]="{\'background-color\': colores[11]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(11)" id="boton11">{{numeros[11]}}</button>\n          </ion-col>\n    \n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n              <button ion-button round [ngStyle]="{\'background-color\': colores[12]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(12)" id="7boton12">{{numeros[12]}}</button>\n            </ion-col>\n            \n            <ion-col>\n              <button ion-button round [ngStyle]="{\'background-color\': colores[13]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(13)" id="boton13">{{numeros[13]}}</button>\n            </ion-col>\n      \n            <ion-col>\n              <button ion-button round [ngStyle]="{\'background-color\': colores[14]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(14)" id="boton14">{{numeros[14]}}</button>\n            </ion-col>\n      \n            <ion-col>\n              <button ion-button round [ngStyle]="{\'background-color\': colores[15]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(15)" id="boton15">{{numeros[15]}}</button>\n            </ion-col>\n      \n          </ion-row>\n\n          <ion-row>\n              <ion-col>\n                <button ion-button round [ngStyle]="{\'background-color\': colores[16]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(16)" id="boton16">{{numeros[16]}}</button>\n              </ion-col>\n              \n              <ion-col>\n                <button ion-button round [ngStyle]="{\'background-color\': colores[17]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(17)" id="boton1">{{numeros[17]}}</button>\n              </ion-col>\n        \n              <ion-col>\n                <button ion-button round [ngStyle]="{\'background-color\': colores[18]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(18)" id="boton18">{{numeros[18]}}</button>\n              </ion-col>\n        \n              <ion-col>\n                <button ion-button round [ngStyle]="{\'background-color\': colores[19]}" style="color: black;font-size: 15px" on-click="actualizarEstampa(19)" id="boton19">{{numeros[19]}}</button>\n              </ion-col>\n        \n            </ion-row>\n\n        <br><br>\n        <div on-tap="openHelp()"><ion-icon name="help-circle"  style="color:#5c77d1; padding-right: 0.2cm; font-size: 180%"></ion-icon><b>¿Qué significan los colores?</b></div>\n      '/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EquipoPage);
    return EquipoPage;
}());

//# sourceMappingURL=equipo.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\help\help.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ayuda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:whitesmoke">\n  <h2>\n    Cómo usar la herramienta de estampas:\n  </h2>\n  <p>\n    Los botones de la pantalla muestran en el estado de cada estampa, cada una marcada con su numero correspondiente.\n    Para cambiar el estado de una estampa, basta con tocar el botón y este cambiará de color, con lo que podrás indicar\n    si ya pegaste tu estampa, si te hace falta o si la tienes repetida\n  </p>\n  <br>\n  <div>La clave de los colores es la siguiente:</div>\n  <br>\n  <div><ion-icon name="color-palette"  style="color:#e8812e; padding-right: 0.2cm; font-size: 180%"></ion-icon><b>Naranja: te hace falta esta estampa</b></div>\n  <div><ion-icon name="color-palette"  style="color:#3fc157; padding-right: 0.2cm; font-size: 180%"></ion-icon><b>Verde: ya pegaste esta estampa</b></div>\n  <div><ion-icon name="color-palette"  style="color:#e8ef26; padding-right: 0.2cm; font-size: 180%"></ion-icon><b>Amarilla: esta estampa está repetida</b></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/equipo/equipo.module": [
		517,
		1
	],
	"../pages/help/help.module": [
		518,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearNuevaCuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CrearNuevaCuentaPage = /** @class */ (function () {
    function CrearNuevaCuentaPage(afAuth, navCtrl, toastCtrl, afDatabase) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.afDatabase = afDatabase;
        this.user = {};
        this.profile = {};
    }
    CrearNuevaCuentaPage.prototype.registrar = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.profile.iniciales = [0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.estadios = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.Rusia = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.ArabiaSaudita = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.Egipto = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.Uruguay = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.Portugal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.España = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.Marruecos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.Irán = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.Francia = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.Australia = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.Perú = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.profile.Argentina = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        this.profile.id = this.afAuth.auth.currentUser.uid;
                        console.log(result);
                        this.afAuth.authState.take(1).subscribe(function (auth) {
                            _this.afDatabase.object("profile/" + auth.uid).set(_this.profile);
                        });
                        this.navCtrl.pop();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        toast = this.toastCtrl.create({
                            message: 'El correo electrónico ingresado ya ha sido usado para otra cuenta',
                            duration: 3000,
                            position: 'top'
                        });
                        toast.onDidDismiss(function () {
                            console.log('Dismissed toast');
                        });
                        toast.present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CrearNuevaCuentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear-nueva-cuenta',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\crear-nueva-cuenta\crear-nueva-cuenta.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Crear nueva cuenta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6" style="background-color:#9BC637;">\n  <div class="spacer" style="width:300px;height:27px;" id="crearNuevaCuenta-spacer3"></div>\n  <img src="assets/img/BKvneOuxSGGolz2Q0AOc_login.svg" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:13px;" id="crearNuevaCuenta-spacer2"></div>\n  <form id="crearNuevaCuenta-form2">\n    <ion-list id="crearNuevaCuenta-list2">\n      <ion-item id="crearNuevaCuenta-input3">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Nombre" [(ngModel)]="user.nombre" [(ngModel)]="profile.nombre" name="nombre"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-input4">\n        <ion-label></ion-label>\n        <ion-input type="email" placeholder="Correo Electrónico" [(ngModel)]="user.email" [(ngModel)]="profile.email" name="correo"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-input5">\n        <ion-label></ion-label>\n        <ion-input type="password" placeholder="Contraseña" [(ngModel)]="user.password" name="contrasenia"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-input6">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Teléfono de contacto (opcional)" [(ngModel)]="user.telefono" [(ngModel)]="profile.telefono" name="telefono"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-select1">\n        <ion-select [(ngModel)]="user.departamento" placeholder= "Escoga su departamento" [(ngModel)]="profile.departamento" name="departamento">\n          <ion-option>Alta Verapaz</ion-option>\n          <ion-option>Baja Verapaz</ion-option>\n          <ion-option>Chimaltenango</ion-option>\n          <ion-option>Chiquimula</ion-option>\n          <ion-option>Petén</ion-option>\n          <ion-option>El Progreso</ion-option>\n          <ion-option>Quiché</ion-option>\n          <ion-option>Escuintla</ion-option>\n          <ion-option>Guatemala</ion-option>\n          <ion-option>Huehuetenango</ion-option>\n          <ion-option>Izabal</ion-option>\n          <ion-option>Jalapa</ion-option>\n          <ion-option>Jutiapa</ion-option>\n          <ion-option>Quetzaltenango</ion-option>\n          <ion-option>Retalhuleu</ion-option>\n          <ion-option>Sacatepéquez</ion-option>\n          <ion-option>San Marcos</ion-option>\n          <ion-option>Santa Rosa</ion-option>\n          <ion-option>Sololá</ion-option>\n          <ion-option>Suchitepéquez</ion-option>\n          <ion-option>Totonicapán</ion-option>\n          <ion-option>Zacapa</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="width:300px;height:10px;" id="crearNuevaCuenta-spacer4"></div>\n    <button id="crearNuevaCuenta-button3" ion-button color="dark" on-click="registrar(user)" block>\n      Crear cuenta\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\crear-nueva-cuenta\crear-nueva-cuenta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CrearNuevaCuentaPage);
    return CrearNuevaCuentaPage;
}());

//# sourceMappingURL=crear-nueva-cuenta.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quinielas_quinielas__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mi_album_mi_album__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cambiar_estampas_cambiar_estampas__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsControllerPage = /** @class */ (function () {
    function TabsControllerPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__quinielas_quinielas__["a" /* QuinielasPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__mi_album_mi_album__["a" /* MiAlbumPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__cambiar_estampas_cambiar_estampas__["a" /* CambiarEstampasPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */];
    }
    TabsControllerPage.prototype.goToPerfil = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_perfil__["a" /* PerfilPage */]);
    };
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\tabs-controller\tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Quinielas" tabIcon="football" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Mi álbum" tabIcon="book" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Cambiar Estampas" tabIcon="swap" id="tabsController-tab3"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="person" id="tabsController-tab4" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\tabs-controller\tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
    }
    PerfilPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        console.log(this.afAuth.auth.currentUser.uid);
        //Se cierra sesión y se regresa a la página de login
        this.afAuth.auth.signOut();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\perfil\perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Perfil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7" style="background-color:#9BC637;">\n  <div class="spacer" style="width:300px;height:27px;" id="perfil-spacer6"></div>\n  <img src="assets/img/BKvneOuxSGGolz2Q0AOc_login.svg" style="display:block;width:25%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:13px;" id="perfil-spacer7"></div>\n  <h4 id="perfil-heading6" style="color:#002626;">\n    Nombre\n  </h4>\n  <ion-list id="perfil-list8">\n    <ion-item id="perfil-input7">\n      <ion-label>\n        Rodrigo Barrios\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n  </ion-list>\n  <h4 id="perfil-heading3" style="color:#002626;">\n    Usuario\n  </h4>\n  <form id="perfil-form3">\n    <ion-item id="perfil-input9">\n      <ion-label>\n        Barrios596\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <h4 id="perfil-heading4" style="color:#002626;">\n      Teléfono\n    </h4>\n    <ion-item id="perfil-input8">\n      <ion-label>\n        55555555\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:15px;" id="perfil-spacer9"></div>\n    <ion-item id="perfil-select2">\n      <ion-label>\n        Departamento\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Alta Verapaz\n        </ion-option>\n        <ion-option>\n          Baja Verapaz\n        </ion-option>\n        <ion-option>\n          Chimaltenango\n        </ion-option>\n        <ion-option>\n          Chiquimula\n        </ion-option>\n        <ion-option>\n          Petén\n        </ion-option>\n        <ion-option>\n          El Progreso\n        </ion-option>\n        <ion-option>\n          Quiché\n        </ion-option>\n        <ion-option>\n          Escuintla\n        </ion-option>\n        <ion-option>\n          Guatemala\n        </ion-option>\n        <ion-option>\n          Huehuetenango\n        </ion-option>\n        <ion-option>\n          Izabal\n        </ion-option>\n        <ion-option>\n          Jalapa\n        </ion-option>\n        <ion-option>\n          Jutiapa\n        </ion-option>\n        <ion-option>\n          Quetzaltenango\n        </ion-option>\n        <ion-option>\n          Retalhuleu\n        </ion-option>\n        <ion-option>\n          Sacatepéquez\n        </ion-option>\n        <ion-option>\n          San Marcos\n        </ion-option>\n        <ion-option>\n          Santa Rosa\n        </ion-option>\n        <ion-option>\n          Sololá\n        </ion-option>\n        <ion-option>\n          Suchitepéquez\n        </ion-option>\n        <ion-option>\n          Totonicapán\n        </ion-option>\n        <ion-option>\n          Zacapa\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:15px;" id="perfil-spacer8"></div>\n    <ion-item id="perfil-range1">\n      <ion-range min="0" max="100" step="1" color="positive" value="50">\n        <ion-label range-left>\n          Progreso\n        </ion-label>\n      </ion-range>\n    </ion-item>\n  </form>\n  <button id="perfil-button6" ion-button clear color="dark" block style="font-weight:300;font-size:15px;" on-click="goToLogin()">\n    Cerrar Sesión\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\perfil\perfil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiAlbumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipo_equipo__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiAlbumPage = /** @class */ (function () {
    function MiAlbumPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MiAlbumPage.prototype.goToEquipo = function (params) {
        var data = { pais: params };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__equipo_equipo__["a" /* EquipoPage */], data);
    };
    MiAlbumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mi-album',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\mi-album\mi-album.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mi Album\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3" style="background-color:#9BC637;">\n  <h2 id="miAlbum-heading1" style="color:#002626;font-weight:500;text-align:center;">\n    Rusia 2018\n  </h2>\n  <div class="spacer" style="width:300px;height:10px;" id="miAlbum-spacer5"></div>\n  <ion-list id="miAlbum-list7">\n    <ion-item-sliding>\n      <ion-item style="background-color: rgb(53,61,53); color: #efe7da" id="miAlbum-list-item12">\n        <ion-avatar item-left>\n          <img src="assets/img/8lnPQdRcSAePAeZMZQ1Z_image5a0492b779a1f.jpg" />\n        </ion-avatar>\n        <h2>\n          Estampas iniciales\n        </h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="assertive"></button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item20">\n        <ion-avatar item-left>\n          <img src="assets/img/yAo174CKSpa0ODwMR5SQ_91c4b1bc4661425464c82a46ff570e60.jpg" />\n        </ion-avatar>\n        <h2>\n          Estadios\n        </h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button style="background-color: #353D35; color: #efe7da">\n          1\n        </button>\n        <button ion-button color="balanced">\n          2\n        </button>\n        <button ion-button color="positive"></button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item21" on-tap="goToEquipo(\'Rusia\')">\n        <ion-avatar item-left>\n          <img src="assets/img/dZg7bryIRKWaTuMa23WT_bandera-pais-rusia-500x500.png" />\n        </ion-avatar>\n        <h2>\n          Rusia\n        </h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="positive"></button>\n        <button ion-button color="positive"></button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item22" on-tap="goToEquipo(\'ArabiaSaudita\')">\n      <ion-avatar item-left>\n        <img src="assets/img/ZR1rDixSUu4TzT1qGmw5_sa.png" />\n      </ion-avatar>\n      <h2>\n        Arabia Saudita\n      </h2>\n    </ion-item>\n    <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item23" on-tap="goToEquipo(\'Egipto\')">\n      <ion-avatar item-left>\n        <img src="assets/img/9g7k2xjKSFORSNyZHtbz_eg.png" />\n      </ion-avatar>\n      <h2>\n        Egipto\n      </h2>\n    </ion-item>\n    <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item24" on-tap="goToEquipo(\'Uruguay\')">\n      <ion-avatar item-left>\n        <img src="assets/img/4UuDUcfzQ6KW6DORBuu8_uy.png" />\n      </ion-avatar>\n      <h2>\n        Uruguay\n      </h2>\n    </ion-item>\n    <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item25" on-tap="goToEquipo(\'Portugal\')">\n      <ion-avatar item-left>\n        <img src="assets/img/nb0EQezHSFulkTJtU7ts_pt.png" />\n      </ion-avatar>\n      <h2>\n        Portugal\n      </h2>\n    </ion-item>\n    <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item26" on-tap="goToEquipo(\'España\')">\n      <ion-avatar item-left>\n        <img src="assets/img/aXvHkl03TqrJhhlKMFxU_es.png" />\n      </ion-avatar>\n      <h2>\n        España\n      </h2>\n    </ion-item>\n    <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item27" on-tap="goToEquipo(\'Marruecos\')">\n      <ion-avatar item-left>\n        <img src="assets/img/wAaCH8STqhugrJyOOcoA_ma.png" />\n      </ion-avatar>\n      <h2>\n        Marruecos\n      </h2>\n    </ion-item>\n    <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item28" on-tap="goToEquipo(\'Irán\')">\n      <ion-avatar item-left>\n        <img src="assets/img/uRBHi3ZTQOK0WbiDP0dt_ir.png" />\n      </ion-avatar>\n      <h2>\n        Irán\n      </h2>\n    </ion-item>\n    <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item29" on-tap="goToEquipo(\'Francia\')">\n      <ion-avatar item-left>\n        <img src="assets/img/YJ9JKAW0TmCTwEK3fqyQ_fr.png" />\n      </ion-avatar>\n      <h2>\n        Francia\n      </h2>\n    </ion-item>\n    <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item30" on-tap="goToEquipo(\'Australia\')">\n      <ion-avatar item-left>\n        <img src="assets/img/wfNHEgJhR3edVJ0r7A3s_au.png" />\n      </ion-avatar>\n      <h2>\n        Australia\n      </h2>\n    </ion-item>\n    <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item31" on-tap="goToEquipo(\'Perú\')">\n      <ion-avatar item-left>\n        <img src="assets/img/lHE1iAXgQOuOLHcJi6kf_pe.png" />\n      </ion-avatar>\n      <h2>\n        Perú\n      </h2>\n    </ion-item>\n    <ion-item style="background-color: #353D35; color: #efe7da" id="miAlbum-list-item32" on-tap="goToEquipo(\'Argentina\')">\n      <ion-avatar item-left>\n        <img src="assets/img/SVuezsBDQ2W8lVliKdk0_ar.png" />\n      </ion-avatar>\n      <h2>\n        Argentina\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\mi-album\mi-album.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MiAlbumPage);
    return MiAlbumPage;
}());

//# sourceMappingURL=mi-album.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CambiarEstampasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CambiarEstampasPage = /** @class */ (function () {
    function CambiarEstampasPage(navCtrl, afAuth, afDatabase, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        this.usuarios = [];
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
        this.itemRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("profile/");
        this.itemRef.on('value', function (itemSnapshot) {
            _this.usuarios = [];
            itemSnapshot.forEach(function (itemSnap) {
                if (itemSnap.key != afAuth.auth.currentUser.uid) {
                    _this.usuarios.push(itemSnap.val());
                    console.log(itemSnap.val());
                }
                return false;
            });
        });
    }
    CambiarEstampasPage.prototype.estampasRepetidas = function (s) {
        var siencontro = false;
        this.salida = "";
        for (var i = 0; i < this.usuarios.length; i++) {
            if (s == this.usuarios[i].id) {
                this.usuarioActual = this.usuarios[i];
                break;
            }
        }
        for (var rusia = 0; rusia < 20; rusia++) {
            if (this.usuarioActual.Rusia[rusia] > 1) {
                this.salida = this.salida + String(this.offsetRusia + rusia) + ", ";
                siencontro = true;
            }
        }
        if (!siencontro) {
            return "Este usuario no tiene estampas repetidas.";
        }
        return this.salida.substring(0, this.salida.length - 2);
    };
    CambiarEstampasPage.prototype.showInfo = function (s) {
        this.info = this.estampasRepetidas(s);
        var alert = this.alertCtrl.create({
            title: "Estampas repetidas de este usuario",
            subTitle: this.info,
            buttons: ['OK']
        });
        alert.present();
    };
    CambiarEstampasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cambiar-estampas',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\cambiar-estampas\cambiar-estampas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cambiar estampas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4" style="background-color:#9BC637;">\n  <h4 id="cambiarEstampas-heading7" style="color:olivo;text-align:center;">\n    Usuarios con estampas que te hacen falta:\n  </h4>\n    <ion-list id="cambiarEstampas-list11" *ngFor="let usuario of usuarios" >\n      <ion-item style="color:#EFE7DA;font-weight: 600;background-color: #353d35" on-tap="showInfo(usuario.id)">\n          <ion-icon name="md-contact" style="color: #e55812;padding-right: 0.2cm;font-size:200%; align-content: center; align-self: auto "></ion-icon>\n          {{usuario.nombre}}\n          <h2 style="color:#EFE7DA;font-weight: 400">Teléfono: {{usuario.telefono}}</h2>\n      </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\cambiar-estampas\cambiar-estampas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CambiarEstampasPage);
    return CambiarEstampasPage;
}());

//# sourceMappingURL=cambiar-estampas.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(346);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_quinielas_quinielas__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mi_album_mi_album__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cambiar_estampas_cambiar_estampas__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nueva_quiniela_nueva_quiniela__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mis_quinielas_mis_quinielas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_unirse_aquiniela_unirse_aquiniela__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_quiniela_creada_quiniela_creada__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_quiniela_unida_quiniela_unida__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_equipo_equipo__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_help_help__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_firebase_config__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_quinielas_quinielas__["a" /* QuinielasPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_mi_album_mi_album__["a" /* MiAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cambiar_estampas_cambiar_estampas__["a" /* CambiarEstampasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_crear_nueva_cuenta_crear_nueva_cuenta__["a" /* CrearNuevaCuentaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_nueva_quiniela_nueva_quiniela__["a" /* NuevaQuinielaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mis_quinielas_mis_quinielas__["a" /* MisQuinielasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_unirse_aquiniela_unirse_aquiniela__["a" /* UnirseAQuinielaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_quiniela_creada_quiniela_creada__["a" /* QuinielaCreadaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_quiniela_unida_quiniela_unida__["a" /* QuinielaUnidaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/equipo/equipo.module#EquipoPageModule', name: 'EquipoPage', segment: 'equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_22__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_quinielas_quinielas__["a" /* QuinielasPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_mi_album_mi_album__["a" /* MiAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cambiar_estampas_cambiar_estampas__["a" /* CambiarEstampasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_crear_nueva_cuenta_crear_nueva_cuenta__["a" /* CrearNuevaCuentaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_nueva_quiniela_nueva_quiniela__["a" /* NuevaQuinielaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_mis_quinielas_mis_quinielas__["a" /* MisQuinielasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_unirse_aquiniela_unirse_aquiniela__["a" /* UnirseAQuinielaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_quiniela_creada_quiniela_creada__["a" /* QuinielaCreadaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_quiniela_unida_quiniela_unida__["a" /* QuinielaUnidaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\app\app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21"></ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDdGjlCfAAvXp6bDZxKcEMUx_qeoTx0tho",
    authDomain: "te-la-cambio.firebaseapp.com",
    databaseURL: "https://te-la-cambio.firebaseio.com",
    projectId: "te-la-cambio",
    storageBucket: "",
    messagingSenderId: "222995957310"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuinielasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nueva_quiniela_nueva_quiniela__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiniela_creada_quiniela_creada__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mis_quinielas_mis_quinielas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unirse_aquiniela_unirse_aquiniela__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quiniela_unida_quiniela_unida__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuinielasPage = /** @class */ (function () {
    function QuinielasPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    QuinielasPage_1 = QuinielasPage;
    QuinielasPage.prototype.goToNuevaQuiniela = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nueva_quiniela_nueva_quiniela__["a" /* NuevaQuinielaPage */]);
    };
    QuinielasPage.prototype.goToQuinielaCreada = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quiniela_creada_quiniela_creada__["a" /* QuinielaCreadaPage */]);
    };
    QuinielasPage.prototype.goToQuinielas = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(QuinielasPage_1);
    };
    QuinielasPage.prototype.goToMisQuinielas = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mis_quinielas_mis_quinielas__["a" /* MisQuinielasPage */]);
    };
    QuinielasPage.prototype.goToUnirseAQuiniela = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__unirse_aquiniela_unirse_aquiniela__["a" /* UnirseAQuinielaPage */]);
    };
    QuinielasPage.prototype.goToQuinielaUnida = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__quiniela_unida_quiniela_unida__["a" /* QuinielaUnidaPage */]);
    };
    QuinielasPage = QuinielasPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quinielas',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quinielas\quinielas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Quinielas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2" style="background-color:#9BC637;">\n  <img src="assets/img/xnUHei5RfuZnQ0x4d7VQ_black_dices_dices_2-999px.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h3 id="quinielas-heading2" style="columns: #002626;text-align:center;">\n    Escoge una opción:\n  </h3>\n  <button id="quinielas-button9" ion-button color="olivo" style="color: #efe7da" block on-click="goToMisQuinielas()">\n    Mis quinielas\n  </button>\n  <button id="quinielas-button7" ion-button color="olivo" block on-click="goToUnirseAQuiniela()">\n    Unirme a una quiniela existente\n  </button>\n  <button id="quinielas-button8" ion-button color="olivo" block on-click="goToNuevaQuiniela()">\n    Crear una nueva quiniela\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quinielas\quinielas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], QuinielasPage);
    return QuinielasPage;
    var QuinielasPage_1;
}());

//# sourceMappingURL=quinielas.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuinielaUnidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quinielas_quinielas__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuinielaUnidaPage = /** @class */ (function () {
    function QuinielaUnidaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    QuinielaUnidaPage.prototype.goToQuinielas = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__quinielas_quinielas__["a" /* QuinielasPage */]);
    };
    QuinielaUnidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quiniela-unida',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quiniela-unida\quiniela-unida.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>\n      Quiniela Unida\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10" style="background-color:#9BC637;">\n  <h4 id="quinielaUnida-heading8" style="color:#002626;font-weight:400;text-align:center;">\n    ¡Excelente! Te has unido a la quiniela: "Familia"\n  </h4>\n  <img src="assets/img/DBaP35kcT969qI7zvrwi_b314541f49ce483dd4c47d0142a47f77-icono-de-pelota-de-ftbol-cl-sico-by-vexels.png" style="display:block;width:25%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h4 id="quinielaUnida-heading9" style="color:#002626;font-weight:400;text-align:center;">\n    La quiniela aparece ahora en la sección de "Mis quinielas"\n  </h4>\n  <button id="quinielaUnida-button11" ion-button color="dark" block on-click="goToQuinielas()">\n    Regresar a quinielas\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quiniela-unida\quiniela-unida.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], QuinielaUnidaPage);
    return QuinielaUnidaPage;
}());

//# sourceMappingURL=quiniela-unida.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisQuinielasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MisQuinielasPage = /** @class */ (function () {
    function MisQuinielasPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MisQuinielasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mis-quinielas',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\mis-quinielas\mis-quinielas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mis quinielas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9" style="background-color:#9BC637;">\n  <h4 id="misQuinielas-heading11" style="color:#002626;text-align:center;">\n    Quinielas a las que estás unido:\n  </h4>\n  <ion-list id="misQuinielas-list9">\n    <ion-item-sliding>\n      <ion-item color="none" id="misQuinielas-list-item40">\n        Familia\n        <ion-icon name="arrow-round-back" item-right></ion-icon>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="dark">\n          Salir de quiniela\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item color="none" id="misQuinielas-list-item41">\n        12SINGLETONS\n        <ion-icon name="arrow-round-back" item-right></ion-icon>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="dark">\n          Salir de quiniela\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item color="none" id="misQuinielas-list-item42">\n        Ingenieros\n        <ion-icon name="arrow-round-back" item-right></ion-icon>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="dark">\n          Salir de quiniela\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\mis-quinielas\mis-quinielas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MisQuinielasPage);
    return MisQuinielasPage;
}());

//# sourceMappingURL=mis-quinielas.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnirseAQuinielaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiniela_unida_quiniela_unida__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnirseAQuinielaPage = /** @class */ (function () {
    function UnirseAQuinielaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UnirseAQuinielaPage.prototype.goToQuinielaUnida = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__quiniela_unida_quiniela_unida__["a" /* QuinielaUnidaPage */]);
    };
    UnirseAQuinielaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-unirse-aquiniela',template:/*ion-inline-start:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\unirse-aquiniela\unirse-aquiniela.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Unirse a quiniela\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11" style="background-color:#9BC637;">\n  <h4 id="unirseAQuiniela-heading16" style="color:#002626;font-weight:400;text-align:center;">\n    Ingresa el código de la quiniela a la que deseas unirte:\n  </h4>\n  <form id="unirseAQuiniela-form10">\n    <ion-item id="unirseAQuiniela-textarea4">\n      <ion-label></ion-label>\n      <ion-textarea placeholder="Ingresa aquí tu código"></ion-textarea>\n    </ion-item>\n  </form>\n  <button id="unirseAQuiniela-button13" ion-button color="olivo" block on-click="goToQuinielaUnida()">\n    Unirse\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to ano - 1er semestre\INTERACCION HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\unirse-aquiniela\unirse-aquiniela.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], UnirseAQuinielaPage);
    return UnirseAQuinielaPage;
}());

//# sourceMappingURL=unirse-aquiniela.js.map

/***/ })

},[322]);
//# sourceMappingURL=main.js.map