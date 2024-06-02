(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/main-nav/main-nav.component */ "./src/app/shared/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'sgbb';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_shared_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__["MainNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
    scroll(idName) {
        const el = document.getElementById(idName);
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 53, vars: 0, consts: [["id", "contact", 1, "footer-container"], [1, "footer-nav"], [3, "click"], [1, "map-image"], ["src", "assets/images/footer/map.svg", "alt", "mapa"], [1, "contact-wapper"], [1, "material-icons"], ["href", "mailto:sgbielsko@gmail.com"], ["href", "https://www.facebook.com/SGBB-Krzysztof-B\u0105k-102178941859699"], [1, "material-icons", "facebook"], [1, "copyrigh"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_h2_click_2_listener($event) { return ctx.scroll("baner"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SGBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_p_click_6_listener($event) { return ctx.scroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "O nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_p_click_9_listener($event) { return ctx.scroll("dig-process"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Proces kopania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_p_click_12_listener($event) { return ctx.scroll("offer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Oferta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_p_click_15_listener($event) { return ctx.scroll("equipment"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sprz\u0119t i realizacje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_p_click_18_listener($event) { return ctx.scroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Skontaktuj si\u0119 z nami");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " face ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Krzysztof B\u0105k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "sgbielsko@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " watch_later ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "godziny otwarcia: pon-sob: 8:00 - 20:00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "+48 781 855 146");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "nasz facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Created by slawomir.dev\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Baskervville\";\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Roboto Slab\";\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\n.u-spacer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.u-display-none[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  background-color: #FFCC75;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  width: 1600px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 10vh;\n  margin-bottom: 10vh;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.copyrigh[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #fff;\n  background-color: #000;\n  padding: 1rem;\n}\n\n.footer-nav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  color: #000;\n  cursor: pointer;\n}\n\n.footer-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: #1D68B3;\n}\n\n.contact-wapper[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n.contact-wapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.contact-wapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-top: 1rem;\n}\n\n.contact-wapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1D68B3;\n  margin-right: 1rem;\n  font-size: 2rem;\n}\n\n.contact-wapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .contact-wapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.contact-wapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%] {\n  color: #3b5998;\n}\n\n.map-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n@media screen and (max-width: 1600px) {\n  .footer-container[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n\n  .contact-wapper[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n\n@media screen and (max-width: 1300px) {\n  .footer-container[_ngcontent-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    max-width: 100%;\n    padding: 1rem;\n    margin-top: 5vh;\n    margin-bottom: 5vh;\n  }\n  .footer-container[_ngcontent-%COMP%]   .map-image[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .footer-container[_ngcontent-%COMP%]   .contact-wapper[_ngcontent-%COMP%] {\n    margin-top: 5vh;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9HOlxcUHJvamVrdHlcXHNnYmJcXHNnYmIvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9mb290ZXIvRzpcXFByb2pla3R5XFxzZ2JiXFxzZ2JiL3NyY1xcdmFyaWFibGVzcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvZm9vdGVyL0c6XFxQcm9qZWt0eVxcc2diYlxcc2diYi9zcmNcXGFwcFxcc2hhcmVkXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0VBQ0EsV0VaVTtBRFdaOztBRElBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FDREY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURNQTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtBQ0hGOztBRS9EQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCRERZO0VDRVosNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FGa0VGOztBRTlEQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUZpRUY7O0FFOURBO0VBQ0UsV0FBQTtFQUNBLFdEckJXO0VDc0JYLHNCRHJCVTtFQ3NCVixhQUFBO0FGaUVGOztBRTdERTtFQUNFLGVBQUE7QUZnRUo7O0FFOURFO0VBQ0UscUJBQUE7QUZnRUo7O0FFL0RJO0VBQ0UsZ0JBQUE7QUZpRU47O0FFaEVNO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdEcENJO0VDcUNKLGVBQUE7QUZrRVI7O0FFakVRO0VBQ0UsY0R0Q0U7QUR5R1o7O0FFM0RBO0VBQ0UsWUFBQTtBRjhERjs7QUU3REU7RUFDRSx5QkFBQTtBRitESjs7QUU3REU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBRitESjs7QUU5REk7RUFDRSxjRHhETTtFQ3lETixrQkFBQTtFQUNBLGVBQUE7QUZnRU47O0FFOURJO0VBQ0UsaUJBQUE7QUZnRU47O0FFOURJO0VBQ0UsY0QzREs7QUQySFg7O0FFekRFO0VBQ0UsWUFBQTtBRjRESjs7QUV4REE7RUFDRTtJQUNFLGlCQUFBO0VGMkRGOztFRXpEQTtJQUNFLFdBQUE7RUY0REY7QUFDRjs7QUV6REE7RUFDRTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VGMkRGO0VFMURFO0lBQ0UsYUFBQTtFRjRESjtFRTFERTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VGNERKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzcy5zY3NzJztcclxuLy9SZXNldCBsYXlvdXQgKyB1dGlsaXRpZXNcclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICRtYWluLWRhcms7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogJ0Jhc2tlcnZ2aWxsZSc7XHJcbn1cclxuc3BhbntcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYic7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYic7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmg0IHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYic7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcblxyXG4vLyB1dGlsaXRpZXNcclxuXHJcbi51LXNwYWNlcntcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi51LWRpc3BsYXktbm9uZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsImh0bWwge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJCYXNrZXJ2dmlsbGVcIjtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnUtc3BhY2VyIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4udS1kaXNwbGF5LW5vbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNDNzU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDE2MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb3B5cmlnaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmZvb3Rlci1uYXYgaDIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9vdGVyLW5hdiB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5mb290ZXItbmF2IHVsIGxpIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5mb290ZXItbmF2IHVsIGxpIHAge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb290ZXItbmF2IHVsIGxpIHA6aG92ZXIge1xuICBjb2xvcjogIzFENjhCMztcbn1cblxuLmNvbnRhY3Qtd2FwcGVyIHtcbiAgd2lkdGg6IDYwMHB4O1xufVxuLmNvbnRhY3Qtd2FwcGVyIGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jb250YWN0LXdhcHBlciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmNvbnRhY3Qtd2FwcGVyIGRpdiBpIHtcbiAgY29sb3I6ICMxRDY4QjM7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLmNvbnRhY3Qtd2FwcGVyIGRpdiBwLCAuY29udGFjdC13YXBwZXIgZGl2IGEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5jb250YWN0LXdhcHBlciBkaXYgLmZhY2Vib29rIHtcbiAgY29sb3I6ICMzYjU5OTg7XG59XG5cbi5tYXAtaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTI4MHB4O1xuICB9XG5cbiAgLmNvbnRhY3Qtd2FwcGVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5mb290ZXItY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIH1cbiAgLmZvb3Rlci1jb250YWluZXIgLm1hcC1pbWFnZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZm9vdGVyLWNvbnRhaW5lciAuY29udGFjdC13YXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSIsIi8vIGNvbG9yc1xyXG4kbWFpbi13aGl0ZTogI2ZmZjtcclxuJG1haW4tZGFyazogIzAwMDtcclxuJGJsdWUtZGFyazogIzFENjhCMztcclxuJGJsdWUtbGlnaHQ6ICM4Q0M2RkY7XHJcbiRtYWluLXllbGxvdzogI0ZGQ0M3NTtcclxuXHJcbi8vc29jaWFsXHJcbiRmYWNlYm9vazogIzNiNTk5ODtcclxuXHJcblxyXG4vLyBtZWFzdXJlbWVudFxyXG4kbmF2LWhlYWRlcjogNjRweDtcclxuIiwiQGltcG9ydCAnc3JjL3ZhcmlhYmxlc3Muc2Nzcyc7XHJcbkBpbXBvcnQgJ3NyYy9zdHlsZXMuc2Nzcyc7XHJcblxyXG5cclxuOmhvc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi15ZWxsb3c7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbi5mb290ZXItY29udGFpbmVye1xyXG4gIHdpZHRoOiAxNjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNvcHlyaWdoe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAkbWFpbi13aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1kYXJrO1xyXG4gIHBhZGRpbmc6IDFyZW1cclxufVxyXG5cclxuLmZvb3Rlci1uYXYge1xyXG4gIGgye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogJG1haW4tZGFyaztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgIGNvbG9yOiAkYmx1ZS1kYXJrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LXdhcHBlcntcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaDN7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOztcclxuICB9XHJcbiAgZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogJGJsdWUtZGFyaztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBwLCBhIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICAuZmFjZWJvb2t7XHJcbiAgICAgIGNvbG9yOiAkZmFjZWJvb2s7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm1hcC1pbWFnZXtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgLmZvb3Rlci1jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcclxuICB9XHJcbiAgLmNvbnRhY3Qtd2FwcGVye1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAuZm9vdGVyLWNvbnRhaW5lcntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gICAgLm1hcC1pbWFnZXtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LXdhcHBlcntcclxuICAgICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/main-nav/main-nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/main-nav/main-nav.component.ts ***!
  \*******************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "visible-menu": a0 }; };
const _c1 = function (a0) { return { "menu-close": a0 }; };
const _c2 = function (a0) { return { "u-display-none": a0 }; };
var ElementViewPosition;
(function (ElementViewPosition) {
    ElementViewPosition["Banner"] = "Banner";
    ElementViewPosition["BelowHeader"] = "BelowHeader";
})(ElementViewPosition || (ElementViewPosition = {}));
class MainNavComponent {
    constructor() {
        this.visible = true;
        this.menuOpen = false;
    }
    scroll(idName) {
        const el = document.getElementById(idName);
        el.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu(toggle) {
        this.menuOpen = toggle;
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], decls: 28, vars: 9, consts: [[1, "main-nav", 3, "ngClass"], ["mainNav", ""], [1, "main-nav_logo"], [3, "click"], ["src", "assets/images/logo.svg", "alt", "logo"], [1, "u-spacer"], [1, "main-nav_list"], [1, "material-icons", "menu-icon", 3, "click"], [1, "main-manu", 3, "ngClass"], [1, "overlayer", 3, "ngClass", "click"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_div_click_3_listener($event) { return ctx.scroll("baner"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SGBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_span_click_9_listener($event) { return ctx.toggleMenu(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_p_click_13_listener($event) { return ctx.scroll("about"); })("click", function MainNavComponent_Template_p_click_13_listener($event) { return ctx.toggleMenu(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "O nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_p_click_16_listener($event) { return ctx.scroll("dig-process"); })("click", function MainNavComponent_Template_p_click_16_listener($event) { return ctx.toggleMenu(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Proces kopania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_p_click_19_listener($event) { return ctx.scroll("offer"); })("click", function MainNavComponent_Template_p_click_19_listener($event) { return ctx.toggleMenu(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Oferta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_p_click_22_listener($event) { return ctx.scroll("equipment"); })("click", function MainNavComponent_Template_p_click_22_listener($event) { return ctx.toggleMenu(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sprz\u0119t i realizacje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_p_click_25_listener($event) { return ctx.scroll("contact"); })("click", function MainNavComponent_Template_p_click_25_listener($event) { return ctx.toggleMenu(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_div_click_27_listener($event) { return ctx.toggleMenu(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.visible));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, !ctx.menuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, !ctx.menuOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  height: 64px;\n  position: fixed;\n  display: -webkit-box;\n  display: flex;\n  width: 100vW;\n  z-index: 2;\n}\n\n.main-nav[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 100vW;\n}\n\n.main-nav[_ngcontent-%COMP%]   .main-nav_logo[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 250px;\n}\n\n.main-nav[_ngcontent-%COMP%]   .main-nav_logo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .main-nav[_ngcontent-%COMP%]   .main-nav_logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 0.5rem;\n  cursor: pointer;\n}\n\n.main-nav[_ngcontent-%COMP%]   .main-nav_logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: calc(64px - 2rem);\n  line-height: calc(64px - 2rem);\n  vertical-align: top;\n}\n\n.main-nav[_ngcontent-%COMP%]   .main-nav_list[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.main-nav[_ngcontent-%COMP%]   .main-nav_list[_ngcontent-%COMP%]   .main-manu[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n}\n\n.main-nav[_ngcontent-%COMP%]   .main-nav_list[_ngcontent-%COMP%]   .main-manu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 1rem;\n  text-transform: uppercase;\n}\n\n.main-nav[_ngcontent-%COMP%]   .main-nav_list[_ngcontent-%COMP%]   .main-manu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n}\n\n.visible-menu[_ngcontent-%COMP%] {\n  background-color: #000;\n  opacity: 0.7;\n}\n\n@media screen and (max-width: 1000px) {\n  .main-nav[_ngcontent-%COMP%] {\n    z-index: 3;\n  }\n  .main-nav[_ngcontent-%COMP%]   .main-nav_list[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .main-nav[_ngcontent-%COMP%]   .main-nav_list[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n    display: block;\n    color: white;\n    cursor: pointer;\n    height: 64px;\n    text-align: right;\n    padding-right: 1rem;\n  }\n  .main-nav[_ngcontent-%COMP%]   .main-nav_list[_ngcontent-%COMP%]   .main-manu[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #000;\n    top: calc(64px - 1px);\n    width: 250px;\n    right: 0;\n    display: block;\n    height: auto;\n    -webkit-transition: all 200ms ease-in-out;\n    transition: all 200ms ease-in-out;\n  }\n  .main-nav[_ngcontent-%COMP%]   .main-nav_list[_ngcontent-%COMP%]   .main-manu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-bottom: 2rem;\n  }\n  .main-nav[_ngcontent-%COMP%]   .main-nav_list[_ngcontent-%COMP%]   .menu-close[_ngcontent-%COMP%] {\n    right: -250px;\n  }\n\n  .overlayer[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-color: #000;\n    opacity: 0.7;\n    z-index: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21haW4tbmF2L0c6XFxQcm9qZWt0eVxcc2diYlxcc2diYi9zcmNcXGFwcFxcc2hhcmVkXFxtYWluLW5hdlxcbWFpbi1uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tYWluLW5hdi9HOlxcUHJvamVrdHlcXHNnYmJcXHNnYmIvc3JjXFx2YXJpYWJsZXNzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlDU1c7RURSWCxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUVERjs7QUZJQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FFREY7O0FGRUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUVBSjs7QUZDSTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUVDTjs7QUZDSTtFQUNFLFdDdkJPO0VEd0JQLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRUNOOztBRkdJO0VBQ0UsYUFBQTtBRUROOztBRkdJO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtBRUROOztBRkVNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUVBUjs7QUZDUTtFQUNFLFdDNUNHO0VENkNILGVBQUE7QUVDVjs7QUZNQTtFQUNFLHNCQ3BEVTtFRHFEVixZQUFBO0FFSEY7O0FGTUE7RUFDRTtJQUNFLFVBQUE7RUVIRjtFRklFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VFRko7RUZHSTtJQUNFLGNBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VFRE47RUZHSTtJQUNFLGtCQUFBO0lBQ0Esc0JDeEVJO0lEeUVKLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLHlDQUFBO0lBQUEsaUNBQUE7RUVETjtFRkVNO0lBQ0Usa0JBQUE7SUFDQSxvQkFBQTtFRUFSO0VGR0k7SUFDRSxhQUFBO0VFRE47O0VGS0E7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxzQkM3RlE7SUQ4RlIsWUFBQTtJQUNBLFVBQUE7RUVGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzcy5zY3NzJztcclxuXHJcbjpob3N0e1xyXG4gIGhlaWdodDogJG5hdi1oZWFkZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMHZXO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5tYWluLW5hdiB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDEwMHZXO1xyXG4gIC5tYWluLW5hdl9sb2dve1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgZGl2LCBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICRtYWluLXdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoI3skbmF2LWhlYWRlcn0gLSAycmVtKTtcclxuICAgICAgbGluZS1oZWlnaHQ6IGNhbGMoI3skbmF2LWhlYWRlcn0gLSAycmVtKTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1haW4tbmF2X2xpc3Qge1xyXG4gICAgLm1lbnUtaWNvbntcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tYWluLW1hbnV7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBsaXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgY29sb3I6ICRtYWluLXdoaXRlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnZpc2libGUtbWVudSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tZGFyaztcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5tYWluLW5hdiB7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgLm1haW4tbmF2X2xpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAubWVudS1pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGhlaWdodDogI3skbmF2LWhlYWRlcn07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICAubWFpbi1tYW51IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tZGFyaztcclxuICAgICAgICB0b3A6IGNhbGMoI3skbmF2LWhlYWRlcn0gLSAxcHgpOztcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJiAubWVudS1jbG9zZSB7XHJcbiAgICAgICAgcmlnaHQ6IC0yNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAub3ZlcmxheWVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tZGFyaztcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGNvbG9yc1xyXG4kbWFpbi13aGl0ZTogI2ZmZjtcclxuJG1haW4tZGFyazogIzAwMDtcclxuJGJsdWUtZGFyazogIzFENjhCMztcclxuJGJsdWUtbGlnaHQ6ICM4Q0M2RkY7XHJcbiRtYWluLXllbGxvdzogI0ZGQ0M3NTtcclxuXHJcbi8vc29jaWFsXHJcbiRmYWNlYm9vazogIzNiNTk5ODtcclxuXHJcblxyXG4vLyBtZWFzdXJlbWVudFxyXG4kbmF2LWhlYWRlcjogNjRweDtcclxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMHZXO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubWFpbi1uYXYge1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwdlc7XG59XG4ubWFpbi1uYXYgLm1haW4tbmF2X2xvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLXdpZHRoOiAyNTBweDtcbn1cbi5tYWluLW5hdiAubWFpbi1uYXZfbG9nbyBkaXYsIC5tYWluLW5hdiAubWFpbi1uYXZfbG9nbyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbi1uYXYgLm1haW4tbmF2X2xvZ28gc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IGNhbGMoNjRweCAtIDJyZW0pO1xuICBsaW5lLWhlaWdodDogY2FsYyg2NHB4IC0gMnJlbSk7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4ubWFpbi1uYXYgLm1haW4tbmF2X2xpc3QgLm1lbnUtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWFpbi1uYXYgLm1haW4tbmF2X2xpc3QgLm1haW4tbWFudSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW4tbmF2IC5tYWluLW5hdl9saXN0IC5tYWluLW1hbnUgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLm1haW4tbmF2IC5tYWluLW5hdl9saXN0IC5tYWluLW1hbnUgbGkgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aXNpYmxlLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAubWFpbi1uYXYge1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbiAgLm1haW4tbmF2IC5tYWluLW5hdl9saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLm1haW4tbmF2IC5tYWluLW5hdl9saXN0IC5tZW51LWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIH1cbiAgLm1haW4tbmF2IC5tYWluLW5hdl9saXN0IC5tYWluLW1hbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIHRvcDogY2FsYyg2NHB4IC0gMXB4KTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbiAgfVxuICAubWFpbi1uYXYgLm1haW4tbmF2X2xpc3QgLm1haW4tbWFudSBsaSB7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICB9XG4gIC5tYWluLW5hdiAubWFpbi1uYXZfbGlzdCAubWVudS1jbG9zZSB7XG4gICAgcmlnaHQ6IC0yNTBweDtcbiAgfVxuXG4gIC5vdmVybGF5ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgei1pbmRleDogMjtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-nav',
                templateUrl: './main-nav.component.html',
                styleUrls: ['./main-nav.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class SharedRoutingModule {
}
SharedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedRoutingModule });
SharedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedRoutingModule_Factory(t) { return new (t || SharedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-routing.module */ "./src/app/shared/shared-routing.module.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/shared/main-nav/main-nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"]], exports: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"]
                ],
                exports: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Projekty\sgbb\sgbb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map