(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    The world is your oyster.\n    <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be your guide.</p>\n    <ion-button (click)=\"testPlugin()\" color='primary' size=\"large\">Test Fullscreen Video</ion-button>\n    <ion-button *ngIf=\"platform\" [href]=\"'./embedded'\" routerDirection=\"forward\" color='primary' size=\"large\">Test Embedded Videos</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var capacitor_video_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! capacitor-video-player */ "./node_modules/capacitor-video-player/dist/esm/index.js");




var CapacitorVideoPlayer = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].CapacitorVideoPlayer, Device = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Device;
var videoFrom = "http";
/*  comment line above and uncomment line below
    to use videos from assets
*/
//const videoFrom:string = "assets";
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.ngAfterViewInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var info;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Device.getInfo()];
                    case 1:
                        info = _a.sent();
                        if (info.platform === "ios" || info.platform === "android") {
                            this._videoPlayer = CapacitorVideoPlayer;
                            if (info.platform === "ios") {
                                this._url = "public/assets/video/video.mp4";
                            }
                            else {
                                this._url = "raw/video";
                            }
                            this.platform = false;
                        }
                        else {
                            this.platform = true;
                            this._videoPlayer = capacitor_video_player__WEBPACK_IMPORTED_MODULE_3__["CapacitorVideoPlayer"];
                            this._url = "assets/video/video.mp4";
                        }
                        if (videoFrom === "http") {
                            this._url = "https://clips.vorwaerts-gmbh.de/VfE_html5.mp4";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.testPlugin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var info, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Device.getInfo()];
                    case 1:
                        info = _a.sent();
                        document.addEventListener('jeepCapVideoPlayerPlay', function (e) { console.log('Event jeepCapVideoPlayerPlay ', e.detail); }, false);
                        document.addEventListener('jeepCapVideoPlayerPause', function (e) { console.log('Event jeepCapVideoPlayerPause ', e.detail); }, false);
                        document.addEventListener('jeepCapVideoPlayerEnded', function (e) { console.log('Event jeepCapVideoPlayerEnded ', e.detail); }, false);
                        return [4 /*yield*/, this._videoPlayer.initPlayer({ mode: "fullscreen", url: this._url })];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());

// "https://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
// "http://www.youtube.com/embed/W7qWa52k-nE" does not work


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map