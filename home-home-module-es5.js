function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./src/app/home/home-banner/home-banner.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/home/home-banner/home-banner.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomeBannerComponent */

  /***/
  function srcAppHomeHomeBannerHomeBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeBannerComponent", function () {
      return HomeBannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeBannerComponent =
    /*#__PURE__*/
    function () {
      function HomeBannerComponent() {
        _classCallCheck(this, HomeBannerComponent);

        this.village = '';
        this.villages = ['Andrychowie', 'Baczynie', 'Barwałdie', 'Białce', 'Bielsku-Białej', 'Biertowicach', 'Bierach', 'Brennej', 'Brzezince', 'Brzuśniku', 'Buczkowicach', 'Budzowie', 'Bugaju', 'Bujakowie', 'Bystrej', 'Cięcinie', 'Cisiecu', 'Czernichowie', 'Dąbrówce', 'Gilowicach', 'Glince', 'Godziszce', 'Gorzeniu', 'Górkce Małej', 'Górce Wielkiej', 'Grodźcu', 'Grzechynie', 'Harbutowicach', 'Hucisku', 'Inwałdzie', 'Istebnen', 'Izdebniku', 'Jachówce', 'Żarnówce', 'Jasienicach', 'Jastrzębiu', 'Jaworzenie', 'Jaworzynce', 'Jeleśni', 'Juszczynie', 'Kaczynie', 'Kalnej', 'Kalwari Zebrzydowskiej', 'Kamesznicy', 'Kiczorze', 'Kleczynie Górnej i Dolnej', 'Kocierzu', 'Koconiu', 'Koniakowie', 'Korbielowie', 'Koszarawie', 'Kozińcu', 'Krzeszowie', 'Krzyżowej', 'Kubalonce', 'Kukowie', 'Kurowie', 'Lachowicach', 'Lalkach', 'Lanckoronie', 'Leśnej', 'Łękawicach', 'Łodygowicach', 'Makowie Podhalańskim', 'Marcówce', 'Mącznej', 'Mesznej', 'Międzybrodziu Bialskim', 'Międzybrodziu Żywieckim', 'Milówce', 'Mucharzu', 'Mutnej', 'Nieledwi', 'Okrajniku', 'Palczy', 'Peweli Małej', 'Peweli Ślemieńskiej', 'Peweli Wielkiej', 'Pewelce', 'Pietrzykowicach', 'Ponikiowie', 'Porąbce', 'Przybędzy', 'Przyborowie', 'Przyłękowie', 'Radziechowach-Wieprz', 'Rajczy', 'Rybarzowicach', 'Rycere Dolnej i Górnej', 'Rychwałdzie', 'Rychwałdeku', 'Rzykach', 'Skawce', 'Skawicach', 'Skawinkach', 'Słotwinie', 'Soblówce', 'Sopotni Małej', 'Sopotni Wielkiej', 'Sóli', 'Stroniach', 'Stryszawie', 'Stryszówce', 'Suchej Beskidzkiech', 'Sułkowicach', 'Szczyru', 'Ślemieniu', 'Śleszowicach', 'Świętoszówce', 'Świnnej', 'Świnnej Porębie', 'Targanicach', 'Targoszowie', 'Tarnawowie Górnej i Dolnej', 'Tresnie', 'Trzebinie', 'Ujsołach', 'Ustroniu', 'Wadowicach', 'Węgierskiej Górce', 'Wilkowicach', 'Wiśle', 'Zachełmnej', 'Zagórniku', 'Zagórzu', 'Zakrzewiu', 'Zarzeczu', 'Zawadce', 'Zawoji', 'Zembrzycach', 'Złatnej', 'Zwardoniu', 'Żabnicy', 'Żywcu'];
        this.villagesNormalName = ['Andrychów', 'Baczyn', 'Barwałd', 'Białka', 'Bielsko-Biała', 'Biertowice', 'Biery', 'Brenna', 'Brzezinka', 'Brzuśnik', 'Buczkowice', 'Budzów', 'Bugaj', 'Bujaków', 'Bystra', 'Cięcina', 'Cisiec', 'Czernichów', 'Dąbrówka', 'Gilowice', 'Glinka', 'Godziszka', 'Gorzeń', 'Górki Małe', 'Górki Wielkie', 'Grodziec', 'Grzechynia', 'Harbutowice', 'Hucisko', 'Inwałd', 'Istebna', 'Izdebnik', 'Jachówka Żarnówka', 'Jasienica', 'Jastrzębia', 'Jaworze', 'Jaworzynka', 'Jeleśnia, Juszczyn', 'Juszczyna', 'Kaczynam', 'Kalna', 'Kalwaria Zebrzydowska', 'Kamesznica', 'Kiczora', 'Kleczna Górna i Dolna', 'Kocierz', 'Kocoń', 'Koniaków', 'Korbielów', 'Koszarawa', 'Koziniec', 'Krzeszów', 'Krzyżowa', 'Kubalonka', 'Kuków', 'Kurów', 'Lachowice', 'Laliki', 'Lanckorona', 'Lesnica', 'Łękawica', 'Łodygowice', 'Maków Podhalański', 'Marcówka', 'Mączne', 'Meszna', 'Międzybrodzie Bialskie', 'Międzybrodzie Żywieckie', 'Milówka', 'Mucharz', 'Mutne', 'Nieledwia', 'Okrajnik', 'Palcza', 'Pewel Mała', 'Pewel Ślemieńska', 'Pewel Wielka', 'Pewelka', 'Pietrzykowice', 'Ponikiew', 'Porąbka', 'Przybędza', 'Przyborów', 'Przyłęków', 'Radziechowy-Wieprz', 'Rajcza', 'Rybarzowice', 'Rycerka Dolna i Górna', 'Rychwałd', 'Rychwałdek', 'Rzyki', 'Skawce', 'Skawica', 'Skawinki', 'Słotwina', 'Soblówka', 'Sopotnia Mała', 'Sopotnia Wielka', 'Sól', 'Stronie', 'Stryszawa', 'Stryszów', 'Sucha Beskidzka', 'Sułkowice', 'Szczyrk', 'Ślemień', 'Śleszowice', 'Świętoszówka', 'Świnna', 'Świnna Poręba', 'Targanice', 'Targoszów', 'Tarnawa Górna i Dolna', 'Tresna', 'Trzebinia', 'Ujsoły', 'Ustroń', 'Wadowice', 'Węgierska Górka', 'Wilkowice', 'Wisła', 'Zachełmna', 'Zagórnik', 'Zagórze', 'Zakrzów', 'Zarzecze', 'Zawadka', 'Zawoja', 'Zembrzyce', 'Złatnia', 'Zwardoń', 'Żabnica', 'Żywiec'];
      }

      _createClass(HomeBannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.typingAnimation();
        }
      }, {
        key: "typingAnimation",
        value: function typingAnimation() {
          var _this = this;

          var index = Math.floor(this.villages.length * Math.random());
          var vilageName = this.villages[index] + '...';
          var counter = 0;
          var charLength = vilageName.length;
          var villageInterval = setInterval(function () {
            if (_this.village.length === charLength) {
              clearInterval(villageInterval);

              _this.clearVilageName();
            } else {
              _this.village = _this.village + vilageName[counter];
              counter += 1;
            }
          }, 100);
        }
      }, {
        key: "clearVilageName",
        value: function clearVilageName() {
          var _this2 = this;

          var keepVilageNameTimeout = setTimeout(function () {
            _this2.village = '';

            _this2.typingAnimation();
          }, 5000);
        }
      }]);

      return HomeBannerComponent;
    }();

    HomeBannerComponent.ɵfac = function HomeBannerComponent_Factory(t) {
      return new (t || HomeBannerComponent)();
    };

    HomeBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeBannerComponent,
      selectors: [["app-home-banner"]],
      decls: 13,
      vars: 1,
      consts: [[1, "background-image"], [1, "title"], [1, "blinkingAnimation"]],
      template: function HomeBannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Studnie G\u0142\u0119binowe Bielsko Bia\u0142a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Jeste\u015Bmy firm\u0105 z wieloletnim do\u015Bwiadczeniem w bran\u017Cy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Specjalizujemy si\u0119 w kopaniu studni w terenach g\xF3rzystych");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Kopali\u015Bmy w: ", ctx.village, " ");
        }
      },
      styles: ["header[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.background-image[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/banner/banner.jpg\");\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  max-width: 60vw;\n  padding: 1rem;\n}\n\n.background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #fff;\n  margin-bottom: 3rem;\n}\n\n.background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFCC75;\n  margin-top: 3rem;\n}\n\n.background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .blinkingAnimation[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  -webkit-animation: blink-animation 800ms steps(5, start) infinite;\n          animation: blink-animation 800ms steps(5, start) infinite;\n}\n\n.background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n@keyframes blink-animation {\n  to {\n    visibility: hidden;\n  }\n}\n\n@-webkit-keyframes blink-animation {\n  to {\n    visibility: hidden;\n  }\n}\n\n@media screen and (max-width: 1600px) {\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n  }\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\n@media screen and (max-width: 1100px) {\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    min-height: 350px;\n    max-width: 80vw;\n    padding: 1rem;\n  }\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n  }\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n  }\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .blinkingAnimation[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    min-height: 400px;\n    max-width: 80vw;\n    padding: 0.5rem;\n    margin-top: 4rem;\n  }\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin-bottom: 2rem;\n  }\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .blinkingAnimation[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .background-image[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWJhbm5lci9HOlxcUHJvamVrdHlcXHNnYmJcXHNnYmIvc3JjXFxhcHBcXGhvbWVcXGhvbWUtYmFubmVyXFxob21lLWJhbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLWJhbm5lci9ob21lLWJhbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLWJhbm5lci9HOlxcUHJvamVrdHlcXHNnYmJcXHNnYmIvc3JjXFx2YXJpYWJsZXNzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0FDREY7O0FER0E7RUFDRSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUY7O0FEQ0U7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQUk7RUFDRSx5QkFBQTtFQUNBLFdFbkJPO0VGb0JQLG1CQUFBO0FDRU47O0FEQUk7RUFDRSxjRW5CUTtFRm9CUixnQkFBQTtBQ0VOOztBRERNO0VBQ0UsZUFBQTtFQUNBLGlFQUFBO1VBQUEseURBQUE7QUNHUjs7QURBSTtFQUNFLFdFL0JPO0FEaUNiOztBRElBO0VBQ0U7SUFDRSxrQkFBQTtFQ0RGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLGtCQUFBO0VDREY7QUFDRjs7QURJQTtFQUdNO0lBQ0UsZUFBQTtFQ0pOO0VETUk7SUFDRSxpQkFBQTtFQ0pOO0VETUk7SUFDRSxpQkFBQTtFQ0pOO0FBQ0Y7O0FEU0E7RUFFSTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7RUNSSjtFRFNJO0lBQ0UsaUJBQUE7RUNQTjtFRFNJO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQ1BOO0VEUU07SUFDRSxpQkFBQTtFQ05SO0VEU0k7SUFDRSxpQkFBQTtFQ1BOO0FBQ0Y7O0FEWUE7RUFFSTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ1hKO0VEWUk7SUFDRSxpQkFBQTtFQ1ZOO0VEWUk7SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0VDVk47RURXTTtJQUNFLGlCQUFBO0VDVFI7RURZSTtJQUNFLGVBQUE7RUNWTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLWJhbm5lci9ob21lLWJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlc3Muc2Nzcyc7XHJcblxyXG5oZWFkZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFubmVyL2Jhbm5lci5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC50aXRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIG1heC13aWR0aDogNjB2dztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBoMSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiAkbWFpbi13aGl0ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgY29sb3I6ICRtYWluLXllbGxvdztcclxuICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgLmJsaW5raW5nQW5pbWF0aW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBhbmltYXRpb246IGJsaW5rLWFuaW1hdGlvbiA4MDBtcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6ICRtYWluLXdoaXRlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBibGluay1hbmltYXRpb24ge1xyXG4gIHRvIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rLWFuaW1hdGlvbiB7XHJcbiAgdG8ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gICAgLnRpdGxle1xyXG4gICAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIH1cclxuICAgICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW1cclxuICAgICAgfVxyXG4gICAgICBoM3tcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAuYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgICAudGl0bGV7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgLmJsaW5raW5nQW5pbWF0aW9ue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gICAgLnRpdGxle1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgICAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgLmJsaW5raW5nQW5pbWF0aW9ue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImhlYWRlciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmFubmVyL2Jhbm5lci5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYmFja2dyb3VuZC1pbWFnZSAudGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1heC13aWR0aDogNjB2dztcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5iYWNrZ3JvdW5kLWltYWdlIC50aXRsZSBoMSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLmJhY2tncm91bmQtaW1hZ2UgLnRpdGxlIGgyIHtcbiAgY29sb3I6ICNGRkNDNzU7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG4uYmFja2dyb3VuZC1pbWFnZSAudGl0bGUgaDIgLmJsaW5raW5nQW5pbWF0aW9uIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBhbmltYXRpb246IGJsaW5rLWFuaW1hdGlvbiA4MDBtcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XG59XG4uYmFja2dyb3VuZC1pbWFnZSAudGl0bGUgaDMge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQGtleWZyYW1lcyBibGluay1hbmltYXRpb24ge1xuICB0byB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstYW5pbWF0aW9uIHtcbiAgdG8ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5iYWNrZ3JvdW5kLWltYWdlIC50aXRsZSBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5iYWNrZ3JvdW5kLWltYWdlIC50aXRsZSBoMiB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgLmJhY2tncm91bmQtaW1hZ2UgLnRpdGxlIGgzIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5iYWNrZ3JvdW5kLWltYWdlIC50aXRsZSB7XG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgbWF4LXdpZHRoOiA4MHZ3O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLmJhY2tncm91bmQtaW1hZ2UgLnRpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAuYmFja2dyb3VuZC1pbWFnZSAudGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgLmJhY2tncm91bmQtaW1hZ2UgLnRpdGxlIGgyIC5ibGlua2luZ0FuaW1hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmJhY2tncm91bmQtaW1hZ2UgLnRpdGxlIGgzIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmJhY2tncm91bmQtaW1hZ2UgLnRpdGxlIHtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBtYXgtd2lkdGg6IDgwdnc7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gIH1cbiAgLmJhY2tncm91bmQtaW1hZ2UgLnRpdGxlIGgxIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuYmFja2dyb3VuZC1pbWFnZSAudGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgLmJhY2tncm91bmQtaW1hZ2UgLnRpdGxlIGgyIC5ibGlua2luZ0FuaW1hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgLmJhY2tncm91bmQtaW1hZ2UgLnRpdGxlIGgzIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn0iLCIvLyBjb2xvcnNcclxuJG1haW4td2hpdGU6ICNmZmY7XHJcbiRtYWluLWRhcms6ICMwMDA7XHJcbiRibHVlLWRhcms6ICMxRDY4QjM7XHJcbiRibHVlLWxpZ2h0OiAjOENDNkZGO1xyXG4kbWFpbi15ZWxsb3c6ICNGRkNDNzU7XHJcblxyXG4vL3NvY2lhbFxyXG4kZmFjZWJvb2s6ICMzYjU5OTg7XHJcblxyXG5cclxuLy8gbWVhc3VyZW1lbnRcclxuJG5hdi1oZWFkZXI6IDY0cHg7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-banner',
          templateUrl: './home-banner.component.html',
          styleUrls: ['./home-banner.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-digging-proccess/home-digging-proccess.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/home/home-digging-proccess/home-digging-proccess.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: HomeDiggingProccessComponent */

  /***/
  function srcAppHomeHomeDiggingProccessHomeDiggingProccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeDiggingProccessComponent", function () {
      return HomeDiggingProccessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeDiggingProccessComponent =
    /*#__PURE__*/
    function () {
      function HomeDiggingProccessComponent() {
        _classCallCheck(this, HomeDiggingProccessComponent);
      }

      _createClass(HomeDiggingProccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeDiggingProccessComponent;
    }();

    HomeDiggingProccessComponent.ɵfac = function HomeDiggingProccessComponent_Factory(t) {
      return new (t || HomeDiggingProccessComponent)();
    };

    HomeDiggingProccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeDiggingProccessComponent,
      selectors: [["app-home-digging-proccess"]],
      decls: 20,
      vars: 0,
      consts: [[1, "how-wrapper"], [1, "steps-wrapper"], [1, "steps"], ["src", "assets/images/steps/phone.svg", "alt", "telefon"], ["src", "assets/images/steps/search.svg", "alt", "wyszukaj"], ["src", "assets/images/steps/dig.svg", "alt", "proces kopania"], ["src", "assets/images/steps/smile.svg", "alt", "u\u015Bmiech"]],
      template: function HomeDiggingProccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PROFESJONALNA STUDNIA G\u0141\u0118BINOWA W 4 PROSTUCH KROKACH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Dzwonisz do nas i umawiasz si\u0119 na spotkanie ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Przyje\u017Cd\u017Camy do Ciebie na dzia\u0142k\u0119 i szukamy podziemnych \u017Cy\u0142 wody ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Kopiemy studnie do momentu przebicia \u017Cy\u0142y wodnej ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Zak\u0142adamy pomp\u0119, oczyszczamy studnie i cieszymy si\u0119 z wody ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  background-color: #FFCC75;\n}\n\n.how-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 5vh;\n  padding-bottom: 5vh;\n}\n\n.how-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1D68B3;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  text-align: center;\n}\n\n.how-wrapper[_ngcontent-%COMP%]   .steps-wrapper[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/steps/steps.svg\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: center;\n}\n\n.how-wrapper[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.how-wrapper[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #1D68B3;\n  padding: 1rem;\n  max-width: 40%;\n}\n\n.how-wrapper[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 491px;\n}\n\n@media screen and (max-width: 1600px) {\n  .how-wrapper[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n\n@media screen and (max-width: 500px) {\n  .how-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .how-wrapper[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 120px;\n  }\n  .how-wrapper[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWRpZ2dpbmctcHJvY2Nlc3MvRzpcXFByb2pla3R5XFxzZ2JiXFxzZ2JiL3NyY1xcYXBwXFxob21lXFxob21lLWRpZ2dpbmctcHJvY2Nlc3NcXGhvbWUtZGlnZ2luZy1wcm9jY2Vzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLWRpZ2dpbmctcHJvY2Nlc3MvRzpcXFByb2pla3R5XFxzZ2JiXFxzZ2JiL3NyY1xcdmFyaWFibGVzcy5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUtZGlnZ2luZy1wcm9jY2Vzcy9ob21lLWRpZ2dpbmctcHJvY2Nlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkNDWTtBQ0ZkOztBRkdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUVBRjs7QUZDRTtFQUNFLGNDVlE7RURXUixpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUVDSjs7QUZDRTtFQUNFLHVEQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FFQ0o7O0FGQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRUNKOztBRkFJO0VBQ0UsaUJBQUE7RUFDQSxjQzVCTTtFRDZCTixhQUFBO0VBQ0EsY0FBQTtBRUVOOztBRkFJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FFRU47O0FGRUE7RUFHTTtJQUNFLGdCQUFBO0VFRE47QUFDRjs7QUZRQTtFQUVJO0lBQ0UsaUJBQUE7RUVQSjtFRlVJO0lBQ0UsZ0JBQUE7RUVSTjtFRlVJO0lBQ0UsY0FBQTtFRVJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUtZGlnZ2luZy1wcm9jY2Vzcy9ob21lLWRpZ2dpbmctcHJvY2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzcy5zY3NzJztcclxuXHJcbjpob3N0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4teWVsbG93O1xyXG59XHJcbi5ob3ctd3JhcHBlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctdG9wOiA1dmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDV2aDtcclxuICBoMiB7XHJcbiAgICBjb2xvcjogJGJsdWUtZGFyaztcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zdGVwcy13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9zdGVwcy9zdGVwcy5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG4gIH1cclxuICAuc3RlcHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgY29sb3I6ICRibHVlLWRhcms7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIG1heC13aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgbWF4LXdpZHRoOiA0OTFweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgLmhvdy13cmFwcGVye1xyXG4gICAgLnN0ZXBze1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5ob3ctd3JhcHBlcntcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICAuc3RlcHN7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIGNvbG9yc1xyXG4kbWFpbi13aGl0ZTogI2ZmZjtcclxuJG1haW4tZGFyazogIzAwMDtcclxuJGJsdWUtZGFyazogIzFENjhCMztcclxuJGJsdWUtbGlnaHQ6ICM4Q0M2RkY7XHJcbiRtYWluLXllbGxvdzogI0ZGQ0M3NTtcclxuXHJcbi8vc29jaWFsXHJcbiRmYWNlYm9vazogIzNiNTk5ODtcclxuXHJcblxyXG4vLyBtZWFzdXJlbWVudFxyXG4kbmF2LWhlYWRlcjogNjRweDtcclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQzc1O1xufVxuXG4uaG93LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XG59XG4uaG93LXdyYXBwZXIgaDIge1xuICBjb2xvcjogIzFENjhCMztcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG93LXdyYXBwZXIgLnN0ZXBzLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9zdGVwcy9zdGVwcy5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG59XG4uaG93LXdyYXBwZXIgLnN0ZXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvdy13cmFwcGVyIC5zdGVwcyBwIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMUQ2OEIzO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi5ob3ctd3JhcHBlciAuc3RlcHMgaW1nIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiA0OTFweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5ob3ctd3JhcHBlciAuc3RlcHMgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaG93LXdyYXBwZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5ob3ctd3JhcHBlciAuc3RlcHMgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICB9XG4gIC5ob3ctd3JhcHBlciAuc3RlcHMgcCB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeDiggingProccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-digging-proccess',
          templateUrl: './home-digging-proccess.component.html',
          styleUrls: ['./home-digging-proccess.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-equipment/home-equipment.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/home/home-equipment/home-equipment.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HomeEquipmentComponent */

  /***/
  function srcAppHomeHomeEquipmentHomeEquipmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeEquipmentComponent", function () {
      return HomeEquipmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1, a2, a3) {
      return {
        "first-image": a0,
        "second-image": a1,
        "third-image": a2,
        "fourth-image": a3
      };
    };

    var HomeEquipmentComponent =
    /*#__PURE__*/
    function () {
      function HomeEquipmentComponent() {
        _classCallCheck(this, HomeEquipmentComponent);

        this.imageClasses = ['first-image', 'second-image', 'third-image', 'fourth-image'];
        this.currentIndex = 0;
        this.currentImage = this.imageClasses[this.currentIndex];
      }

      _createClass(HomeEquipmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleChangeImage",
        value: function handleChangeImage(index) {
          this.currentIndex += index;

          if (this.currentIndex < 0) {
            this.currentIndex = this.imageClasses.length - 1;
          }

          if (this.currentIndex >= this.imageClasses.length) {
            this.currentIndex = 0;
          }

          this.currentImage = this.imageClasses[this.currentIndex];
        }
      }]);

      return HomeEquipmentComponent;
    }();

    HomeEquipmentComponent.ɵfac = function HomeEquipmentComponent_Factory(t) {
      return new (t || HomeEquipmentComponent)();
    };

    HomeEquipmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeEquipmentComponent,
      selectors: [["app-home-equipment"]],
      decls: 44,
      vars: 12,
      consts: [[1, "gallery-container"], [1, "gallery-wrapper"], [1, "button", "button-left"], [1, "material-icons", 3, "click"], [1, "gallery-images"], [1, "gallery-view-container", 3, "ngClass"], [1, "gallery-image-container"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/mh34rMEmXm4", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["src", "assets/images/equipments/wiertnica.jpg", "alt", "wiertnica"], ["src", "assets/images/equipments/laweta.jpg", "alt", "laweta"], ["src", "assets/images/equipments/realizacja.jpg", "alt", "realizacja"], [1, "button", "button-right", 3, "click"], [1, "material-icons"], [1, "line"], [1, "title-wrapper"], [1, "title-view-container", 3, "ngClass"], [1, "description-first"], [1, "description-second"], [1, "description-third"], [1, "description-fourth"]],
      template: function HomeEquipmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Studnia g\u0142\u0119binowa - sprz\u0119t i realizacje");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeEquipmentComponent_Template_i_click_6_listener($event) {
            return ctx.handleChangeImage(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " arrow_back_ios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "iframe", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeEquipmentComponent_Template_div_click_18_listener($event) {
            return ctx.handleChangeImage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " arrow_forward_ios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Studnia g\u0142\u0119binowa - woda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Ilo\u015B\u0107 wody ze studni g\u0142\u0119binowej jest proporcjonalna do jako\u015Bci przewierconych \u017Cy\u0142 wodnych. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Wiertnica Prakla RB 8R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Nowoczesne urz\u0105dzenie wiertnicze wyposa\u017Cone w podw\xF3jn\u0105 g\u0142owic\u0119, oraz g\u0105sienice gumowe co pozwala wykona\u0107 nam prace prawie w ka\u017Cdym terenie ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Laweta - u\u017Cywana do przewo\u017Cenia maszyn wiertniczych");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Laweta u\u017Cywana do przewo\u017Cenia wiertnicy, z jej pomoc\u0105 wykonujemy odwierty pod studnie g\u0142\u0119binowe, pompy ciep\u0142a oraz mikropale ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Realizacja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Wiertnica w trakcie pracy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c0, ctx.currentImage == "first-image", ctx.currentImage == "second-image", ctx.currentImage == "third-image", ctx.currentImage == "fourth-image"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c0, ctx.currentImage == "first-image", ctx.currentImage == "second-image", ctx.currentImage == "third-image", ctx.currentImage == "fourth-image"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["html[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Baskervville\";\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Roboto Slab\";\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\n.u-spacer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.u-display-none[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[_nghost-%COMP%] {\n  max-width: 1600px;\n  margin: auto;\n  text-align: center;\n  padding-top: 5vh;\n  padding-bottom: 5vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 5vh;\n  text-transform: uppercase;\n  color: #1D68B3;\n}\n\n.gallery-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.gallery-wrapper[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 1;\n  cursor: pointer;\n}\n\n.gallery-wrapper[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n\n.gallery-wrapper[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 80px;\n  line-height: 100px;\n  vertical-align: middle;\n  text-align: center;\n  color: #FFCC75;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.gallery-wrapper[_ngcontent-%COMP%]   .button-left[_ngcontent-%COMP%] {\n  left: 2rem;\n}\n\n.gallery-wrapper[_ngcontent-%COMP%]   .button-right[_ngcontent-%COMP%] {\n  right: 2rem;\n}\n\n.gallery-images[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  height: 640px;\n}\n\n.gallery-images[_ngcontent-%COMP%]   .gallery-view-container[_ngcontent-%COMP%] {\n  width: 400%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n\n.gallery-images[_ngcontent-%COMP%]   .gallery-view-container[_ngcontent-%COMP%]   .gallery-image-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.gallery-images[_ngcontent-%COMP%]   .gallery-view-container[_ngcontent-%COMP%]   .gallery-image-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 640px;\n}\n\n.gallery-images[_ngcontent-%COMP%]   .gallery-view-container[_ngcontent-%COMP%]   .gallery-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 640px;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background-color: #FFCC75;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.title-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n}\n\n.title-wrapper[_ngcontent-%COMP%]   .title-view-container[_ngcontent-%COMP%] {\n  width: 400%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n\n.title-wrapper[_ngcontent-%COMP%]   .title-view-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.title-wrapper[_ngcontent-%COMP%]   .title-view-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #1D68B3;\n  margin-bottom: 1rem;\n}\n\n.title-wrapper[_ngcontent-%COMP%]   .title-view-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 1.5rem;\n}\n\n.first-image[_ngcontent-%COMP%] {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.second-image[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(-25%);\n          transform: translateX(-25%);\n}\n\n.third-image[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.fourth-image[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(-75%);\n          transform: translateX(-75%);\n}\n\n@media screen and (max-width: 1600px) {\n  [_nghost-%COMP%] {\n    max-width: 850px;\n    padding-top: 8vh;\n    margin-bottom: 8vh;\n  }\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n    margin-bottom: 2vh;\n  }\n\n  .gallery-images[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: auto;\n    height: 400px;\n    width: auto;\n  }\n  .gallery-images[_ngcontent-%COMP%]   .gallery-view-container[_ngcontent-%COMP%]   .gallery-image-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .gallery-images[_ngcontent-%COMP%]   .gallery-view-container[_ngcontent-%COMP%]   .gallery-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n\n  .title-wrapper[_ngcontent-%COMP%]   .title-view-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .title-wrapper[_ngcontent-%COMP%]   .title-view-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n@media screen and (max-width: 950px) {\n  [_nghost-%COMP%] {\n    max-width: 850px;\n    padding: 1rem;\n  }\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n    margin-bottom: 2vh;\n  }\n\n  .gallery-images[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: auto;\n    height: 300px;\n    width: auto;\n  }\n  .gallery-images[_ngcontent-%COMP%]   .gallery-view-container[_ngcontent-%COMP%]   .gallery-image-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n  .gallery-images[_ngcontent-%COMP%]   .gallery-view-container[_ngcontent-%COMP%]   .gallery-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 300px;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n\n  .title-wrapper[_ngcontent-%COMP%]   .title-view-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .title-wrapper[_ngcontent-%COMP%]   .title-view-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWVxdWlwbWVudC9HOlxcUHJvamVrdHlcXHNnYmJcXHNnYmIvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLWVxdWlwbWVudC9ob21lLWVxdWlwbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLWVxdWlwbWVudC9HOlxcUHJvamVrdHlcXHNnYmJcXHNnYmIvc3JjXFx2YXJpYWJsZXNzLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS1lcXVpcG1lbnQvRzpcXFByb2pla3R5XFxzZ2JiXFxzZ2JiL3NyY1xcYXBwXFxob21lXFxob21lLWVxdWlwbWVudFxcaG9tZS1lcXVpcG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLFdFWlU7QURXWjs7QURJQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtBQ0RGOztBREdBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FETUE7RUFDRSxtQkFBQTtVQUFBLFlBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7QUNIRjs7QUVqRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUZvRUY7O0FFbkVFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNEVlE7QUQrRVo7O0FFakVBO0VBQ0Usa0JBQUE7QUZvRUY7O0FFbkVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUZxRUo7O0FFcEVJO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUZzRU47O0FFcEVJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNEL0JRO0VDZ0NSLHlDQUFBO0VBQUEsaUNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBRnNFTjs7QUVuRUU7RUFDRSxVQUFBO0FGcUVKOztBRW5FRTtFQUNFLFdBQUE7QUZxRUo7O0FFbEVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBRnFFRjs7QUVwRUU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBRnNFSjs7QUVyRUk7RUFDRSxXQUFBO0FGdUVOOztBRXRFTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRndFUjs7QUV0RU07RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUZ3RVI7O0FFbkVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkR0RVk7RUN1RVosZ0JBQUE7RUFDQSxtQkFBQTtBRnNFRjs7QUVwRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUZ1RUY7O0FFdEVFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUZ3RUo7O0FFdkVJO0VBQ0UsV0FBQTtBRnlFTjs7QUV4RU07RUFDRSxnQkFBQTtFQUNBLGNEeEZJO0VDeUZKLG1CQUFBO0FGMEVSOztBRXhFTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUYwRVI7O0FFckVBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBRndFRjs7QUV0RUE7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FGeUVGOztBRXZFQTtFQUNFLG1DQUFBO1VBQUEsMkJBQUE7QUYwRUY7O0FFeEVBO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtBRjJFRjs7QUV2RUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFRjBFRjtFRXpFRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUYyRUo7O0VFeEVBO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUYyRUY7RUV4RU07SUFDRSxhQUFBO0VGMEVSO0VFeEVNO0lBQ0UsYUFBQTtFRjBFUjs7RUVsRU07SUFDRSxpQkFBQTtFRnFFUjtFRW5FTTtJQUNFLGVBQUE7RUZxRVI7QUFDRjs7QUVoRUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtFRmtFRjtFRWpFRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUZtRUo7O0VFaEVBO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUZtRUY7RUVoRU07SUFDRSxpQkFBQTtFRmtFUjtFRWhFTTtJQUNFLGlCQUFBO0lBQ0Esc0JBQUE7T0FBQSxtQkFBQTtFRmtFUjs7RUUxRE07SUFDRSxpQkFBQTtFRjZEUjtFRTNETTtJQUNFLGVBQUE7RUY2RFI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1lcXVpcG1lbnQvaG9tZS1lcXVpcG1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcmlhYmxlc3Muc2Nzcyc7XHJcbi8vUmVzZXQgbGF5b3V0ICsgdXRpbGl0aWVzXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAkbWFpbi1kYXJrO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdCYXNrZXJ2dmlsbGUnO1xyXG59XHJcbnNwYW57XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYic7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYic7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDYge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5cclxuLy8gdXRpbGl0aWVzXHJcblxyXG4udS1zcGFjZXJ7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4udS1kaXNwbGF5LW5vbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCJodG1sIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFza2VydnZpbGxlXCI7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCI7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi51LXNwYWNlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnUtZGlzcGxheS1ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOmhvc3Qge1xuICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMxRDY4QjM7XG59XG5cbi5nYWxsZXJ5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ2FsbGVyeS13cmFwcGVyIC5idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdhbGxlcnktd3JhcHBlciAuYnV0dG9uOmhvdmVyIGkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5nYWxsZXJ5LXdyYXBwZXIgLmJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkNDNzU7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uZ2FsbGVyeS13cmFwcGVyIC5idXR0b24tbGVmdCB7XG4gIGxlZnQ6IDJyZW07XG59XG4uZ2FsbGVyeS13cmFwcGVyIC5idXR0b24tcmlnaHQge1xuICByaWdodDogMnJlbTtcbn1cblxuLmdhbGxlcnktaW1hZ2VzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNjQwcHg7XG59XG4uZ2FsbGVyeS1pbWFnZXMgLmdhbGxlcnktdmlldy1jb250YWluZXIge1xuICB3aWR0aDogNDAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmdhbGxlcnktaW1hZ2VzIC5nYWxsZXJ5LXZpZXctY29udGFpbmVyIC5nYWxsZXJ5LWltYWdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmdhbGxlcnktaW1hZ2VzIC5nYWxsZXJ5LXZpZXctY29udGFpbmVyIC5nYWxsZXJ5LWltYWdlLWNvbnRhaW5lciBpZnJhbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjQwcHg7XG59XG4uZ2FsbGVyeS1pbWFnZXMgLmdhbGxlcnktdmlldy1jb250YWluZXIgLmdhbGxlcnktaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NDBweDtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQzc1O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4udGl0bGUtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRpdGxlLXdyYXBwZXIgLnRpdGxlLXZpZXctY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi50aXRsZS13cmFwcGVyIC50aXRsZS12aWV3LWNvbnRhaW5lciBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi50aXRsZS13cmFwcGVyIC50aXRsZS12aWV3LWNvbnRhaW5lciBkaXYgaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzFENjhCMztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi50aXRsZS13cmFwcGVyIC50aXRsZS12aWV3LWNvbnRhaW5lciBkaXYgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZmlyc3QtaW1hZ2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5zZWNvbmQtaW1hZ2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSk7XG59XG5cbi50aGlyZC1pbWFnZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmZvdXJ0aC1pbWFnZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNzUlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDg1MHB4O1xuICAgIHBhZGRpbmctdG9wOiA4dmg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHZoO1xuICB9XG4gIDpob3N0IGgyIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIH1cblxuICAuZ2FsbGVyeS1pbWFnZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuZ2FsbGVyeS1pbWFnZXMgLmdhbGxlcnktdmlldy1jb250YWluZXIgLmdhbGxlcnktaW1hZ2UtY29udGFpbmVyIGlmcmFtZSB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuICAuZ2FsbGVyeS1pbWFnZXMgLmdhbGxlcnktdmlldy1jb250YWluZXIgLmdhbGxlcnktaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuXG4gIC50aXRsZS13cmFwcGVyIC50aXRsZS12aWV3LWNvbnRhaW5lciBkaXYgaDQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC50aXRsZS13cmFwcGVyIC50aXRsZS12aWV3LWNvbnRhaW5lciBkaXYgcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xuICA6aG9zdCB7XG4gICAgbWF4LXdpZHRoOiA4NTBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIDpob3N0IGgyIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIH1cblxuICAuZ2FsbGVyeS1pbWFnZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuZ2FsbGVyeS1pbWFnZXMgLmdhbGxlcnktdmlldy1jb250YWluZXIgLmdhbGxlcnktaW1hZ2UtY29udGFpbmVyIGlmcmFtZSB7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gIH1cbiAgLmdhbGxlcnktaW1hZ2VzIC5nYWxsZXJ5LXZpZXctY29udGFpbmVyIC5nYWxsZXJ5LWltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cblxuICAudGl0bGUtd3JhcHBlciAudGl0bGUtdmlldy1jb250YWluZXIgZGl2IGg0IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICAudGl0bGUtd3JhcHBlciAudGl0bGUtdmlldy1jb250YWluZXIgZGl2IHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufSIsIi8vIGNvbG9yc1xyXG4kbWFpbi13aGl0ZTogI2ZmZjtcclxuJG1haW4tZGFyazogIzAwMDtcclxuJGJsdWUtZGFyazogIzFENjhCMztcclxuJGJsdWUtbGlnaHQ6ICM4Q0M2RkY7XHJcbiRtYWluLXllbGxvdzogI0ZGQ0M3NTtcclxuXHJcbi8vc29jaWFsXHJcbiRmYWNlYm9vazogIzNiNTk5ODtcclxuXHJcblxyXG4vLyBtZWFzdXJlbWVudFxyXG4kbmF2LWhlYWRlcjogNjRweDtcclxuIiwiQGltcG9ydCAnc3JjL3ZhcmlhYmxlc3Muc2Nzcyc7XHJcbkBpbXBvcnQgJ3NyYy9zdHlsZXMuc2Nzcyc7XHJcbjpob3N0e1xyXG4gIG1heC13aWR0aDogMTYwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDV2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoMntcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogJGJsdWUtZGFyaztcclxuICB9XHJcbn1cclxuXHJcbi5nYWxsZXJ5LXdyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5idXR0b257XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciBpe1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIGl7XHJcbiAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAkbWFpbi15ZWxsb3c7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idXR0b24tbGVmdHtcclxuICAgIGxlZnQ6IDJyZW07XHJcbiAgfVxyXG4gIC5idXR0b24tcmlnaHR7XHJcbiAgICByaWdodDogMnJlbTtcclxuICB9XHJcbn1cclxuLmdhbGxlcnktaW1hZ2Vze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiA2NDBweDtcclxuICAuZ2FsbGVyeS12aWV3LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA0MDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAuZ2FsbGVyeS1pbWFnZS1jb250YWluZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBpZnJhbWV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2NDBweDtcclxuICAgICAgfVxyXG4gICAgICBpbWd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2NDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubGluZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4teWVsbG93O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4udGl0bGUtd3JhcHBlcntcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC50aXRsZS12aWV3LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA0MDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBkaXZ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoNHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiAkYmx1ZS1kYXJrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgcHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5maXJzdC1pbWFnZXtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuLnNlY29uZC1pbWFnZXtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSlcclxufVxyXG4udGhpcmQtaW1hZ2V7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpXHJcbn1cclxuLmZvdXJ0aC1pbWFnZXtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTc1JSlcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gIDpob3N0IHtcclxuICAgIG1heC13aWR0aDogODUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHZoO1xyXG4gICAgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5nYWxsZXJ5LWltYWdlc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgLmdhbGxlcnktdmlldy1jb250YWluZXJ7XHJcbiAgICAgIC5nYWxsZXJ5LWltYWdlLWNvbnRhaW5lcntcclxuICAgICAgICBpZnJhbWV7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGl0bGUtd3JhcHBlcntcclxuICAgIC50aXRsZS12aWV3LWNvbnRhaW5lcntcclxuICAgICAgZGl2IHtcclxuICAgICAgICBoNHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGgye1xyXG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZ2FsbGVyeS1pbWFnZXN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIC5nYWxsZXJ5LXZpZXctY29udGFpbmVye1xyXG4gICAgICAuZ2FsbGVyeS1pbWFnZS1jb250YWluZXJ7XHJcbiAgICAgICAgaWZyYW1le1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRpdGxlLXdyYXBwZXJ7XHJcbiAgICAudGl0bGUtdmlldy1jb250YWluZXJ7XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeEquipmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-equipment',
          templateUrl: './home-equipment.component.html',
          styleUrls: ['./home-equipment.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-layout/home-layout.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/home/home-layout/home-layout.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomeLayoutComponent */

  /***/
  function srcAppHomeHomeLayoutHomeLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function () {
      return HomeLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../home-banner/home-banner.component */
    "./src/app/home/home-banner/home-banner.component.ts");
    /* harmony import */


    var _home_statistic_home_statistic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../home-statistic/home-statistic.component */
    "./src/app/home/home-statistic/home-statistic.component.ts");
    /* harmony import */


    var _home_digging_proccess_home_digging_proccess_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../home-digging-proccess/home-digging-proccess.component */
    "./src/app/home/home-digging-proccess/home-digging-proccess.component.ts");
    /* harmony import */


    var _home_offer_home_offer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../home-offer/home-offer.component */
    "./src/app/home/home-offer/home-offer.component.ts");
    /* harmony import */


    var _home_equipment_home_equipment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../home-equipment/home-equipment.component */
    "./src/app/home/home-equipment/home-equipment.component.ts");

    var HomeLayoutComponent =
    /*#__PURE__*/
    function () {
      function HomeLayoutComponent() {
        _classCallCheck(this, HomeLayoutComponent);
      }

      _createClass(HomeLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeLayoutComponent;
    }();

    HomeLayoutComponent.ɵfac = function HomeLayoutComponent_Factory(t) {
      return new (t || HomeLayoutComponent)();
    };

    HomeLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeLayoutComponent,
      selectors: [["app-home-layout"]],
      decls: 5,
      vars: 0,
      consts: [["id", "baner"], ["id", "about"], ["id", "dig-process"], ["id", "offer"], ["id", "equipment"]],
      template: function HomeLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-banner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-statistic", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home-digging-proccess", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home-offer", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-home-equipment", 4);
        }
      },
      directives: [_home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_1__["HomeBannerComponent"], _home_statistic_home_statistic_component__WEBPACK_IMPORTED_MODULE_2__["HomeStatisticComponent"], _home_digging_proccess_home_digging_proccess_component__WEBPACK_IMPORTED_MODULE_3__["HomeDiggingProccessComponent"], _home_offer_home_offer_component__WEBPACK_IMPORTED_MODULE_4__["HomeOfferComponent"], _home_equipment_home_equipment_component__WEBPACK_IMPORTED_MODULE_5__["HomeEquipmentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-layout',
          templateUrl: './home-layout.component.html',
          styleUrls: ['./home-layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-offer/home-offer.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/home/home-offer/home-offer.component.ts ***!
    \*********************************************************/

  /*! exports provided: HomeOfferComponent */

  /***/
  function srcAppHomeHomeOfferHomeOfferComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeOfferComponent", function () {
      return HomeOfferComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeOfferComponent_div_83_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOfferComponent_div_83_Template_i_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.showCasingPipes = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " close ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Rury os\u0142onowe s\u0105 to rury wykonane ze stali konstrukcyjnej \u0142\u0105czone ze sob\u0105 po\u0142\u0105czeniem gwintowym. Rury te stanowi\u0105 wst\u0119pn\u0105 kolumn\u0119 studni. G\u0142\u0119boko\u015B\u0107 zapuszczenie kolumny rur os\u0142onowych zale\u017Cy od warunk\xF3w geologicznych i wynosi od kilku do kilkudziesi\u0119ciu metr\xF3w. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Po wykonaniu odwiertu rury os\u0142onowe s\u0105 usuwane!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeOfferComponent_div_84_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOfferComponent_div_84_Template_i_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.showFiltrPies = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " close ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Rury studzienne wraz z filtrami studziennymi tworz\u0105 kolumn\u0119 rur eksploatacyjnych, w kt\xF3rych zostaje umieszczona pompa g\u0142\u0119binowa. Rury te posiadaj\u0105 wszystkie niezb\u0119dne atesty wytrzyma\u0142o\u015Bciowe oraz dopuszczenia do wody pitnej. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeOfferComponent_div_85_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOfferComponent_div_85_Template_i_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.showGravel = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " close ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u017Bwir filtracyjny stanowi opsypk\u0119 kolumny rur studziennych, \u017Cwir ten posiada odpowiedni\u0105 gradacj\u0119 ziarna dzi\u0119ki temu stanowi wst\u0119pn\u0105 filtracj\u0119. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "cardExposed": a0
      };
    };

    var HomeOfferComponent =
    /*#__PURE__*/
    function () {
      function HomeOfferComponent() {
        _classCallCheck(this, HomeOfferComponent);

        this.showCasingPipes = false;
        this.showFiltrPies = false;
        this.showGravel = false;
        this.showWell = false;
        this.showHeatPump = false;
        this.showService = false;
      }

      _createClass(HomeOfferComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeOfferComponent;
    }();

    HomeOfferComponent.ɵfac = function HomeOfferComponent_Factory(t) {
      return new (t || HomeOfferComponent)();
    };

    HomeOfferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeOfferComponent,
      selectors: [["app-home-offer"]],
      decls: 86,
      vars: 12,
      consts: [[1, "offers-wrapper"], [3, "ngClass", "click"], ["src", "assets/images/offers/water.svg", "alt", "woda"], [1, "offers-include"], [1, "highlight", "click-like", 3, "click"], [1, "u-spacer"], ["src", "assets/images/offers/house.svg", "alt", "dom"], ["src", "assets/images/offers/service.svg", "alt", "serwis"], ["class", "light-box", 4, "ngIf"], [1, "light-box"], [1, "inner-wrapper"], [1, "close-button"], [1, "material-icons", 3, "click"], ["src", "assets/images/offers/rury_oslonowe.jpg", "alt", "rury os\u0142onowe"], [1, "highlight"], ["src", "assets/images/offers/filtr.jpg", "alt", "filtr studzienny"], ["src", "assets/images/offers/zwir.jpg", "alt", "\u017Cwir"]],
      template: function HomeOfferComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NASZA OFERTA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOfferComponent_Template_header_click_4_listener($event) {
            return ctx.showWell = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Studnia g\u0142\u0119binowa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Studnia g\u0142\u0119binowa - oferta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Szukanie wody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Koszt dojazdu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOfferComponent_Template_li_click_16_listener($event) {
            return ctx.showCasingPipes = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Monta\u017C i demonta\u017C rur os\u0142onowych ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOfferComponent_Template_li_click_18_listener($event) {
            return ctx.showFiltrPies = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Monta\u017C rur i filtr\xF3w studziennych ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOfferComponent_Template_li_click_20_listener($event) {
            return ctx.showGravel = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u017Bwirowanie ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Materia\u0142y uszczelniaj\u0105ce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pierwsze oczyszczanie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pierwsza dezynfkecja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Doradztwo przy wyborze pompy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Od 200 z\u0142/m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOfferComponent_Template_header_click_34_listener($event) {
            return ctx.showHeatPump = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Pompa ciep\u0142a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Pompa ciep\u0142a - oferta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Koszty dojazdu urz\u0105dze\u0144");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pionowe odwierty pod sondy zgodnie z projektem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Monta\u017C sond");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Wype\u0142nienie g\xF3rotworu od do\u0142u (opcjonalnie)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Pr\xF3ba szczelno\u015Bci sondy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Od 100 z\u0142/m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOfferComponent_Template_header_click_56_listener($event) {
            return ctx.showService = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Studnia - serwis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Serwis - oferta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Dzia\u0142amy w odleg\u0142o\u015Bci 150 km od Bielska Bia\u0142ej");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Ustalenie przyczyn braku wody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Wymiana pompy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Wymiana zbiornika przeponowego");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Wymaina oprzyrz\u0105dowania pompy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Czyszczenie - studnia g\u0142\u0119binowa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Dezynfekcja - studnia g\u0142\u0119binowa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Przy\u0142\u0105cza nowo powsta\u0142ych studni");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " 150 km/Bielsko Bia\u0142a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, HomeOfferComponent_div_83_Template, 10, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, HomeOfferComponent_div_84_Template, 8, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, HomeOfferComponent_div_85_Template, 8, 0, "div", 8);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.showWell));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.showHeatPump));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.showService));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCasingPipes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFiltrPies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showGravel);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["html[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Baskervville\";\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Roboto Slab\";\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n}\n\n.u-spacer[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.u-display-none[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[_nghost-%COMP%] {\n  max-width: 1600px;\n  margin: auto;\n  text-align: center;\n  padding-top: 10vh;\n  padding-bottom: 10vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1D68B3;\n  padding: 1.5rem;\n  padding-bottom: 5vh;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border: 10px solid #FFCC75;\n  padding: 2rem;\n  width: 500px;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .cardExposed[_ngcontent-%COMP%] {\n  bottom: auto;\n  background-color: transparent;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .cardExposed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-bottom: 2rem;\n  padding-top: 6rem;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #1D68B3;\n  font-size: 2.5rem;\n  vertical-align: bottom;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 4rem;\n  padding-bottom: 1rem;\n  opacity: 1;\n  height: 300px;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .offers-include[_ngcontent-%COMP%] {\n  font-family: \"Roboto Slab\";\n  font-weight: 400;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  font-weight: normal;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  text-align: left;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 2.5rem;\n  font-size: 1.2rem;\n}\n\n[_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  color: #1D68B3;\n  font-size: 2rem;\n  line-height: 3rem;\n  margin-top: 1rem;\n}\n\n.light-box[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  border: 2px solid #fff;\n  position: fixed;\n  top: 5rem;\n  bottom: 5rem;\n  left: 5rem;\n  right: 5rem;\n  padding: 2rem;\n}\n\n.light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -16px;\n  top: -16px;\n  width: 32px;\n  height: 32px;\n}\n\n.light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #FFCC75;\n  cursor: pointer;\n}\n\n.light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 400px;\n  padding: 1rem;\n}\n\n.light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #fff;\n  font-size: 1.2rem;\n  line-height: 2rem;\n  text-align: left;\n}\n\n.light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #FFCC75;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  color: #1D68B3;\n}\n\n.click-like[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 1600px) {\n  [_nghost-%COMP%] {\n    max-width: 1280px;\n  }\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    max-width: 350px;\n    border-width: 5px;\n    padding-bottom: 1rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .cardExposed[_ngcontent-%COMP%] {\n    bottom: auto;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .offers-include[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    line-height: 1.7rem;\n    font-size: 1rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  [_nghost-%COMP%]   .light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n\n@media screen and (max-width: 1100px) {\n  [_nghost-%COMP%] {\n    max-width: 1280px;\n  }\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    max-width: 320px;\n    min-height: 450px;\n    border-width: 5px;\n    margin-bottom: 1rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .cardExposed[_ngcontent-%COMP%] {\n    bottom: auto;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .offers-include[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    line-height: 1.7rem;\n    font-size: 1rem;\n  }\n  [_nghost-%COMP%]   .offers-wrapper[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  [_nghost-%COMP%]   .light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n    top: 0.5rem;\n    left: 0.5rem;\n    right: 0.5rem;\n    bottom: 0.5rem;\n    padding: 0.5rem;\n  }\n  [_nghost-%COMP%]   .light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 150px;\n  }\n  [_nghost-%COMP%]   .light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  [_nghost-%COMP%]   .light-box[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLW9mZmVyL0c6XFxQcm9qZWt0eVxcc2diYlxcc2diYi9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUtb2ZmZXIvaG9tZS1vZmZlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLW9mZmVyL0c6XFxQcm9qZWt0eVxcc2diYlxcc2diYi9zcmNcXHZhcmlhYmxlc3Muc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLW9mZmVyL0c6XFxQcm9qZWt0eVxcc2diYlxcc2diYi9zcmNcXGFwcFxcaG9tZVxcaG9tZS1vZmZlclxcaG9tZS1vZmZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0VBQ0EsV0VaVTtBRFdaOztBRElBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FDREY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURNQTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtBQ0hGOztBRE1BO0VBQ0UsYUFBQTtBQ0hGOztBRWhFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBRm1FRjs7QUVsRUU7RUFDRSxjRFRRO0VDVVIsZUFBQTtFQUNBLG1CQUFBO0FGb0VKOztBRWxFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUZvRUo7O0FFbkVJO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FGcUVOOztBRXBFTTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBRnNFUjs7QUVyRVE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBRnVFVjs7QUVwRU07RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JEMUNLO0FEZ0hiOztBRXJFUTtFQUNFLGNEMUNFO0VDMkNGLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FGdUVWOztBRXJFUTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBRnVFVjs7QUVwRU07RUFDRSxnQkFBQTtBRnNFUjs7QUVyRVE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FGdUVWOztBRXJFUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUZ1RVY7O0FFdEVVO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBRndFWjs7QUVuRU07RUFDRSxjRDFFSTtFQzJFSixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRnFFUjs7QUUvREE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtBRmtFRjs7QUVqRUU7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRm1FSjs7QUVsRUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUZvRU47O0FFbkVNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0QxR007RUMyR04sZUFBQTtBRnFFUjs7QUVwRVE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtBRnNFVjs7QUVsRUk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBRm9FTjs7QUVsRUk7RUFDRSxnQkFBQTtFQUNBLFdENUhPO0VDNkhQLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRm9FTjs7QUVuRU07RUFDRSxjRDdITTtBRGtNZDs7QUVoRUE7RUFDRSxjRHJJVTtBRHdNWjs7QUVqRUE7RUFDRSxlQUFBO0FGb0VGOztBRWhFQTtFQUNFO0lBQ0UsaUJBQUE7RUZtRUY7RUVsRUU7SUFDRSxpQkFBQTtFRm9FSjtFRWpFSTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFRm1FTjtFRWxFTTtJQUNFLGlCQUFBO0VGb0VSO0VFbkVRO0lBQ0UsaUJBQUE7RUZxRVY7RUVuRVE7SUFDRSxhQUFBO0VGcUVWO0VFbEVNO0lBQ0UsWUFBQTtFRm9FUjtFRWxFTTtJQUNFLGdCQUFBO0VGb0VSO0VFbkVRO0lBQ0UsaUJBQUE7RUZxRVY7RUVsRVU7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUZvRVo7RUVoRU07SUFDRSxpQkFBQTtFRmtFUjtFRTVETTtJQUNFLGFBQUE7RUY4RFI7QUFDRjs7QUV4REE7RUFDRTtJQUNFLGlCQUFBO0VGMERGO0VFekRFO0lBQ0UsaUJBQUE7RUYyREo7RUV6REU7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VGMkRKO0VFMURJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUY0RE47RUUzRE07SUFDRSxpQkFBQTtFRjZEUjtFRTVEUTtJQUNFLGlCQUFBO0VGOERWO0VFNURRO0lBQ0UsYUFBQTtFRjhEVjtFRTNETTtJQUNFLFlBQUE7RUY2RFI7RUUzRE07SUFDRSxnQkFBQTtFRjZEUjtFRTVEUTtJQUNFLGlCQUFBO0VGOERWO0VFM0RVO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VGNkRaO0VFekRNO0lBQ0UsaUJBQUE7RUYyRFI7RUV0REk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFRndETjtFRXZETTtJQUNDLGlCQUFBO0VGeURQO0VFdkRNO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VGeURSO0VFeERRO0lBQ0UsZUFBQTtFRjBEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLW9mZmVyL2hvbWUtb2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcmlhYmxlc3Muc2Nzcyc7XHJcbi8vUmVzZXQgbGF5b3V0ICsgdXRpbGl0aWVzXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAkbWFpbi1kYXJrO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdCYXNrZXJ2dmlsbGUnO1xyXG59XHJcbnNwYW57XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYic7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYic7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDYge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5cclxuLy8gdXRpbGl0aWVzXHJcblxyXG4udS1zcGFjZXJ7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4udS1kaXNwbGF5LW5vbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCJodG1sIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFza2VydnZpbGxlXCI7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCI7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi51LXNwYWNlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnUtZGlzcGxheS1ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOmhvc3Qge1xuICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHZoO1xuICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IGgyIHtcbiAgY29sb3I6ICMxRDY4QjM7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDV2aDtcbn1cbjpob3N0IC5vZmZlcnMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5vZmZlcnMtd3JhcHBlciBhcnRpY2xlIHtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICNGRkNDNzU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHdpZHRoOiA1MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgLmNhcmRFeHBvc2VkIHtcbiAgYm90dG9tOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5vZmZlcnMtd3JhcHBlciBhcnRpY2xlIC5jYXJkRXhwb3NlZCBpbWcge1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAwO1xufVxuOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZy10b3A6IDZyZW07XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbjpob3N0IC5vZmZlcnMtd3JhcHBlciBhcnRpY2xlIGhlYWRlciBoNCB7XG4gIGNvbG9yOiAjMUQ2OEIzO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgaGVhZGVyIGltZyB7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbjpob3N0IC5vZmZlcnMtd3JhcHBlciBhcnRpY2xlIHNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgc2VjdGlvbiAub2ZmZXJzLWluY2x1ZGUge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG46aG9zdCAub2ZmZXJzLXdyYXBwZXIgYXJ0aWNsZSBzZWN0aW9uIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgc2VjdGlvbiB1bCBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgZm9vdGVyIHtcbiAgY29sb3I6ICMxRDY4QjM7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5saWdodC1ib3gge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLmxpZ2h0LWJveCAuaW5uZXItd3JhcHBlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1cmVtO1xuICBib3R0b206IDVyZW07XG4gIGxlZnQ6IDVyZW07XG4gIHJpZ2h0OiA1cmVtO1xuICBwYWRkaW5nOiAycmVtO1xufVxuLmxpZ2h0LWJveCAuaW5uZXItd3JhcHBlciAuY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE2cHg7XG4gIHRvcDogLTE2cHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG4ubGlnaHQtYm94IC5pbm5lci13cmFwcGVyIC5jbG9zZS1idXR0b24gaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZDQzc1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlnaHQtYm94IC5pbm5lci13cmFwcGVyIC5jbG9zZS1idXR0b24gaTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubGlnaHQtYm94IC5pbm5lci13cmFwcGVyIGltZyB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ubGlnaHQtYm94IC5pbm5lci13cmFwcGVyIHAge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmxpZ2h0LWJveCAuaW5uZXItd3JhcHBlciBwIC5oaWdobGlnaHQge1xuICBjb2xvcjogI0ZGQ0M3NTtcbn1cblxuLmhpZ2hsaWdodCB7XG4gIGNvbG9yOiAjMUQ2OEIzO1xufVxuXG4uY2xpY2stbGlrZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcbiAgfVxuICA6aG9zdCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUge1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cbiAgOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgfVxuICA6aG9zdCAub2ZmZXJzLXdyYXBwZXIgYXJ0aWNsZSBoZWFkZXIgaDQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIDpob3N0IC5vZmZlcnMtd3JhcHBlciBhcnRpY2xlIGhlYWRlciBpbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbiAgOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgLmNhcmRFeHBvc2VkIHtcbiAgICBib3R0b206IGF1dG87XG4gIH1cbiAgOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuICA6aG9zdCAub2ZmZXJzLXdyYXBwZXIgYXJ0aWNsZSBzZWN0aW9uIC5vZmZlcnMtaW5jbHVkZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbiAgOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgc2VjdGlvbiB1bCBsaSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICA6aG9zdCAubGlnaHQtYm94IC5pbm5lci13cmFwcGVyIGltZyB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcbiAgfVxuICA6aG9zdCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gIH1cbiAgOmhvc3QgLm9mZmVycy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICA6aG9zdCAub2ZmZXJzLXdyYXBwZXIgYXJ0aWNsZSB7XG4gICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIDpob3N0IC5vZmZlcnMtd3JhcHBlciBhcnRpY2xlIGhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gIH1cbiAgOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgaGVhZGVyIGg0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICA6aG9zdCAub2ZmZXJzLXdyYXBwZXIgYXJ0aWNsZSBoZWFkZXIgaW1nIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG4gIDpob3N0IC5vZmZlcnMtd3JhcHBlciBhcnRpY2xlIC5jYXJkRXhwb3NlZCB7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG4gIDpob3N0IC5vZmZlcnMtd3JhcHBlciBhcnRpY2xlIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbiAgOmhvc3QgLm9mZmVycy13cmFwcGVyIGFydGljbGUgc2VjdGlvbiAub2ZmZXJzLWluY2x1ZGUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG4gIDpob3N0IC5vZmZlcnMtd3JhcHBlciBhcnRpY2xlIHNlY3Rpb24gdWwgbGkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIDpob3N0IC5vZmZlcnMtd3JhcHBlciBhcnRpY2xlIGZvb3RlciB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgOmhvc3QgLmxpZ2h0LWJveCAuaW5uZXItd3JhcHBlciB7XG4gICAgdG9wOiAwLjVyZW07XG4gICAgbGVmdDogMC41cmVtO1xuICAgIHJpZ2h0OiAwLjVyZW07XG4gICAgYm90dG9tOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG4gIDpob3N0IC5saWdodC1ib3ggLmlubmVyLXdyYXBwZXIgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgfVxuICA6aG9zdCAubGlnaHQtYm94IC5pbm5lci13cmFwcGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB9XG4gIDpob3N0IC5saWdodC1ib3ggLmlubmVyLXdyYXBwZXIgcCAuaGlnaGxpZ2h0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn0iLCIvLyBjb2xvcnNcclxuJG1haW4td2hpdGU6ICNmZmY7XHJcbiRtYWluLWRhcms6ICMwMDA7XHJcbiRibHVlLWRhcms6ICMxRDY4QjM7XHJcbiRibHVlLWxpZ2h0OiAjOENDNkZGO1xyXG4kbWFpbi15ZWxsb3c6ICNGRkNDNzU7XHJcblxyXG4vL3NvY2lhbFxyXG4kZmFjZWJvb2s6ICMzYjU5OTg7XHJcblxyXG5cclxuLy8gbWVhc3VyZW1lbnRcclxuJG5hdi1oZWFkZXI6IDY0cHg7XHJcbiIsIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXNzLnNjc3MnO1xyXG5AaW1wb3J0ICdzcmMvc3R5bGVzLnNjc3MnO1xyXG5cclxuOmhvc3R7XHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTB2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaDJ7XHJcbiAgICBjb2xvcjogJGJsdWUtZGFyaztcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1dmg7XHJcbiAgfVxyXG4gIC5vZmZlcnMtd3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAkbWFpbi15ZWxsb3c7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAuY2FyZEV4cG9zZWR7XHJcbiAgICAgICAgYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZyZW07XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLXdoaXRlO1xyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgY29sb3I6ICRibHVlLWRhcms7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNlY3Rpb257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAub2ZmZXJzLWluY2x1ZGV7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9vdGVye1xyXG4gICAgICAgIGNvbG9yOiAkYmx1ZS1kYXJrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGlnaHQtYm94e1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgLmlubmVyLXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJG1haW4td2hpdGU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDVyZW07XHJcbiAgICBib3R0b206NXJlbTtcclxuICAgIGxlZnQ6IDVyZW07XHJcbiAgICByaWdodDogNXJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAuY2xvc2UtYnV0dG9ue1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtMTZweDtcclxuICAgICAgdG9wOiAtMTZweDtcclxuICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAkbWFpbi15ZWxsb3c7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIGNvbG9yOiAkbWFpbi13aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAuaGlnaGxpZ2h0e1xyXG4gICAgICAgIGNvbG9yOiAkbWFpbi15ZWxsb3c7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmhpZ2hsaWdodHtcclxuICBjb2xvcjogJGJsdWUtZGFyaztcclxufVxyXG4uY2xpY2stbGlrZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcclxuICAgIGgye1xyXG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIH1cclxuICAgIC5vZmZlcnMtd3JhcHBlcntcclxuICAgICAgYXJ0aWNsZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBoZWFkZXJ7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRFeHBvc2Vke1xyXG4gICAgICAgICAgYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWN0aW9ue1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIC5vZmZlcnMtaW5jbHVkZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlnaHQtYm94e1xyXG4gICAgICAuaW5uZXItd3JhcHBlcntcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgICBoMntcclxuICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICB9XHJcbiAgICAub2ZmZXJzLXdyYXBwZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGFydGljbGUge1xyXG4gICAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBoZWFkZXJ7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRFeHBvc2Vke1xyXG4gICAgICAgICAgYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWN0aW9ue1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIC5vZmZlcnMtaW5jbHVkZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlnaHQtYm94e1xyXG4gICAgICAuaW5uZXItd3JhcHBlcntcclxuICAgICAgICB0b3A6IDAuNXJlbTtcclxuICAgICAgICBsZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICBib3R0b206IDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgLmhpZ2hsaWdodHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeOfferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-offer',
          templateUrl: './home-offer.component.html',
          styleUrls: ['./home-offer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-layout/home-layout.component */
    "./src/app/home/home-layout/home-layout.component.ts");

    var routes = [{
      path: '',
      component: _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-statistic/home-statistic.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/home/home-statistic/home-statistic.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HomeStatisticComponent */

  /***/
  function srcAppHomeHomeStatisticHomeStatisticComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeStatisticComponent", function () {
      return HomeStatisticComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeStatisticComponent =
    /*#__PURE__*/
    function () {
      function HomeStatisticComponent() {
        _classCallCheck(this, HomeStatisticComponent);

        this.diggedWell = 365;
        this.places = 146;
        this.provinces = 2;
      }

      _createClass(HomeStatisticComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeStatisticComponent;
    }();

    HomeStatisticComponent.ɵfac = function HomeStatisticComponent_Factory(t) {
      return new (t || HomeStatisticComponent)();
    };

    HomeStatisticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeStatisticComponent,
      selectors: [["app-home-statistic"]],
      decls: 24,
      vars: 2,
      consts: [[1, "main-wrapper"], [1, "article-wrapper"], [1, "article-block"], [1, "article-block-guarantee"], ["src", "assets/images/sections/shield.svg", "alt", "tarcza"], [1, "article-block-statistic"], ["src", "assets/images/sections/locality.svg", "alt", "lokalizacja"], [1, "article-sesction"], ["src", "assets/images/sections/map.svg", "alt", "mapa"]],
      template: function HomeStatisticComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Studnie g\u0142\u0119binowe bielsko bia\u0142a - gwarancja zadowolenia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Naszym najwa\u017Cniejszym celem jest dostarczenie Ci \u015Bwie\u017Cej g\xF3rskiej wody. W wykonanej przez nas studni g\u0142\u0119binowej minimalna ilo\u015B\u0107 wody na dob\u0119 wynosi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "1000 l.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "article", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "article", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.places, " Miejscowo\u015Bci ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.provinces, " Wojew\xF3dztwa (\u015Al\u0105skie i Ma\u0142opolskie) ");
        }
      },
      styles: [".main-wrapper[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  margin: auto;\n  padding-top: 10vh;\n  padding-bottom: 10vh;\n}\n.main-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 3rem 0;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 400;\n  color: #1D68B3;\n}\n.main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n.main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%] {\n  max-width: 50%;\n  padding: 1rem;\n}\n.main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-guarantee[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #1D68B3;\n  margin-bottom: 3rem;\n}\n.main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-guarantee[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  font-size: 1.5rem;\n}\n.main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-guarantee[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  max-width: 100%;\n}\n.main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-statistic[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  display: -webkit-box;\n  display: flex;\n  padding: 1rem;\n}\n.main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-statistic[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 270px;\n}\n.main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-statistic[_ngcontent-%COMP%]   .article-sesction[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #1D68B3;\n  font-size: 2rem;\n  font-weight: bold;\n  padding: 1rem;\n}\n@media screen and (max-width: 1600px) {\n  .main-wrapper[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 1rem;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-guarantee[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-guarantee[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.7rem;\n    font-size: 1.5rem;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-guarantee[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    max-width: 80%;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-statistic[_ngcontent-%COMP%] {\n    margin-top: 5vh;\n    padding: 1rem;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-statistic[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-width: 90px;\n    margin-right: 1rem;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-statistic[_ngcontent-%COMP%]   .article-sesction[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n    padding: 1rem;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 1rem;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-guarantee[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.5rem;\n    font-size: 1.2rem;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-statistic[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-statistic[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-statistic[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100px;\n  }\n  .main-wrapper[_ngcontent-%COMP%]   .article-wrapper[_ngcontent-%COMP%]   .article-block[_ngcontent-%COMP%]   .article-block-statistic[_ngcontent-%COMP%]   .article-sesction[_ngcontent-%COMP%] {\n    -webkit-box-pack: center;\n            justify-content: center;\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLXN0YXRpc3RpYy9HOlxcUHJvamVrdHlcXHNnYmJcXHNnYmIvc3JjXFxhcHBcXGhvbWVcXGhvbWUtc3RhdGlzdGljXFxob21lLXN0YXRpc3RpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLXN0YXRpc3RpYy9ob21lLXN0YXRpc3RpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLXN0YXRpc3RpYy9HOlxcUHJvamVrdHlcXHNnYmJcXHNnYmIvc3JjXFx2YXJpYWJsZXNzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDREY7QURFRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRVRRO0FEU1o7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0FKO0FEQ0k7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0NOO0FEQ1E7RUFDRSxjRWxCRTtFRm1CRixtQkFBQTtBQ0NWO0FEQ1E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDQ1Y7QURDUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NWO0FER007RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGFBQUE7QUNEUjtBREdVO0VBQ0UsZ0JBQUE7QUNEWjtBRElRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGNFM0NFO0VGNENGLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNGVjtBRFNBO0VBQ0U7SUFDRSxpQkFBQTtFQ05GO0VET0U7SUFDRSxpQkFBQTtFQ0xKO0VEUUk7SUFDRSxVQUFBO0lBQ0EsYUFBQTtFQ05OO0VEUVE7SUFDRSxtQkFBQTtFQ05WO0VEUVE7SUFDRSxtQkFBQTtJQUNBLGlCQUFBO0VDTlY7RURRUTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtFQ05WO0VEU007SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQ1BSO0VEU1U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUNQWjtFRFVRO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0VDUlY7QUFDRjtBRGVBO0VBR007SUFDRSxVQUFBO0lBQ0EsYUFBQTtFQ2ZOO0VEaUJRO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtFQ2ZWO0VEa0JNO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDaEJSO0VEaUJRO0lBQ0Usa0JBQUE7RUNmVjtFRGdCVTtJQUNFLGdCQUFBO0VDZFo7RURpQlE7SUFDRSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EsaUJBQUE7RUNmVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLXN0YXRpc3RpYy9ob21lLXN0YXRpc3RpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlc3Muc2Nzcyc7XHJcblxyXG4ubWFpbi13cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDEwdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwdmg7XHJcbiAgaDIge1xyXG4gICAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAkYmx1ZS1kYXJrO1xyXG4gIH1cclxuICAuYXJ0aWNsZS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuYXJ0aWNsZS1ibG9jayB7XHJcbiAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAuYXJ0aWNsZS1ibG9jay1ndWFyYW50ZWV7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICRibHVlLWRhcms7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWN0aW9uIHB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb290ZXIgaW1ne1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hcnRpY2xlLWJsb2NrLXN0YXRpc3RpY3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBoZWFkZXJ7XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjcwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcnRpY2xlLXNlc2N0aW9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6ICRibHVlLWRhcms7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAubWFpbi13cmFwcGVyIHtcclxuICAgIG1heC13aWR0aDogMTI4MHB4O1xyXG4gICAgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgfVxyXG4gICAgLmFydGljbGUtd3JhcHBlciB7XHJcbiAgICAgIC5hcnRpY2xlLWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgLmFydGljbGUtYmxvY2stZ3VhcmFudGVle1xyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VjdGlvbiBwe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvb3RlciBpbWd7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJ0aWNsZS1ibG9jay1zdGF0aXN0aWN7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgaGVhZGVye1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFydGljbGUtc2VzY3Rpb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5tYWluLXdyYXBwZXIge1xyXG4gICAgLmFydGljbGUtd3JhcHBlciB7XHJcbiAgICAgIC5hcnRpY2xlLWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgLmFydGljbGUtYmxvY2stZ3VhcmFudGVle1xyXG4gICAgICAgICAgc2VjdGlvbiBwe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFydGljbGUtYmxvY2stc3RhdGlzdGlje1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBoZWFkZXJ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hcnRpY2xlLXNlc2N0aW9uIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWFpbi13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDEwdmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xufVxuLm1haW4td3JhcHBlciBoMiB7XG4gIG1hcmdpbjogM3JlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMUQ2OEIzO1xufVxuLm1haW4td3JhcHBlciAuYXJ0aWNsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluLXdyYXBwZXIgLmFydGljbGUtd3JhcHBlciAuYXJ0aWNsZS1ibG9jayB7XG4gIG1heC13aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLm1haW4td3JhcHBlciAuYXJ0aWNsZS13cmFwcGVyIC5hcnRpY2xlLWJsb2NrIC5hcnRpY2xlLWJsb2NrLWd1YXJhbnRlZSBoMyB7XG4gIGNvbG9yOiAjMUQ2OEIzO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLm1haW4td3JhcHBlciAuYXJ0aWNsZS13cmFwcGVyIC5hcnRpY2xlLWJsb2NrIC5hcnRpY2xlLWJsb2NrLWd1YXJhbnRlZSBzZWN0aW9uIHAge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ubWFpbi13cmFwcGVyIC5hcnRpY2xlLXdyYXBwZXIgLmFydGljbGUtYmxvY2sgLmFydGljbGUtYmxvY2stZ3VhcmFudGVlIGZvb3RlciBpbWcge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ubWFpbi13cmFwcGVyIC5hcnRpY2xlLXdyYXBwZXIgLmFydGljbGUtYmxvY2sgLmFydGljbGUtYmxvY2stc3RhdGlzdGljIHtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5tYWluLXdyYXBwZXIgLmFydGljbGUtd3JhcHBlciAuYXJ0aWNsZS1ibG9jayAuYXJ0aWNsZS1ibG9jay1zdGF0aXN0aWMgaGVhZGVyIGltZyB7XG4gIG1pbi13aWR0aDogMjcwcHg7XG59XG4ubWFpbi13cmFwcGVyIC5hcnRpY2xlLXdyYXBwZXIgLmFydGljbGUtYmxvY2sgLmFydGljbGUtYmxvY2stc3RhdGlzdGljIC5hcnRpY2xlLXNlc2N0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMxRDY4QjM7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAubWFpbi13cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcbiAgfVxuICAubWFpbi13cmFwcGVyIGgyIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgfVxuICAubWFpbi13cmFwcGVyIC5hcnRpY2xlLXdyYXBwZXIgLmFydGljbGUtYmxvY2sge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAubWFpbi13cmFwcGVyIC5hcnRpY2xlLXdyYXBwZXIgLmFydGljbGUtYmxvY2sgLmFydGljbGUtYmxvY2stZ3VhcmFudGVlIGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG4gIC5tYWluLXdyYXBwZXIgLmFydGljbGUtd3JhcHBlciAuYXJ0aWNsZS1ibG9jayAuYXJ0aWNsZS1ibG9jay1ndWFyYW50ZWUgc2VjdGlvbiBwIHtcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5tYWluLXdyYXBwZXIgLmFydGljbGUtd3JhcHBlciAuYXJ0aWNsZS1ibG9jayAuYXJ0aWNsZS1ibG9jay1ndWFyYW50ZWUgZm9vdGVyIGltZyB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgfVxuICAubWFpbi13cmFwcGVyIC5hcnRpY2xlLXdyYXBwZXIgLmFydGljbGUtYmxvY2sgLmFydGljbGUtYmxvY2stc3RhdGlzdGljIHtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAubWFpbi13cmFwcGVyIC5hcnRpY2xlLXdyYXBwZXIgLmFydGljbGUtYmxvY2sgLmFydGljbGUtYmxvY2stc3RhdGlzdGljIGhlYWRlciBpbWcge1xuICAgIG1pbi13aWR0aDogOTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbiAgLm1haW4td3JhcHBlciAuYXJ0aWNsZS13cmFwcGVyIC5hcnRpY2xlLWJsb2NrIC5hcnRpY2xlLWJsb2NrLXN0YXRpc3RpYyAuYXJ0aWNsZS1zZXNjdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5tYWluLXdyYXBwZXIgLmFydGljbGUtd3JhcHBlciAuYXJ0aWNsZS1ibG9jayB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC5tYWluLXdyYXBwZXIgLmFydGljbGUtd3JhcHBlciAuYXJ0aWNsZS1ibG9jayAuYXJ0aWNsZS1ibG9jay1ndWFyYW50ZWUgc2VjdGlvbiBwIHtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIC5tYWluLXdyYXBwZXIgLmFydGljbGUtd3JhcHBlciAuYXJ0aWNsZS1ibG9jayAuYXJ0aWNsZS1ibG9jay1zdGF0aXN0aWMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubWFpbi13cmFwcGVyIC5hcnRpY2xlLXdyYXBwZXIgLmFydGljbGUtYmxvY2sgLmFydGljbGUtYmxvY2stc3RhdGlzdGljIGhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tYWluLXdyYXBwZXIgLmFydGljbGUtd3JhcHBlciAuYXJ0aWNsZS1ibG9jayAuYXJ0aWNsZS1ibG9jay1zdGF0aXN0aWMgaGVhZGVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgfVxuICAubWFpbi13cmFwcGVyIC5hcnRpY2xlLXdyYXBwZXIgLmFydGljbGUtYmxvY2sgLmFydGljbGUtYmxvY2stc3RhdGlzdGljIC5hcnRpY2xlLXNlc2N0aW9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufSIsIi8vIGNvbG9yc1xyXG4kbWFpbi13aGl0ZTogI2ZmZjtcclxuJG1haW4tZGFyazogIzAwMDtcclxuJGJsdWUtZGFyazogIzFENjhCMztcclxuJGJsdWUtbGlnaHQ6ICM4Q0M2RkY7XHJcbiRtYWluLXllbGxvdzogI0ZGQ0M3NTtcclxuXHJcbi8vc29jaWFsXHJcbiRmYWNlYm9vazogIzNiNTk5ODtcclxuXHJcblxyXG4vLyBtZWFzdXJlbWVudFxyXG4kbmF2LWhlYWRlcjogNjRweDtcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeStatisticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-statistic',
          templateUrl: './home-statistic.component.html',
          styleUrls: ['./home-statistic.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-layout/home-layout.component */
    "./src/app/home/home-layout/home-layout.component.ts");
    /* harmony import */


    var _home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home-banner/home-banner.component */
    "./src/app/home/home-banner/home-banner.component.ts");
    /* harmony import */


    var _home_statistic_home_statistic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-statistic/home-statistic.component */
    "./src/app/home/home-statistic/home-statistic.component.ts");
    /* harmony import */


    var _home_digging_proccess_home_digging_proccess_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-digging-proccess/home-digging-proccess.component */
    "./src/app/home/home-digging-proccess/home-digging-proccess.component.ts");
    /* harmony import */


    var _home_offer_home_offer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home-offer/home-offer.component */
    "./src/app/home/home-offer/home-offer.component.ts");
    /* harmony import */


    var _home_equipment_home_equipment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home-equipment/home-equipment.component */
    "./src/app/home/home-equipment/home-equipment.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"], _home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_4__["HomeBannerComponent"], _home_statistic_home_statistic_component__WEBPACK_IMPORTED_MODULE_5__["HomeStatisticComponent"], _home_digging_proccess_home_digging_proccess_component__WEBPACK_IMPORTED_MODULE_6__["HomeDiggingProccessComponent"], _home_offer_home_offer_component__WEBPACK_IMPORTED_MODULE_7__["HomeOfferComponent"], _home_equipment_home_equipment_component__WEBPACK_IMPORTED_MODULE_8__["HomeEquipmentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"], _home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_4__["HomeBannerComponent"], _home_statistic_home_statistic_component__WEBPACK_IMPORTED_MODULE_5__["HomeStatisticComponent"], _home_digging_proccess_home_digging_proccess_component__WEBPACK_IMPORTED_MODULE_6__["HomeDiggingProccessComponent"], _home_offer_home_offer_component__WEBPACK_IMPORTED_MODULE_7__["HomeOfferComponent"], _home_equipment_home_equipment_component__WEBPACK_IMPORTED_MODULE_8__["HomeEquipmentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map