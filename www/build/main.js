webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_controller_tabs_controller__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(205);
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
                            message: 'El correo ingresado no se encuentra registrado o la contraseña es incorrecta',
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\login\login.html"*/'<ion-content padding id="page5" style="background-color:#ffffff">\n  <div id="login-container1">\n    <img src="assets/img/zLd2uKWTbOfIIO22i2AL_Logopit_1523240444463.png" style="display:block;width:70%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n  <form id="login-form1">\n    \n    <ion-list id="login-list1">\n      <ion-item id="login-input1">\n        <ion-label></ion-label>\n        <ion-input type="email" placeholder="Correo Electrónico" [(ngModel)]="user.email" name="correo"></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label></ion-label>\n        <ion-input type="password" placeholder="Contraseña" [(ngModel)]="user.password" name="contrasenia"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="width:300px;height:23px;" id="login-spacer1"></div>\n    <button id="login-button1" on-click="login(user)" ion-button color="dark" block >\n      Iniciar Sesión\n    </button>\n    <button id="login-button2"  ion-button clear color="dark" block style="font-weight:300;font-size:15px;" on-click="goToCrearNuevaCuenta()">\n      Toca aquí para crear una cuenta nueva\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]) === "function" && _c || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevaQuinielaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiniela_creada_quiniela_creada__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quinielas_quinielas__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mis_quinielas_mis_quinielas__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unirse_aquiniela_unirse_aquiniela__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quiniela_unida_quiniela_unida__ = __webpack_require__(41);
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
    function NuevaQuinielaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NuevaQuinielaPage_1 = NuevaQuinielaPage;
    NuevaQuinielaPage.prototype.goToQuinielaCreada = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__quiniela_creada_quiniela_creada__["a" /* QuinielaCreadaPage */]);
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
            selector: 'page-nueva-quiniela',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\nueva-quiniela\nueva-quiniela.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Nueva Quiniela\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8" style="background-color:#95C623;">\n  <img src="assets/img/zm8W4DPbRiuUgfzAb3d6_Vista-kate.png" style="display:block;width:25%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h4 id="nuevaQuiniela-heading10" style="color:#FFFFFF;text-align:center;">\n    Ingresa el nombre de la quiniela:\n  </h4>\n  <form id="nuevaQuiniela-form5">\n    <ion-item id="nuevaQuiniela-input10">\n      <ion-label></ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <button id="nuevaQuiniela-button10" ion-button color="dark" block on-click="goToQuinielaCreada()">\n    Crear quiniela\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\nueva-quiniela\nueva-quiniela.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NuevaQuinielaPage);
    return NuevaQuinielaPage;
    var NuevaQuinielaPage_1;
}());

//# sourceMappingURL=nueva-quiniela.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuinielaCreadaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quinielas_quinielas__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nueva_quiniela_nueva_quiniela__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mis_quinielas_mis_quinielas__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unirse_aquiniela_unirse_aquiniela__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quiniela_unida_quiniela_unida__ = __webpack_require__(41);
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
    function QuinielaCreadaPage(navCtrl) {
        this.navCtrl = navCtrl;
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
            selector: 'page-quiniela-creada',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quiniela-creada\quiniela-creada.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12" style="background-color:#95C623;">\n  <h4 id="quinielaCreada-heading14" style="color:#FFFFFF;font-weight:400;text-align:center;">\n    Quiniela creada, comparte el siguiente código con tus amigos para que puedan unirse a tu quiniela:\n  </h4>\n  <form id="quinielaCreada-form9">\n    <ion-item id="quinielaCreada-textarea3">\n      <ion-label>\n        Código:\n      </ion-label>\n      <ion-textarea placeholder="">\n        9E45X3\n      </ion-textarea>\n    </ion-item>\n  </form>\n  <h4 id="quinielaCreada-heading15" style="color:#FFFFFF;font-weight:400;text-align:center;">\n    Tu quiniela aparece ahora en la sección de "Mis quinielas".\n  </h4>\n  <button id="quinielaCreada-button12" ion-button color="dark" block on-click="goToQuinielas()">\n    Regresar a quinielas\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quiniela-creada\quiniela-creada.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], QuinielaCreadaPage);
    return QuinielaCreadaPage;
    var QuinielaCreadaPage_1;
}());

//# sourceMappingURL=quiniela-creada.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearNuevaCuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(205);
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
    function CrearNuevaCuentaPage(afAuth, navCtrl, toastCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.user = {};
    }
    CrearNuevaCuentaPage.prototype.registrar = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
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
            selector: 'page-crear-nueva-cuenta',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\crear-nueva-cuenta\crear-nueva-cuenta.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Crear nueva cuenta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6" style="background-color:#95C623;">\n  <div class="spacer" style="width:300px;height:27px;" id="crearNuevaCuenta-spacer3"></div>\n  <img src="assets/img/BKvneOuxSGGolz2Q0AOc_login.svg" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:13px;" id="crearNuevaCuenta-spacer2"></div>\n  <form id="crearNuevaCuenta-form2">\n    <ion-list id="crearNuevaCuenta-list2">\n      <ion-item id="crearNuevaCuenta-input3">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Nombre" [(ngModel)]="user.nombre" name="nombre"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-input4">\n        <ion-label></ion-label>\n        <ion-input type="email" placeholder="Correo Electrónico" [(ngModel)]="user.email" name="correo"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-input5">\n        <ion-label></ion-label>\n        <ion-input type="password" placeholder="Contraseña" [(ngModel)]="user.password" name="contrasenia"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-input6">\n        <ion-label></ion-label>\n        <ion-input type="text" placeholder="Teléfono de contacto (opcional)" [(ngModel)]="user.telefono" name="telefono"></ion-input>\n      </ion-item>\n      <ion-item id="crearNuevaCuenta-select1">\n        <ion-label>\n          Departamento\n        </ion-label>\n        <ion-select name="">\n          <ion-option>\n            Alta Verapaz\n          </ion-option>\n          <ion-option>\n            Baja Verapaz\n          </ion-option>\n          <ion-option>\n            Chimaltenango\n          </ion-option>\n          <ion-option>\n            Chiquimula\n          </ion-option>\n          <ion-option>\n            Petén\n          </ion-option>\n          <ion-option>\n            El Progreso\n          </ion-option>\n          <ion-option>\n            Quiché\n          </ion-option>\n          <ion-option>\n            Escuintla\n          </ion-option>\n          <ion-option>\n            Guatemala\n          </ion-option>\n          <ion-option>\n            Huehuetenango\n          </ion-option>\n          <ion-option>\n            Izabal\n          </ion-option>\n          <ion-option>\n            Jalapa\n          </ion-option>\n          <ion-option>\n            Jutiapa\n          </ion-option>\n          <ion-option>\n            Quetzaltenango\n          </ion-option>\n          <ion-option>\n            Retalhuleu\n          </ion-option>\n          <ion-option>\n            Sacatepéquez\n          </ion-option>\n          <ion-option>\n            San Marcos\n          </ion-option>\n          <ion-option>\n            Santa Rosa\n          </ion-option>\n          <ion-option>\n            Sololá\n          </ion-option>\n          <ion-option>\n            Suchitepéquez\n          </ion-option>\n          <ion-option>\n            Totonicapán\n          </ion-option>\n          <ion-option>\n            Zacapa\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="width:300px;height:10px;" id="crearNuevaCuenta-spacer4"></div>\n    <button id="crearNuevaCuenta-button3" ion-button color="dark" on-click="registrar(user)" block>\n      Crear cuenta\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\crear-nueva-cuenta\crear-nueva-cuenta.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]) === "function" && _c || Object])
    ], CrearNuevaCuentaPage);
    return CrearNuevaCuentaPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=crear-nueva-cuenta.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_perfil__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quinielas_quinielas__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mi_album_mi_album__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cambiar_estampas_cambiar_estampas__ = __webpack_require__(216);
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
            selector: 'page-tabs-controller',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\tabs-controller\tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Quinielas" tabIcon="football" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Mi álbum" tabIcon="book" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Cambiar Estampas" tabIcon="swap" id="tabsController-tab3"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="person" id="tabsController-tab4"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\tabs-controller\tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(104);
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
    function PerfilPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PerfilPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\perfil\perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Perfil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7" style="background-color:#95C623;">\n  <div class="spacer" style="width:300px;height:27px;" id="perfil-spacer6"></div>\n  <img src="assets/img/BKvneOuxSGGolz2Q0AOc_login.svg" style="display:block;width:25%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:13px;" id="perfil-spacer7"></div>\n  <h4 id="perfil-heading6" style="color:#FFFFFF;">\n    Nombre\n  </h4>\n  <ion-list id="perfil-list8">\n    <ion-item id="perfil-input7">\n      <ion-label>\n        Rodrigo Barrios\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n  </ion-list>\n  <h4 id="perfil-heading3" style="color:#FFFFFF;">\n    Usuario\n  </h4>\n  <form id="perfil-form3">\n    <ion-item id="perfil-input9">\n      <ion-label>\n        Barrios596\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <h4 id="perfil-heading4" style="color:#FFFFFF;">\n      Teléfono\n    </h4>\n    <ion-item id="perfil-input8">\n      <ion-label>\n        55555555\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:15px;" id="perfil-spacer9"></div>\n    <ion-item id="perfil-select2">\n      <ion-label>\n        Departamento\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Alta Verapaz\n        </ion-option>\n        <ion-option>\n          Baja Verapaz\n        </ion-option>\n        <ion-option>\n          Chimaltenango\n        </ion-option>\n        <ion-option>\n          Chiquimula\n        </ion-option>\n        <ion-option>\n          Petén\n        </ion-option>\n        <ion-option>\n          El Progreso\n        </ion-option>\n        <ion-option>\n          Quiché\n        </ion-option>\n        <ion-option>\n          Escuintla\n        </ion-option>\n        <ion-option>\n          Guatemala\n        </ion-option>\n        <ion-option>\n          Huehuetenango\n        </ion-option>\n        <ion-option>\n          Izabal\n        </ion-option>\n        <ion-option>\n          Jalapa\n        </ion-option>\n        <ion-option>\n          Jutiapa\n        </ion-option>\n        <ion-option>\n          Quetzaltenango\n        </ion-option>\n        <ion-option>\n          Retalhuleu\n        </ion-option>\n        <ion-option>\n          Sacatepéquez\n        </ion-option>\n        <ion-option>\n          San Marcos\n        </ion-option>\n        <ion-option>\n          Santa Rosa\n        </ion-option>\n        <ion-option>\n          Sololá\n        </ion-option>\n        <ion-option>\n          Suchitepéquez\n        </ion-option>\n        <ion-option>\n          Totonicapán\n        </ion-option>\n        <ion-option>\n          Zacapa\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:15px;" id="perfil-spacer8"></div>\n    <ion-item id="perfil-range1">\n      <ion-range min="0" max="100" step="1" color="positive" value="50">\n        <ion-label range-left>\n          Progreso\n        </ion-label>\n      </ion-range>\n    </ion-item>\n  </form>\n  <button id="perfil-button6" ion-button clear color="dark" block style="font-weight:300;font-size:15px;" on-click="goToLogin()">\n    Cerrar Sesión\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\perfil\perfil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiAlbumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    MiAlbumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mi-album',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\mi-album\mi-album.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mi Album\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3" style="background-color:#95C623;">\n  <h2 id="miAlbum-heading1" style="color:#FFFFFF;font-weight:400;text-align:center;">\n    Rusia 2018\n  </h2>\n  <div class="spacer" style="width:300px;height:10px;" id="miAlbum-spacer5"></div>\n  <ion-list id="miAlbum-list7">\n    <ion-item-sliding>\n      <ion-item color="dark" id="miAlbum-list-item12">\n        <ion-avatar item-left>\n          <img src="assets/img/8lnPQdRcSAePAeZMZQ1Z_image5a0492b779a1f.jpg" />\n        </ion-avatar>\n        <h2>\n          Estampas iniciales\n        </h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="assertive"></button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item color="dark" id="miAlbum-list-item20">\n        <ion-avatar item-left>\n          <img src="assets/img/yAo174CKSpa0ODwMR5SQ_91c4b1bc4661425464c82a46ff570e60.jpg" />\n        </ion-avatar>\n        <h2>\n          Estadios\n        </h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="dark">\n          1\n        </button>\n        <button ion-button color="balanced">\n          2\n        </button>\n        <button ion-button color="positive"></button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item color="dark" id="miAlbum-list-item21">\n        <ion-avatar item-left>\n          <img src="assets/img/dZg7bryIRKWaTuMa23WT_bandera-pais-rusia-500x500.png" />\n        </ion-avatar>\n        <h2>\n          Rusia\n        </h2>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="positive"></button>\n        <button ion-button color="positive"></button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item color="dark" id="miAlbum-list-item22">\n      <ion-avatar item-left>\n        <img src="assets/img/ZR1rDixSUu4TzT1qGmw5_sa.png" />\n      </ion-avatar>\n      <h2>\n        Arabia Saudita\n      </h2>\n    </ion-item>\n    <ion-item color="dark" id="miAlbum-list-item23">\n      <ion-avatar item-left>\n        <img src="assets/img/9g7k2xjKSFORSNyZHtbz_eg.png" />\n      </ion-avatar>\n      <h2>\n        Egipto\n      </h2>\n    </ion-item>\n    <ion-item color="dark" id="miAlbum-list-item24">\n      <ion-avatar item-left>\n        <img src="assets/img/4UuDUcfzQ6KW6DORBuu8_uy.png" />\n      </ion-avatar>\n      <h2>\n        Uruguay\n      </h2>\n    </ion-item>\n    <ion-item color="dark" id="miAlbum-list-item25">\n      <ion-avatar item-left>\n        <img src="assets/img/nb0EQezHSFulkTJtU7ts_pt.png" />\n      </ion-avatar>\n      <h2>\n        Portugal\n      </h2>\n    </ion-item>\n    <ion-item color="dark" id="miAlbum-list-item26">\n      <ion-avatar item-left>\n        <img src="assets/img/aXvHkl03TqrJhhlKMFxU_es.png" />\n      </ion-avatar>\n      <h2>\n        España\n      </h2>\n    </ion-item>\n    <ion-item color="dark" id="miAlbum-list-item27">\n      <ion-avatar item-left>\n        <img src="assets/img/wAaCH8STqhugrJyOOcoA_ma.png" />\n      </ion-avatar>\n      <h2>\n        Marruecos\n      </h2>\n    </ion-item>\n    <ion-item color="dark" id="miAlbum-list-item28">\n      <ion-avatar item-left>\n        <img src="assets/img/uRBHi3ZTQOK0WbiDP0dt_ir.png" />\n      </ion-avatar>\n      <h2>\n        Irán\n      </h2>\n    </ion-item>\n    <ion-item color="dark" id="miAlbum-list-item29">\n      <ion-avatar item-left>\n        <img src="assets/img/YJ9JKAW0TmCTwEK3fqyQ_fr.png" />\n      </ion-avatar>\n      <h2>\n        Francia\n      </h2>\n    </ion-item>\n    <ion-item color="dark" id="miAlbum-list-item30">\n      <ion-avatar item-left>\n        <img src="assets/img/wfNHEgJhR3edVJ0r7A3s_au.png" />\n      </ion-avatar>\n      <h2>\n        Australia\n      </h2>\n    </ion-item>\n    <ion-item color="dark" id="miAlbum-list-item31">\n      <ion-avatar item-left>\n        <img src="assets/img/lHE1iAXgQOuOLHcJi6kf_pe.png" />\n      </ion-avatar>\n      <h2>\n        Perú\n      </h2>\n    </ion-item>\n    <ion-item color="dark" id="miAlbum-list-item32">\n      <ion-avatar item-left>\n        <img src="assets/img/SVuezsBDQ2W8lVliKdk0_ar.png" />\n      </ion-avatar>\n      <h2>\n        Argentina\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\mi-album\mi-album.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MiAlbumPage);
    return MiAlbumPage;
}());

//# sourceMappingURL=mi-album.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CambiarEstampasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function CambiarEstampasPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CambiarEstampasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cambiar-estampas',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\cambiar-estampas\cambiar-estampas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cambiar estampas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4" style="background-color:#95C623;">\n  <h4 id="cambiarEstampas-heading7" style="color:#002626;text-align:center;">\n    Usuarios con estampas que te hacen falta:\n  </h4>\n  <div id="cambiarEstampas-container2">\n    <ion-list id="cambiarEstampas-list11">\n      <ion-item color="none" id="cambiarEstampas-list-item44">\n        <ion-avatar item-left>\n          <img src="assets/img/BpqiBAU5S9GftZmTdAQ8_avatar3.png" />\n        </ion-avatar>\n        <h2>\n          Manu Ascoli\n        </h2>\n      </ion-item>\n      <ion-item color="none" id="cambiarEstampas-list-item45">\n        <ion-avatar item-left>\n          <img src="assets/img/2idO99WMSNOC1NKYsqkC_avatar2.png" />\n        </ion-avatar>\n        <h2>\n          Pau Gallegos\n        </h2>\n      </ion-item>\n      <ion-item color="none" id="cambiarEstampas-list-item46">\n        <ion-avatar item-left>\n          <img src="assets/img/ubYnWQHGnLMaNybRDBQG_avatar4.png" />\n        </ion-avatar>\n        <h2>\n          Mario Tello\n        </h2>\n      </ion-item>\n      <ion-item color="none" id="cambiarEstampas-list-item47">\n        <ion-avatar item-left>\n          <img src="assets/img/KWzVJsyKT5up7mYZMhHc_avatar5.png" />\n        </ion-avatar>\n        <h2>\n          Jorge Max\n        </h2>\n      </ion-item>\n      <ion-item color="none" id="cambiarEstampas-list-item43">\n        <ion-avatar item-left>\n          <img src="assets/img/DYKia3Rym3VfUhh3KoZg_avatar1.png" />\n        </ion-avatar>\n        <h2>\n          Samuel Lorenzo\n        </h2>\n      </ion-item>\n      <ion-item color="none" id="cambiarEstampas-list-item48">\n        <ion-avatar item-left>\n          <img src="assets/img/GEPN5xYyQQegi1yltFeJ_avatar6.png" />\n        </ion-avatar>\n        <h2>\n          Mary Castellanos\n        </h2>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\cambiar-estampas\cambiar-estampas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CambiarEstampasPage);
    return CambiarEstampasPage;
}());

//# sourceMappingURL=cambiar-estampas.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_quinielas_quinielas__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mi_album_mi_album__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cambiar_estampas_cambiar_estampas__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_crear_nueva_cuenta_crear_nueva_cuenta__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nueva_quiniela_nueva_quiniela__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mis_quinielas_mis_quinielas__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_unirse_aquiniela_unirse_aquiniela__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_quiniela_creada_quiniela_creada__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_quiniela_unida_quiniela_unida__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_firebase_config__ = __webpack_require__(324);
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
                __WEBPACK_IMPORTED_MODULE_15__pages_quiniela_unida_quiniela_unida__["a" /* QuinielaUnidaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_15__pages_quiniela_unida_quiniela_unida__["a" /* QuinielaUnidaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(104);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\app\app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21"></ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 324:
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuinielasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nueva_quiniela_nueva_quiniela__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiniela_creada_quiniela_creada__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mis_quinielas_mis_quinielas__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unirse_aquiniela_unirse_aquiniela__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quiniela_unida_quiniela_unida__ = __webpack_require__(41);
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
            selector: 'page-quinielas',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quinielas\quinielas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Quinielas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2" style="background-color:#95C623;">\n  <img src="assets/img/xnUHei5RfuZnQ0x4d7VQ_black_dices_dices_2-999px.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h3 id="quinielas-heading2" style="columns: #002626;text-align:center;">\n    Escoge una opción:\n  </h3>\n  <button id="quinielas-button9" ion-button color="dark" block on-click="goToMisQuinielas()">\n    Mis quinielas\n  </button>\n  <button id="quinielas-button7" ion-button color="dark" block on-click="goToUnirseAQuiniela()">\n    Unirme a una quiniela existente\n  </button>\n  <button id="quinielas-button8" ion-button color="dark" block on-click="goToNuevaQuiniela()">\n    Crear una nueva quiniela\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quinielas\quinielas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], QuinielasPage);
    return QuinielasPage;
    var QuinielasPage_1;
}());

//# sourceMappingURL=quinielas.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuinielaUnidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quinielas_quinielas__ = __webpack_require__(40);
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
            selector: 'page-quiniela-unida',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quiniela-unida\quiniela-unida.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>\n      Quiniela Unida\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10" style="background-color:#95C623;">\n  <h4 id="quinielaUnida-heading8" style="color:#002626;font-weight:400;text-align:center;">\n    ¡Excelente! Te has unido a la quiniela: "Familia"\n  </h4>\n  <img src="assets/img/DBaP35kcT969qI7zvrwi_b314541f49ce483dd4c47d0142a47f77-icono-de-pelota-de-ftbol-cl-sico-by-vexels.png" style="display:block;width:25%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h4 id="quinielaUnida-heading9" style="color:#002626;font-weight:400;text-align:center;">\n    La quiniela aparece ahora en la sección de "Mis quinielas"\n  </h4>\n  <button id="quinielaUnida-button11" ion-button color="dark" block on-click="goToQuinielas()">\n    Regresar a quinielas\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\quiniela-unida\quiniela-unida.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], QuinielaUnidaPage);
    return QuinielaUnidaPage;
}());

//# sourceMappingURL=quiniela-unida.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisQuinielasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-mis-quinielas',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\mis-quinielas\mis-quinielas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mis quinielas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9" style="background-color:#95C623;">\n  <h4 id="misQuinielas-heading11" style="color:#FFFFFF;text-align:center;">\n    Quinielas a las que estás unido:\n  </h4>\n  <ion-list id="misQuinielas-list9">\n    <ion-item-sliding>\n      <ion-item color="none" id="misQuinielas-list-item40">\n        Familia\n        <ion-icon name="arrow-round-back" item-right></ion-icon>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="dark">\n          Salir de quiniela\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item color="none" id="misQuinielas-list-item41">\n        12SINGLETONS\n        <ion-icon name="arrow-round-back" item-right></ion-icon>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="dark">\n          Salir de quiniela\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item color="none" id="misQuinielas-list-item42">\n        Ingenieros\n        <ion-icon name="arrow-round-back" item-right></ion-icon>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="dark">\n          Salir de quiniela\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\mis-quinielas\mis-quinielas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MisQuinielasPage);
    return MisQuinielasPage;
}());

//# sourceMappingURL=mis-quinielas.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnirseAQuinielaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiniela_unida_quiniela_unida__ = __webpack_require__(41);
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
            selector: 'page-unirse-aquiniela',template:/*ion-inline-start:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\unirse-aquiniela\unirse-aquiniela.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Unirse a quiniela\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11" style="background-color:#95C623;">\n  <h4 id="unirseAQuiniela-heading16" style="color:#FFFFFF;font-weight:400;text-align:center;">\n    Ingresa el código de la quiniela a la que deseas unirte:\n  </h4>\n  <form id="unirseAQuiniela-form10">\n    <ion-item id="unirseAQuiniela-textarea4">\n      <ion-label></ion-label>\n      <ion-textarea placeholder="Ingresa aquí tu código"></ion-textarea>\n    </ion-item>\n  </form>\n  <button id="unirseAQuiniela-button13" ion-button color="dark" block on-click="goToQuinielaUnida()">\n    Unirse\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\barri\Documents\4to año - 1er semestre\INTERACCIÓN HUMANO-COMPUTADOR\Proyecto\Te-La-Cambio\src\pages\unirse-aquiniela\unirse-aquiniela.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], UnirseAQuinielaPage);
    return UnirseAQuinielaPage;
}());

//# sourceMappingURL=unirse-aquiniela.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map