(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-detail/image-detail.component */ "./src/app/image-detail/image-detail.component.ts");





var routes = [
    {
        path: "gallery",
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"]
    },
    {
        path: "image/:id", component: _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_4__["ImageDetailComponent"]
    },
    {
        path: "", redirectTo: "/gallery", pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <app-navbar></app-navbar>\n</div>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["setTheme"])('bs4'); // or 'bs4'
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-detail/image-detail.component */ "./src/app/image-detail/image-detail.component.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/filter.pipe */ "./src/app/shared/filter.pipe.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"],
                _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_10__["ImageDetailComponent"],
                _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ],
            providers: [_shared_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"], _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{ padding: 0; width:1200px; margin: 20px auto}\nli{display: inline;}\n.tn{\n  margin: 6px;\n  border:  4px solid #eee;\n  box-shadow: #555 1px 1px 8px 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxXQUFXLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBQ2hELEdBQUcsZ0JBQWdCLENBQUM7QUFFcEI7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlDQUFpQztDQUNsQyIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWx7IHBhZGRpbmc6IDA7IHdpZHRoOjEyMDBweDsgbWFyZ2luOiAyMHB4IGF1dG99XG5saXtkaXNwbGF5OiBpbmxpbmU7fVxuXG4udG57XG4gIG1hcmdpbjogNnB4O1xuICBib3JkZXI6ICA0cHggc29saWQgI2VlZTtcbiAgYm94LXNoYWRvdzogIzU1NSAxcHggMXB4IDhweCAxcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"container\">\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='all'\" (click)=\"filterBy='all'\">All</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='American Painting and Sculptor'\" (click)=\"filterBy='American Painting and Sculpture'\">American Painting and Sculpture</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='Chinese Art'\" (click)=\"filterBy='Chinese Art'\">Chinese Art</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='Contemporary Art'\" (click)=\"filterBy='Contemporary Art'\">Contemporary Art</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='Decorative Art'\" (click)=\"filterBy='Decorative Art and Design'\">Decorative Art and Design</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='Drawings'\" (click)=\"filterBy='Drawings'\">Drawings</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='European Painting and Sculptor'\" (click)=\"filterBy='European Painting and Sculpture'\">European Painting and Sculpture</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='Indian and South East Asian Art'\" (click)=\"filterBy='Indian and South East Asian Art'\">Indian and South East Asian Art</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='Japanese Art'\" (click)=\"filterBy='Japanese Art'\">Japanese Art</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='Medieval Art'\" (click)=\"filterBy='Medieval Art'\">Medieval Art</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='Photography'\" (click)=\"filterBy='Photography'\">Photography</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='Prints'\" (click)=\"filterBy='Prints'\">Prints</button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='Textiles'\" (click)=\"filterBy='Textiles'\">Textiles </button>\n  <button class=\" btn btn-lg btn-info\" [class.active]=\"filterBy=='Modern European Painting and Sculptor'\" (click)=\"filterBy='Modern European Painting and Sculpture'\">Modern European Painting and Sculpture</button>\n  </div>\n    <ul id=\"thumbnailList\">\n    <li *ngFor = \"let image of (visibleImages | filter:filterBy)\">\n      <a [routerLink]=\"['/image',image.artworkID]\"> <img class=\"tn\" width=\"200\" height=\"160\" src=\"../../assets/images/{{image.artworkPhoto}}_reduced.jpg\" alt=\"image from Cleveland Museum of Art\"></a>\n    </li>\n  </ul>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(dataService) {
        this.dataService = dataService;
        this.visibleImages = [];
        this.filterBy = 'all';
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.visibleImages = this.dataService.getImages();
    };
    GalleryComponent.prototype.ngOnChanges = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GalleryComponent.prototype, "filterBy", void 0);
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/image-detail/image-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/image-detail/image-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contained{\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-template-areas:\n  \" img img . . . .\"\n  \" img img info info info info\"\n  \" img img info info info info\"\n  \" img img . . . .\"\n  \" tombstone tombstone . . . .\";\n  grid-gap: 20px;\n  width: 1000px;\n  margin: auto;\n}\n\nimg{\n  height: 100%;\n}\n\n#img{\ngrid-area: img;\n}\n\n#tombstone{\ngrid-area: tombstone;\n}\n\n#info{\n  grid-area: info;\n}\n\n.img-container{\n  box-shadow: #555 1px 2px 8px 1px;\n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtZGV0YWlsL2ltYWdlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekI7Ozs7O2lDQUsrQjtFQUMvQixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtBQUNBLGVBQWU7Q0FDZDs7QUFDRDtBQUNBLHFCQUFxQjtDQUNwQjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGlDQUFpQzs7Q0FFbEMiLCJmaWxlIjoic3JjL2FwcC9pbWFnZS1kZXRhaWwvaW1hZ2UtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVke1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgXCIgaW1nIGltZyAuIC4gLiAuXCJcbiAgXCIgaW1nIGltZyBpbmZvIGluZm8gaW5mbyBpbmZvXCJcbiAgXCIgaW1nIGltZyBpbmZvIGluZm8gaW5mbyBpbmZvXCJcbiAgXCIgaW1nIGltZyAuIC4gLiAuXCJcbiAgXCIgdG9tYnN0b25lIHRvbWJzdG9uZSAuIC4gLiAuXCI7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmltZ3tcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jaW1ne1xuZ3JpZC1hcmVhOiBpbWc7XG59XG4jdG9tYnN0b25le1xuZ3JpZC1hcmVhOiB0b21ic3RvbmU7XG59XG4jaW5mb3tcbiAgZ3JpZC1hcmVhOiBpbmZvO1xufVxuLmltZy1jb250YWluZXJ7XG4gIGJveC1zaGFkb3c6ICM1NTUgMXB4IDJweCA4cHggMXB4O1xuXG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/image-detail/image-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-detail/image-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contained\">\n  <div id = \"img\">\n    <div>\n      <img src=\"../../assets/images/{{image.artworkPhoto}}_reduced.jpg\" class=\"img-container\">\n    </div>\n  </div>\n  <div id=\"info\">\n   <strong>{{image.artworkTitle}}</strong><br><br>\n   <strong>Department: </strong> {{image.departmentName}}<br>\n    <strong>creator role: </strong>{{image.creatorRole}}<br>\n    <strong>creator description: </strong>{{image.creatorDescription}}<br>\n  </div>\n  <div id =\"tombstone\">\n    {{image.artworkTombstone}}\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/image-detail/image-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-detail/image-detail.component.ts ***!
  \********************************************************/
/*! exports provided: ImageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetailComponent", function() { return ImageDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ImageDetailComponent = /** @class */ (function () {
    function ImageDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ImageDetailComponent.prototype.ngOnInit = function () {
        this.image = this.dataService.getImage(this.route.snapshot.params['id']);
        console.log(this.image);
    };
    ImageDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-detail',
            template: __webpack_require__(/*! ./image-detail.component.html */ "./src/app/image-detail/image-detail.component.html"),
            styles: [__webpack_require__(/*! ./image-detail.component.css */ "./src/app/image-detail/image-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ImageDetailComponent);
    return ImageDetailComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\n  font-family: 'Lato',sans-serif;\n  background-color: #424242;\n}\n\n.logo{\n  color: aliceblue;\n  font-family: 'Lato',sans-serif;\n  font-size: 1.5em;\n}\n\nul.nav a{\n\n}\n\nul.nav a:hover{\n\n}\n\n.active>a{\n  background-color: #616161;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsaUJBQWlCO0NBQ2xCOztBQUVEOztDQUVDOztBQUVEOztDQUVDOztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xuICBmb250LWZhbWlseTogJ0xhdG8nLHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG59XG5cbi5sb2dve1xuICBjb2xvcjogYWxpY2VibHVlO1xuICBmb250LWZhbWlseTogJ0xhdG8nLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbnVsLm5hdiBhe1xuXG59XG5cbnVsLm5hdiBhOmhvdmVye1xuXG59XG5cbi5hY3RpdmU+YXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nav class=\"navbar navbar-dark bg-dark navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <a class=\"navbar-brand logo\" href=\"#\">{{title}}</a>\n      </div>\n    </div>\n  </nav>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.title = 'CMA-Artwork';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_cma_artwork_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/cma-artwork.json */ "./src/assets/cma-artwork.json");
var _assets_cma_artwork_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/cma-artwork.json */ "./src/assets/cma-artwork.json", 1);



var DataService = /** @class */ (function () {
    function DataService() {
        this.visibleImages = [];
    }
    DataService.prototype.getImages = function () {
        return this.visibleImages = images.slice(0);
    };
    DataService.prototype.getImage = function (id) {
        return images.slice(0).find(function (image) { return image.artworkID == id; });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());

var images = _assets_cma_artwork_json__WEBPACK_IMPORTED_MODULE_2__.items;


/***/ }),

/***/ "./src/app/shared/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, criteria) {
        if (criteria == 'all') {
            return items;
        }
        else
            return items.filter(function (item) {
                return item.departmentName === criteria;
            });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/assets/cma-artwork.json":
/*!*************************************!*\
  !*** ./src/assets/cma-artwork.json ***!
  \*************************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = {"items":[{"artworkID":"109709","artworkTitle":"San Ildefonso Pottery Design","artworkPhoto":"1928.35","artworkTombstone":"San Ildefonso Pottery Design, Before 1928. Kenneth M Chapman (American, 1875-1968). Drawing; page: 25.4 x 11.4 cm (10 x 4 1/2 in.). The Cleveland Museum of Art, Educational Purchase Fund 1928.35","departmentName":"Drawings","creatorRole":"artist","creatorDescription":"Kenneth M Chapman (American, 1875-1968)"},{"artworkID":"112830","artworkTitle":"Harmony","artworkPhoto":"1931.439","artworkTombstone":"Harmony, c. 1910 - 1940. Karoly Fulop (Hungarian, 1898-). Oil on wood; overall: 59.1 x 57.8 cm (23 1/4 x 22 3/4 in.). The Cleveland Museum of Art, Gift of Mrs. Henry A. Everett for the Dorothy Burnham Everett Memorial Collection 1931.439","departmentName":"Modern European Painting and Sculpture","creatorRole":"artist","creatorDescription":"Karoly Fulop (Hungarian, 1898-)"},{"artworkID":"117251","artworkTitle":"Masked Figure","artworkPhoto":"1937.804","artworkTombstone":"Masked Figure, 1930s. Oqwa Pi (American, 1899-1971). Watercolor; paper: 27.9 x 35.6 cm (11 x 14 in.). The Cleveland Museum of Art, Gift of Amelia Elizabeth White 1937.804","departmentName":"Drawings","creatorRole":"artist","creatorDescription":"Oqwa Pi (American, 1899-1971)"},{"artworkID":"117370","artworkTitle":"Crow Dancer","artworkPhoto":"1937.926","artworkTombstone":"Crow Dancer, 1930s. Velino Herrera (American, 1902-1973). Watercolor; matted: 25.4 x 38.1 cm (10 x 15 in.). The Cleveland Museum of Art, Gift of Amelia Elizabeth White 1937.926","departmentName":"Drawings","creatorRole":"artist","creatorDescription":"Velino Herrera (American, 1902-1973)"},{"artworkID":"122339","artworkTitle":"Virgin and Child with Saints and Donors","artworkPhoto":"1942.636","artworkTombstone":"Virgin and Child with Saints and Donors, c. 1515. Giovanni Battista Cima da Conegliano (Italian, ca. 1459-1518), and Workshop. Oil on wood; framed: 103 x 125 x 16 cm (40 9/16 x 49 3/16 x 6 5/16 in.); unframed: 56 x 78.8 cm (22 1/16 x 31 in.). The Cleveland Museum of Art, Bequest of John L. Severance 1942.636","departmentName":"European Painting and Sculpture","creatorRole":"artist","creatorDescription":"Giovanni Battista Cima da Conegliano (Italian, ca. 1459-1518)"},{"artworkID":"123705","artworkTitle":"The Game of Leap Frog","artworkPhoto":"1944.237","artworkTombstone":"The Game of Leap Frog, 1785. Jean Guillaume Moitte (French, 1746-1810), Antoine-François Gérard (French, 1760-1843). Wax on slate; framed: 30 x 53.5 x 4 cm (11 13/16 x 21 1/16 x 1 9/16 in.); overall: 40.7 cm (16 in.). The Cleveland Museum of Art, Purchase from the J. H. Wade Fund 1944.237","departmentName":"European Painting and Sculpture","creatorRole":"designed by","creatorDescription":"Jean Guillaume Moitte (French, 1746-1810)"},{"artworkID":"124245","artworkTitle":"La Vie","artworkPhoto":"1945.24","artworkTombstone":"La Vie, 1903. Pablo Picasso (Spanish, 1881-1973). Oil on canvas; framed: 239 x 170 x 10 cm (94 1/8 x 66 15/16 x 3 15/16 in.); unframed: 196.5 x 129.2 cm (77 3/8 x 50 7/8 in.). The Cleveland Museum of Art, Gift of the Hanna Fund 1945.24 © Estate of Pablo Picasso / Artists Rights Society (ARS), New York","departmentName":"Modern European Painting and Sculpture","creatorRole":"artist","creatorDescription":"Pablo Picasso (Spanish, 1881-1973)"},{"artworkID":"125133","artworkTitle":"Fish in Net","artworkPhoto":"1947.106","artworkTombstone":"Fish in Net, 1947. Onondaga Silk Company (American), after a design by Waldo Pierce (American, 1884-1970). Plain cloth, screen printed: silk; average: 274.3 x 104.1 cm (108 x 41 in.). The Cleveland Museum of Art, Purchase from the J. H. Wade Fund 1947.106","departmentName":"Textiles","creatorRole":"artist","creatorDescription":"Waldo Pierce (American, 1884-1970)"},{"artworkID":"126768","artworkTitle":"Holy Family with a Shepherd","artworkPhoto":"1949.185","artworkTombstone":"Holy Family with a Shepherd, early 1520s. Battista Dossi (Italian, ca. 1490-1548). Oil on canvas; unframed: 38.7 x 32 cm (15 1/4 x 12 5/8 in.). The Cleveland Museum of Art, Delia E. Holden and L. E. Holden Funds 1949.185","departmentName":"European Painting and Sculpture","creatorRole":"artist","creatorDescription":"Battista Dossi (Italian, ca. 1490-1548)"},{"artworkID":"130223","artworkTitle":"Covered Tureen on Stand (Pot à oille)","artworkPhoto":"1952.592","artworkTombstone":"Covered Tureen on Stand (Pot à oille), 1797-1798. Henry Auguste (French, 1759-1816). Silver; overall: 26.2 x 29.1 cm (10 5/16 x 11 7/16 in.); average: 22.6 cm (8 7/8 in.). The Cleveland Museum of Art, Gift of James Hazen Hyde 1952.592","departmentName":"Decorative Art and Design","creatorRole":"fabricated by","creatorDescription":"Henry Auguste (French, 1759-1816)"},{"artworkID":"131349","artworkTitle":"Arquitectura Funcional:  Shadows, No. 4","artworkPhoto":"1954.13.9","artworkTombstone":"Arquitectura Funcional:  Shadows, No. 4. Francisco Dosamantes. Lithograph; The Cleveland Museum of Art, Gift of Francisco Dosamantes 1954.13.9","departmentName":"Prints","creatorRole":"artist","creatorDescription":"Francisco Dosamantes"},{"artworkID":"135141","artworkTitle":"A Family Meal","artworkPhoto":"1958.174","artworkTombstone":"A Family Meal, c. 1645-55 or later. Le Nain family (French), after Le Maître des Jeux (French). Oil on canvas; framed: 111.8 x 142.2 x 10.2 cm (44 x 56 x 4 in.); unframed: 92 x 120.5 cm (36 1/4 x 47 7/16 in.). The Cleveland Museum of Art, Gift of Mrs. Salmon P. Halle in memory of Salmon Portland Halle 1958.174","departmentName":"European Painting and Sculpture","creatorRole":"artist","creatorDescription":"Le Nain family (French)"},{"artworkID":"137119","artworkTitle":"Prayer Nut with Scenes from the Life of St. James the Greater","artworkPhoto":"1961.87","artworkTombstone":"Prayer Nut with Scenes from the Life of St. James the Greater, c. 1500-1530. Adam Dircksz (Netherlandish, active c. 1500), and Workshop. Boxwood; overall: 5.8 x 4.8 cm (2 5/16 x 1 7/8 in.). The Cleveland Museum of Art, Purchase from the J. H. Wade Fund 1961.87","departmentName":"Medieval Art","creatorRole":"artist","creatorDescription":"Adam Dircksz (Netherlandish, active c. 1500)"},{"artworkID":"140001","artworkTitle":"Imperial Red Cross Easter Egg","artworkPhoto":"1963.673","artworkTombstone":"Imperial Red Cross Easter Egg, 1915. Firm of Peter Carl Fabergé (Russian, 1846-1920), Henrik Wigström (Russian, 1862-1923). Gold, silver, enamel, glass, ivory; overall: 8.6 x 6.4 cm (3 3/8 x 2 1/2 in.). The Cleveland Museum of Art, The India Early Minshall Collection 1963.673","departmentName":"Decorative Art and Design","creatorRole":"artist","creatorDescription":"Peter Carl Fabergé (Russian, 1846-1920)"},{"artworkID":"140208","artworkTitle":"Composition Concrete (Study for Mural)","artworkPhoto":"1964.2","artworkTombstone":"Composition Concrete (Study for Mural), 1957-1960. Stuart Davis (American, 1894-1964). Oil on canvas; framed: 130.5 x 72 x 9.5 cm (51 3/8 x 28 3/8 x 3 3/4 in.); unframed: 108.6 x 50.8 cm (42 3/4 x 20 in.). The Cleveland Museum of Art, Contemporary Collection of The Cleveland Museum of Art 1964.2 © VAGA, New York, NY","departmentName":"American Painting and Sculpture","creatorRole":"artist","creatorDescription":"Stuart Davis (American, 1894-1964)"},{"artworkID":"141639","artworkTitle":"Twilight in the Wilderness","artworkPhoto":"1965.233","artworkTombstone":"Twilight in the Wilderness, 1860. Frederic Edwin Church (American, 1826-1900). Oil on canvas; framed: 124 x 185 x 13 cm (48 13/16 x 72 13/16 x 5 1/8 in.); unframed: 101.6 x 162.6 cm (40 x 64 in.). The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund 1965.233","departmentName":"American Painting and Sculpture","creatorRole":"artist","creatorDescription":"Frederic Edwin Church (American, 1826-1900)"},{"artworkID":"141883","artworkTitle":"Lom-Lan","artworkPhoto":"1965.427","artworkTombstone":"Lom-Lan, 1949-1952. Victor Vasarely (French, 1908-1997). Oil on canvas; unframed: 92 x 59.8 cm (36 1/4 x 23 9/16 in.). The Cleveland Museum of Art, Contemporary Collection of The Cleveland Museum of Art 1965.427 © Artists Right Society (ARS), New York / ADAGP, Paris","departmentName":"Modern European Painting and Sculpture","creatorRole":"artist","creatorDescription":"Victor Vasarely (French, 1908-1997)"},{"artworkID":"142719","artworkTitle":"Egg with Gold Stand and Easel and Photograph","artworkPhoto":"1966.435","artworkTombstone":"Egg with Gold Stand and Easel and Photograph , before 1896. Alexander Edward Tillander (Russian). Gold, enamel, sapphire, gold easel and stand, photograph covered with faceted green glass; The Cleveland Museum of Art, The India Early Minshall Collection 1966.435","departmentName":"Decorative Art and Design","creatorRole":"made by","creatorDescription":"Alexander Edward Tillander (Russian)"},{"artworkID":"142749","artworkTitle":"Salt Cellar","artworkPhoto":"1966.455","artworkTombstone":"Salt Cellar, 1903-c.1915. Henrik Wigström (Russian, 1862-1923), firm of Peter Carl Fabergé (Russian, 1846-1920). Gold, jade, enamel, pearls; overall: 8.3 x 3.5 x 4.5 cm (3 1/4 x 1 3/8 x 1 3/4 in.). The Cleveland Museum of Art, The India Early Minshall Collection 1966.455","departmentName":"Decorative Art and Design","creatorRole":"artist","creatorDescription":"Peter Carl Fabergé (Russian, 1846-1920)"},{"artworkID":"142753","artworkTitle":"Framed Miniature: Portrait of Czar Nicholas II","artworkPhoto":"1966.458.1","artworkTombstone":"Framed Miniature: Portrait of Czar Nicholas II, before 1896 . Firm of Peter Carl Fabergé (Russian, 1846-1920), Mikhail Evlampievich Perkhin (Russian, 1860-1903), Johannes Zehngraf (Russian, 1857-1908). Gold, jade, rubies, gouache, ivory, glass; overall: 15.3 x 5 x 5 cm (6 x 1 15/16 x 1 15/16 in.). The Cleveland Museum of Art, The India Early Minshall Collection 1966.458.1","departmentName":"Decorative Art and Design","creatorRole":"artist","creatorDescription":"Peter Carl Fabergé (Russian, 1846-1920)"},{"artworkID":"142754","artworkTitle":"Framed Miniature: Portrait of Grand Duchess Olga","artworkPhoto":"1966.458.2","artworkTombstone":"Framed Miniature: Portrait of Grand Duchess Olga, before 1896. Mikhail Evlampievich Perkhin (Russian, 1860-1903), firm of Peter Carl Fabergé (Russian, 1846-1920), Johannes Zehngraf (Russian, 1857-1908). Gold, rubies, diamonds, gouache, ivory, glass; overall: 15.3 x 5 x 5 cm (6 x 1 15/16 x 1 15/16 in.). The Cleveland Museum of Art, The India Early Minshall Collection 1966.458.2","departmentName":"Decorative Art and Design","creatorRole":"artist","creatorDescription":"Peter Carl Fabergé (Russian, 1846-1920)"},{"artworkID":"142770","artworkTitle":"Elephant Bell Push","artworkPhoto":"1966.474","artworkTombstone":"Elephant Bell Push, after 1903. Henrik Wigström (Russian, 1862-1923), firm of Peter Carl Fabergé (Russian, 1846-1920). Jade, gold, rubies, emeralds, diamonds, enamel; overall: 6.7 x 7.7 x 5.4 cm (2 5/8 x 3 1/16 x 2 1/8 in.). The Cleveland Museum of Art, The India Early Minshall Collection 1966.474","departmentName":"Decorative Art and Design","creatorRole":"artist","creatorDescription":"Peter Carl Fabergé (Russian, 1846-1920)"},{"artworkID":"142777","artworkTitle":"Miniature Teapot","artworkPhoto":"1966.479","artworkTombstone":"Miniature Teapot, before 1896. Firm of Peter Carl Fabergé (Russian, 1846-1920), Mikhail Evlampievich Perkhin (Russian, 1860-1903). Jade, gold; overall: 5.8 x 10.9 cm (2 5/16 x 4 5/16 in.). The Cleveland Museum of Art, The India Early Minshall Collection 1966.479","departmentName":"Decorative Art and Design","creatorRole":"artist","creatorDescription":"Peter Carl Fabergé (Russian, 1846-1920)"},{"artworkID":"142783","artworkTitle":"Miniature Shoe","artworkPhoto":"1966.482","artworkTombstone":"Miniature Shoe, before 1903. Attributed to Mikhail Evlampievich Perkhin (Russian, 1860-1903), firm of Peter Carl Fabergé (Russian, 1846-1920). Bloodstone, gold, diamonds, silver; overall: 7.2 x 8.9 x 3.4 cm (2 13/16 x 3 1/2 x 1 5/16 in.). The Cleveland Museum of Art, The India Early Minshall Collection 1966.482","departmentName":"Decorative Art and Design","creatorRole":"artist","creatorDescription":"Peter Carl Fabergé (Russian, 1846-1920)"},{"artworkID":"144689","artworkTitle":"Portraits of the Qianlong Emperor and His Twelve Consorts","artworkPhoto":"1969.31","artworkTombstone":"Portraits of the Qianlong Emperor and His Twelve Consorts, 1736 - c. 1770s. Giuseppe Castiglione (Italian, 1688-1766), and others (Chinese). Handscroll, ink and color on silk; overall: 53.8 x 1154.5 cm (21 3/16 x 454 1/2 in.); painting only: 53 x 688.3 cm (20 7/8 x 271 in.). The Cleveland Museum of Art, John L. Severance Fund 1969.31","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Giuseppe Castiglione (Italian, 1688-1766)"},{"artworkID":"144966","artworkTitle":"Virgin and Child with the Young Saint John the Baptist","artworkPhoto":"1970.160","artworkTombstone":"Virgin and Child with the Young Saint John the Baptist, c. 1490. Sandro Botticelli (Italian, 1444/45-1510), and Workshop. Tempera and oil on wood; framed: 115 x 12.5 cm (45 1/4 x 4 15/16 in.); diameter: 68 cm (26 3/4 in.). The Cleveland Museum of Art, Leonard C. Hanna, Jr. Fund 1970.160","departmentName":"Medieval Art","creatorRole":"artist","creatorDescription":"Sandro Botticelli (Italian, 1444/45-1510)"},{"artworkID":"145932","artworkTitle":"Box","artworkPhoto":"1971.141","artworkTombstone":"Box, c. 1901. Liberty and Company (British), attributed to Rex Silver (British, 1879-1965). Silver and enamel; overall: 6.4 x 20.3 x 13 cm (2 1/2 x 8 x 5 1/8 in.). The Cleveland Museum of Art, Sundry Purchase Fund 1971.141","departmentName":"Decorative Art and Design","creatorRole":"manufacturer","creatorDescription":"Liberty and Company (British)"},{"artworkID":"146748","artworkTitle":"Sauce Boat","artworkPhoto":"1972.188","artworkTombstone":"Sauce Boat, c. 1752. Possibly by Bristol Porcelain Factory (British), possibly by Worcester Porcelain Factory (British). Porcelain; overall: 10.9 cm (4 5/16 in.). The Cleveland Museum of Art, Bequest of Mrs. Everett R. Castle 1972.188","departmentName":"Decorative Art and Design","creatorRole":"made by","creatorDescription":"Worcester Porcelain Factory (British)"},{"artworkID":"147446","artworkTitle":"Blacksmiths","artworkPhoto":"1973.184","artworkTombstone":"Blacksmiths, after 1887. Émile Jacque (French, 1848-1912). Oil on fabric; framed: 140 x 113.5 x 13.5 cm (55 1/8 x 44 11/16 x 5 5/16 in.); unframed: 116.4 x 89.9 cm (45 13/16 x 35 3/8 in.). The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund 1973.184","departmentName":"Modern European Painting and Sculpture","creatorRole":"artist","creatorDescription":"Émile Jacque (French, 1848-1912)"},{"artworkID":"147906","artworkTitle":"A Prunus in the Moonlight","artworkPhoto":"1974.26","artworkTombstone":"A Prunus in the Moonlight, 1300s. Wang Mian (Chinese, 1287-1359). Hanging scroll, ink on silk; painting: 164.6 x 94.6 cm (64 13/16 x 37 1/4 in.); overall: 260.6 x 116 cm (102 5/8 x 45 11/16 in.). The Cleveland Museum of Art, Leonard C. Hanna, Jr. Fund 1974.26","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Wang Mian (Chinese, 1287-1359)"},{"artworkID":"148860","artworkTitle":"Pair of Paintings: The Colonnade of St. Peter's, Rome, during the Conclave and The Grotto of Posillipo","artworkPhoto":"1976.97","artworkTombstone":"Pair of Paintings: The Colonnade of St. Peter's, Rome, during the Conclave and The Grotto of Posillipo, c.1769. Hubert Robert (French, 1733-1808). Oil on canvas; framed: 56 x 47.5 x 6 cm (22 1/16 x 18 11/16 x 2 3/8 in.); unframed: 42.6 x 33.4 cm (16 3/4 x 13 1/8 in.). The Cleveland Museum of Art, Mr. and Mrs. William H. Marlatt Fund 1976.97","departmentName":"European Painting and Sculpture","creatorRole":"artist","creatorDescription":"Hubert Robert (French, 1733-1808)"},{"artworkID":"148958","artworkTitle":"The Curious One","artworkPhoto":"1977.116","artworkTombstone":"The Curious One, 1823. Antoine Pierre Mongin (French, 1761-1827). Oil on paper mounted to canvas; unframed: 43.5 x 34.6 cm (17 1/8 x 13 5/8 in.). The Cleveland Museum of Art, Gift of Mr. and Mrs. Noah L. Butkin 1977.116","departmentName":"Modern European Painting and Sculpture","creatorRole":"artist","creatorDescription":"Antoine Pierre Mongin (French, 1761-1827)"},{"artworkID":"149386","artworkTitle":"Hand Mirror","artworkPhoto":"1978.43","artworkTombstone":"Hand Mirror, c. 1900. Designed by Félix Bracquemond (French, 1833-1914), relief by Auguste Rodin (French, 1840-1917), enamel by Alexander Riquet (French), goldsmith work by Alexis Falize (French, 1811-1898). Gold, enamel, and ivory; overall: 32.2 x 16.1 x 1.2 cm (12 11/16 x 6 5/16 x 1/2 in.). The Cleveland Museum of Art, Gift of Ralph King, by exchange 1978.43","departmentName":"Decorative Art and Design","creatorRole":"enamelist","creatorDescription":"Alexander Riquet (French)"},{"artworkID":"150015","artworkTitle":"Wild Boars in the Snow","artworkPhoto":"1980.231","artworkTombstone":"Wild Boars in the Snow, c. 1872-1877. Rosa Bonheur (French, 1822-1899). Oil on wood panel; unframed: 21 x 30.8 cm (8 1/4 x 12 1/8 in.). The Cleveland Museum of Art, Bequest of Noah L. Butkin 1980.231","departmentName":"Modern European Painting and Sculpture","creatorRole":"artist","creatorDescription":"Rosa Bonheur (French, 1822-1899)"},{"artworkID":"150046","artworkTitle":"Expulsion of Adam and Eve","artworkPhoto":"1980.258","artworkTombstone":"Expulsion of Adam and Eve, 1880s. John Faed (Scottish, 1820-1902). Oil on fabric; unframed: 91.3 x 70.7 cm (35 15/16 x 27 13/16 in.). The Cleveland Museum of Art, Bequest of Noah L. Butkin 1980.258","departmentName":"Modern European Painting and Sculpture","creatorRole":"artist","creatorDescription":"John Faed (Scottish, 1820-1902)"},{"artworkID":"150156","artworkTitle":"Tea Service","artworkPhoto":"1980.74","artworkTombstone":"Tea Service, c. 1907. Adrien-Aurélien Hebrard (French, 1866-1937), Carlo Bugatti (Italian, 1856-1940). Silver and ivory; The Cleveland Museum of Art, The Thomas L. Fawick Memorial Collection 1980.74","departmentName":"Decorative Art and Design","creatorRole":"designed by","creatorDescription":"Carlo Bugatti (Italian, 1856-1940)"},{"artworkID":"152445","artworkTitle":"Courtesan","artworkPhoto":"1985.272","artworkTombstone":"Courtesan, 19th century. Gion Seitoku (Japanese, 1781-1829?). Hanging scroll, pillar painting; ink and color paper; overall: 194.3 x 23.5 cm (76 1/2 x 9 1/4 in.); painting only: 126.5 x 13.3 cm (49 13/16 x 5 1/4 in.). The Cleveland Museum of Art, The Kelvin Smith Collection, given by Mrs. Kelvin Smith 1985.272","departmentName":"Japanese Art","creatorRole":"artist","creatorDescription":"Gion Seitoku (Japanese, 1781-1829?)"},{"artworkID":"152776","artworkTitle":"Bull Skull, Fruit, Pitcher","artworkPhoto":"1985.57","artworkTombstone":"Bull Skull, Fruit, Pitcher, 1939. Pablo Picasso (Spanish, 1881-1973). Oil on canvas; framed: 85.7 x 117.2 x 7 cm (33 3/4 x 46 1/8 x 2 3/4 in.); unframed: 65 x 92 cm (25 9/16 x 36 1/4 in.). The Cleveland Museum of Art, Leonard C. Hanna, Jr. Fund 1985.57 © Estate of  Pablo Picasso / Artists Rights Society (ARS), New York","departmentName":"Modern European Painting and Sculpture","creatorRole":"artist","creatorDescription":"Pablo Picasso (Spanish, 1881-1973)"},{"artworkID":"153610","artworkTitle":"Sunflower, New Mexico, I","artworkPhoto":"1987.140","artworkTombstone":"Sunflower, New Mexico, I, 1935. Georgia O'Keeffe (American, 1887-1986). Oil on canvas; framed: 53.3 x 43.2 x 3.8 cm (21 x 17 x 1 1/2 in.); unframed: 50.8 x 40.6 cm (20 x 16 in.). The Cleveland Museum of Art, Bequest of Georgia O'Keeffe 1987.140 © The Cleveland Museum of Art","departmentName":"American Painting and Sculpture","creatorRole":"artist","creatorDescription":"Georgia O'Keeffe (American, 1887-1986)"},{"artworkID":"154062","artworkTitle":"Female Daoist Figure in Landscape","artworkPhoto":"1988.18","artworkTombstone":"Female Daoist Figure in Landscape, early 1500s. Koboku (Japanese). Hanging scroll; ink on paper; painting only: 44.5 x 27.9 cm (17 1/2 x 11 in.); including mounting: 27 x 44.4 cm (10 5/8 x 17 1/2 in.). The Cleveland Museum of Art, Leonard C. Hanna, Jr. Fund 1988.18","departmentName":"Japanese Art","creatorRole":"artist","creatorDescription":"Koboku (Japanese)"},{"artworkID":"156112","artworkTitle":"Table","artworkPhoto":"1991.45","artworkTombstone":"Table, c. 1907. Carlo Bugatti (Italian, 1856-1940). Inlaid wood (mahogany?), cast and gilded bronze mounts, inlays of ivory or bone, metal, and mother-of-pearl (marine mussels or pearl oysters); overall: 71.5 x 67.1 x 41.3 cm (28 1/8 x 26 7/16 x 16 1/4 in.). The Cleveland Museum of Art, Leonard C. Hanna, Jr. Fund 1991.45","departmentName":"Decorative Art and Design","creatorRole":"designed by","creatorDescription":"Carlo Bugatti (Italian, 1856-1940)"},{"artworkID":"156113","artworkTitle":"Salver","artworkPhoto":"1991.46","artworkTombstone":"Salver, c. 1907. Adrien-Aurélien Hebrard (French, 1866-1937), Carlo Bugatti (Italian, 1856-1940). Silver and ivory; overall: 14.6 x 33 cm (5 3/4 x 13 in.). The Cleveland Museum of Art, Leonard C. Hanna, Jr. Fund 1991.46","departmentName":"Decorative Art and Design","creatorRole":"designed by","creatorDescription":"Carlo Bugatti (Italian, 1856-1940)"},{"artworkID":"156524","artworkTitle":"Colossol Monolith of Amenhotep III, Gournah","artworkPhoto":"1992.235","artworkTombstone":"Égypte, Nubie, Palestine et Syrie. Dessins photographiques receuillis pendant les années 1849, 1850 et 1851 accompagnes d'un text explicatif et précédés d'une introduction par Maxime Du Camp: Colossol Monolith of Amenhotep III, Gournah, 1849-1851. Maxime Du Camp (French, 1822-1894), Gide et J. Baudry. Salted paper print from calotype negative, Blanquart-Évrard process; image: 19.5 x 16.5 cm (7 11/16 x 6 1/2 in.); matted: 45.7 x 35.6 cm (18 x 14 in.). The Cleveland Museum of Art, Andrew R. and Martha Holden Jennings Fund 1992.235","departmentName":"Photography","creatorRole":"artist","creatorDescription":"Maxime Du Camp (French, 1822-1894)"},{"artworkID":"159457","artworkTitle":"Large Head","artworkPhoto":"1996.233","artworkTombstone":"Large Head, 1993. Lucien Freud (British, 1922-2011), published by Matthew Marks Gallery. Etching with scraping and burnishing; sheet: 79.3 x 63.4 cm (31 1/4 x 24 15/16 in.); platemark: 69.5 x 54.5 cm (27 3/8 x 21 7/16 in.). The Cleveland Museum of Art, John L. Severance Fund 1996.233","departmentName":"Prints","creatorRole":"artist","creatorDescription":"Lucien Freud (British, 1922-2011)"},{"artworkID":"159976","artworkTitle":"Marilyn x 100","artworkPhoto":"1997.246","artworkTombstone":"Marilyn x 100, 1962. Andy Warhol (American, 1928-1987). Screenprint ink and synthetic polymer paint on canvas; framed: 210.2 x 573.2 x 6.4 cm (82 3/4 x 225 11/16 x 2 1/2 in.); unframed: 205.7 x 567.7 cm (81 x 223 1/2 in.). The Cleveland Museum of Art, Leonard C. Hanna, Jr. Fund, and Anonymous Gift 1997.246 © The Andy Warhol Foundation for the Visual Arts, Inc. / Licensed by Artists Rights Society (ARS), New York","departmentName":"Contemporary Art","creatorRole":"artist","creatorDescription":"Andy Warhol (American, 1928-1987)"},{"artworkID":"160723","artworkTitle":"Eighteen Views of Huzhou","artworkPhoto":"1998.78","artworkTombstone":"Eighteen Views of Huzhou, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; overall: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160724","artworkTitle":"Xintang (Immortal's Peak)","artworkPhoto":"1998.78.1","artworkTombstone":"Eighteen Views of Huzhou: Xintang (Immortal's Peak), 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.1","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160725","artworkTitle":"Mt. Shenchang","artworkPhoto":"1998.78.10","artworkTombstone":"Eighteen Views of Huzhou: Mt. Shenchang, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.10","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160726","artworkTitle":"Guiyun Shrine","artworkPhoto":"1998.78.11","artworkTombstone":"Eighteen Views of Huzhou: Guiyun Shrine, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.11","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160727","artworkTitle":"Xianding (Immortal's Peak)","artworkPhoto":"1998.78.12","artworkTombstone":"Eighteen Views of Huzhou: Xianding (Immortal's Peak), 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.12","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160728","artworkTitle":"Mt. Daochang","artworkPhoto":"1998.78.13","artworkTombstone":"Eighteen Views of Huzhou: Mt. Daochang, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.13","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160729","artworkTitle":"Baoyang Lake","artworkPhoto":"1998.78.14","artworkTombstone":"Eighteen Views of Huzhou: Baoyang Lake, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.14","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160730","artworkTitle":"Lüshan Hui","artworkPhoto":"1998.78.15","artworkTombstone":"Eighteen Views of Huzhou: Lüshan Hui, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.15","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160731","artworkTitle":"Mt. Changchao","artworkPhoto":"1998.78.16","artworkTombstone":"Eighteen Views of Huzhou: Mt. Changchao, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.16","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160732","artworkTitle":"Bilang Lake","artworkPhoto":"1998.78.17","artworkTombstone":"Eighteen Views of Huzhou: Bilang Lake, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.17","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160733","artworkTitle":"Eighteen Views of Wuxing: Xiaomei","artworkPhoto":"1998.78.18","artworkTombstone":"Eighteen Views of Huzhou: Eighteen Views of Wuxing: Xiaomei, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.18","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160734","artworkTitle":"Mt. Fenghuang (Mt. Phoenix)","artworkPhoto":"1998.78.2","artworkTombstone":"Eighteen Views of Huzhou: Mt. Fenghuang (Mt. Phoenix), 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.2","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160735","artworkTitle":"Mt. Wuzhan","artworkPhoto":"1998.78.3","artworkTombstone":"Eighteen Views of Huzhou: Mt. Wuzhan, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.3","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160736","artworkTitle":"Mt. Biyan (Green Cliff)","artworkPhoto":"1998.78.4","artworkTombstone":"Eighteen Views of Huzhou: Mt. Biyan (Green Cliff), 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.4","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160737","artworkTitle":"Mt. Dong (Grotto Mountain)","artworkPhoto":"1998.78.5","artworkTombstone":"Eighteen Views of Huzhou: Mt. Dong (Grotto Mountain), 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.5","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160738","artworkTitle":"Yutai Peak (Jade Terrace Peak)","artworkPhoto":"1998.78.6","artworkTombstone":"Eighteen Views of Huzhou: Yutai Peak (Jade Terrace Peak), 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.6","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160739","artworkTitle":"Huanglong Cave (Yellow Dragon Cave)","artworkPhoto":"1998.78.7","artworkTombstone":"Eighteen Views of Huzhou: Huanglong Cave (Yellow Dragon Cave), 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.7","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160740","artworkTitle":"Fushan Monastery","artworkPhoto":"1998.78.8","artworkTombstone":"Eighteen Views of Huzhou: Fushan Monastery, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.8","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"160741","artworkTitle":"Hexi","artworkPhoto":"1998.78.9","artworkTombstone":"Eighteen Views of Huzhou: Hexi, 1500s. Song Xu (Chinese, 1525-c. 1606). Album; ink and color on silk; sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.). The Cleveland Museum of Art, The Severance and Greta Millikin Purchase Fund 1998.78.9","departmentName":"Chinese Art","creatorRole":"artist","creatorDescription":"Song Xu (Chinese, 1525-c. 1606)"},{"artworkID":"163361","artworkTitle":"Peru 297","artworkPhoto":"2004.18","artworkTombstone":"Peru 297, 1983. Aaron Siskind (American, 1903-1991). Gelatin silver print; image: 25.5 x 24.8 cm (10 1/16 x 9 3/4 in.); paper: 35.4 x 27.7 cm (13 15/16 x 10 7/8 in.); matted: 50.8 x 40.6 cm (20 x 16 in.). The Cleveland Museum of Art, Gift of Friends of Photography 2004.18 © Aaron Siskind Foundation","departmentName":"Photography","creatorRole":"artist","creatorDescription":"Aaron Siskind (American, 1903-1991)"},{"artworkID":"163645","artworkTitle":"White and Steel Polars","artworkPhoto":"2005.144","artworkTombstone":"White and Steel Polars, 1945. Theodore Roszak. Painted wood, steel, iron, and Plexiglas; overall: 271.8 x 40.6 x 40.6 cm (107 x 16 x 16 in.). The Cleveland Museum of Art, Leonard C. Hanna, Jr. Fund 2005.144 © Estate of Theodore Roszak/Licensed by VAGA, New York, NY","departmentName":"American Painting and Sculpture","creatorRole":"artist","creatorDescription":"Theodore Roszak"},{"artworkID":"168719","artworkTitle":"Interior","artworkPhoto":"2010.426","artworkTombstone":"Interior, 1972. Richard Artschwager (American, 1923-2013), Brooke Alexander, Inc.. Screenprint; sheet: 83 x 116.8 cm (32 11/16 x 46 in.); left: 71.9 x 49.6 cm (28 5/16 x 19 1/2 in.); right: 71.6 x 49.7 cm (28 3/16 x 19 9/16 in.). The Cleveland Museum of Art, Gift of The Print Club of Cleveland 2010.426 © Richard Artschwager / Artists Rights Society (ARS), New York","departmentName":"Prints","creatorRole":"artist","creatorDescription":"Richard Artschwager (American, 1923-2013)"},{"artworkID":"169498","artworkTitle":"Moray, Peru","artworkPhoto":"2011.329","artworkTombstone":"Moray, Peru, 1989. Marilyn Bridges (American, 1948-). Gelatin silver print; paper: 28 x 35.6 cm (11 x 14 in.); matted: 45.7 x 55.9 cm (18 x 22 in.); mask: 45.7 x 55.9 cm (18 x 22 in.). The Cleveland Museum of Art, Gift of Dr. Stephen Nicholas 2011.329","departmentName":"Photography","creatorRole":"artist","creatorDescription":"Marilyn Bridges (American, 1948-)"},{"artworkID":"169719","artworkTitle":"Legacy B (diptych)","artworkPhoto":"2011.502","artworkTombstone":"Legacy B (diptych), 2001. Phyllis Seltzer (American, 1928-), assisted by Zoya Trofimova (American, 1950-). Electrostatic copier and heat transfer; right image: 70.8 x 70 cm (27 7/8 x 27 9/16 in.); left image: 70.8 x 70 cm (27 7/8 x 27 9/16 in.). The Cleveland Museum of Art, Gift of Dr. Gerard and Phyllis Seltzer in memory of Elizabeth and Robert Cavano 2011.502","departmentName":"Prints","creatorRole":"artist","creatorDescription":"Phyllis Seltzer (American, 1928-)"},{"artworkID":"170817","artworkTitle":"Folios A and B from the \"Five Treasures\" (Panj Ganj) of Jami","artworkPhoto":"2013.315","artworkTombstone":"Folios A and B from the \"Five Treasures\" (Panj Ganj) of Jami, 1520-1607. Mushfiq (Indian), and others (Indian). Ink, opaque watercolor and gold on paper, both folios double-sided with text on verso; page: 30.2 x 18.1 cm (11 7/8 x 7 1/8 in.). The Cleveland Museum of Art, Gift in honor of Madeline Neves Clapp; Gift of Mrs. Henry White Cannon by exchange; Bequest of Louise T. Cooper; Leonard C. Hanna Jr. Fund; From the Catherine and Ralph Benkaim Collection 2013.315","departmentName":"Indian and South East Asian Art","creatorRole":"artist","creatorDescription":"others (Indian)"},{"artworkID":"172441","artworkTitle":"Artists' Impressions","artworkPhoto":"2015.104","artworkTombstone":"Artists' Impressions, 1992-93. Christopher Brown (American, 1951-), Clinton Adams (American, 1918-2002), David Row (American, 1949-), Edward Ruscha (American, 1937-), Garo Zareh Antreasian (American, 1922-), Gendron Lloyd Jensen (American, 1939-), George McNeil (American, 1908-1995), Hollis Sigler (American, 1948-2001), Italo Scanga (American, 1932-2001), James Drake (American, 1946-), James Granberry Davis (American, 1931-), Jaune Quick-to-See Smith (American, 1940-), John Beerman (American, b. 1958), Joy Laville (American, 1923-), June Wayne (American, 1918-2011), Larry Brown (American, b. 1942), Margo Humphrey (American, 1942-), Mary Ristow (American, 1953-), Robert Colescott (American, 1925-2009), Roberto Juarez (American, 1952-), Squeak Carnwath (American, 1947-), Steven Sorman, Walter Miller Askin (American, 1929-), William Brice (American, 1921-2008), published by Printed at Tamarind Institute, University of New Mexico, Albuquerque, NM. Portfolio of 24 lithographs by 24 artists; The Cleveland Museum of Art, Gift of Linda and Jack Lissauer in honor of Director William M. Griswold 2015.104","departmentName":"Prints","creatorRole":"artist","creatorDescription":"Robert Colescott (American, 1925-2009)"},{"artworkID":"301455","artworkTitle":"Ming with Sword","artworkPhoto":"2017.113","artworkTombstone":"Ming with Sword, 2009 (printed 2011). Anderson & Low. Digital inkjet print; image: 50.8 x 67.6 cm (20 x 26 5/8 in.); framed: 61 x 77.8 cm (24 x 30 5/8 in.). The Cleveland Museum of Art, Sundry Purchase Fund 2017.113 © Anderson & Low","departmentName":"Photography","creatorRole":"NULL","creatorDescription":"Anderson & Low"},{"artworkID":"86508","artworkTitle":"Gates of the City","artworkPhoto":"2015.584","artworkTombstone":"New York Series: Gates of the City, 1922. John Taylor Arms (American, 1887-1953). Color etching and aquatint; platemark: 21.5 x 20.2 cm (8 7/16 x 7 15/16 in.); sheet: 31.1 x 26.2 cm (12 1/4 x 10 5/16 in.). The Cleveland Museum of Art, Gift of Carole W. and Charles B. Rosenblatt 2015.584 Courtesy of John Taylor Arms/ © Suzanne Arms Hawkins","departmentName":"Prints","creatorRole":"artist","creatorDescription":"John Taylor Arms (American, 1887-1953)"},{"artworkID":"90151","artworkTitle":"Calligraphy with Willow and Swallows","artworkPhoto":"2015.463","artworkTombstone":"Calligraphy with Willow and Swallows, 1400s. Ikkyū Sōjun (Japanese, 1394-1481). Hanging scroll, ink on paper; overall: 104 x 34.8 cm (40 15/16 x 13 11/16 in.). The Cleveland Museum of Art, Gift from the Collection of George Gund III 2015.463","departmentName":"Japanese Art","creatorRole":"artist","creatorDescription":"Ikkyū Sōjun (Japanese, 1394-1481)"},{"artworkID":"95185","artworkTitle":"Dido and Aeneas","artworkPhoto":"1915.79","artworkTombstone":"Dido and Aeneas, 1679. Giovanni Francesco Romanelli (Italian, 1610-1662), Michael Wauters (Flemish, 1679). Tapestry weave: silk and wool; The Cleveland Museum of Art, Gift of Mrs. Francis F. Prentiss, in memory of Dr. Dudley P. Allen 1915.79","departmentName":"Textiles","creatorRole":"designed by","creatorDescription":"Giovanni Francesco Romanelli (Italian, 1610-1662)"},{"artworkID":"95186","artworkTitle":"Venus tells Aeneas and his friend Achates to go to Carthage","artworkPhoto":"1915.79.1","artworkTombstone":"Venus tells Aeneas and his friend Achates to go to Carthage, 1679. Giovanni Francesco Romanelli (Italian, 1610-1662), Michael Wauters (Flemish, 1679). Tapestry weave: silk and wool; overall: 411.3 x 294.5 cm (161 15/16 x 115 15/16 in.). The Cleveland Museum of Art, Gift of Mrs. Francis F. Prentiss, in memory of Dr. Dudley P. Allen 1915.79.1","departmentName":"Textiles","creatorRole":"designed by","creatorDescription":"Giovanni Francesco Romanelli (Italian, 1610-1662)"},{"artworkID":"95187","artworkTitle":"Cupid disguised as Aeneas's son, presents gifts to Dido","artworkPhoto":"1915.79.2","artworkTombstone":"Cupid disguised as Aeneas's son, presents gifts to Dido, 1679. Giovanni Francesco Romanelli (Italian, 1610-1662), Michael Wauters (Flemish, 1679). Tapestry weave: silk and wool; overall: 418.8 x 634.6 cm (164 7/8 x 249 13/16 in.). The Cleveland Museum of Art, Gift of Mrs. Francis F. Prentiss, in memory of Dr. Dudley P. Allen 1915.79.2","departmentName":"Textiles","creatorRole":"designed by","creatorDescription":"Giovanni Francesco Romanelli (Italian, 1610-1662)"},{"artworkID":"95188","artworkTitle":"Dido Sacrifices to Juno, the Goddess of Marriage","artworkPhoto":"1915.79.3","artworkTombstone":"Dido Sacrifices to Juno, the Goddess of Marriage, 1679. Giovanni Francesco Romanelli (Italian, 1610-1662), Michael Wauters (Flemish, 1679). Tapestry weave: silk and wool; overall: 411 x 464.5 cm (161 13/16 x 182 7/8 in.). The Cleveland Museum of Art, Gift of Mrs. Francis F. Prentiss, in memory of Dr. Dudley P. Allen 1915.79.3","departmentName":"Textiles","creatorRole":"designed by","creatorDescription":"Giovanni Francesco Romanelli (Italian, 1610-1662)"},{"artworkID":"95189","artworkTitle":"Dido shows Aeneas the plans for the fortifications of Carthage","artworkPhoto":"1915.79.4","artworkTombstone":"Dido shows Aeneas the plans for the fortifications of Carthage, 1679. Giovanni Francesco Romanelli (Italian, 1610-1662), Michael Wauters (Flemish, 1679). Tapestry weave: silk and wool; overall: 416.4 x 563.6 cm (163 15/16 x 221 7/8 in.). The Cleveland Museum of Art, Gift of Mrs. Francis F. Prentiss, in memory of Dr. Dudley P. Allen 1915.79.4","departmentName":"Textiles","creatorRole":"designed by","creatorDescription":"Giovanni Francesco Romanelli (Italian, 1610-1662)"},{"artworkID":"95190","artworkTitle":"Dido and Aeneas seek shelter from a storm","artworkPhoto":"1915.79.5","artworkTombstone":"Dido and Aeneas seek shelter from a storm, 1679. Giovanni Francesco Romanelli (Italian, 1610-1662), Michael Wauters (Flemish, 1679). Tapestry weave: silk and wool; overall: 416.4 x 418.8 cm (163 15/16 x 164 7/8 in.). The Cleveland Museum of Art, Gift of Mrs. Francis F. Prentiss, in memory of Dr. Dudley P. Allen 1915.79.5","departmentName":"Textiles","creatorRole":"designed by","creatorDescription":"Giovanni Francesco Romanelli (Italian, 1610-1662)"},{"artworkID":"95191","artworkTitle":"Mercury tells Aeneas to Leave Carthage","artworkPhoto":"1915.79.6","artworkTombstone":"Mercury tells Aeneas to Leave Carthage, 1679. Giovanni Francesco Romanelli (Italian, 1610-1662), Michael Wauters (Flemish, 1679). Tapestry weave: silk and wool; overall: 411 x 337 cm (161 13/16 x 132 11/16 in.). The Cleveland Museum of Art, Gift of Mrs. Francis F. Prentiss, in memory of Dr. Dudley P. Allen 1915.79.6","departmentName":"Textiles","creatorRole":"designed by","creatorDescription":"Giovanni Francesco Romanelli (Italian, 1610-1662)"},{"artworkID":"95192","artworkTitle":"Aeneas says Farewell to Dido","artworkPhoto":"1915.79.7","artworkTombstone":"Aeneas says Farewell to Dido, 1679. Giovanni Francesco Romanelli (Italian, 1610-1662), Michael Wauters (Flemish, 1679). Tapestry weave: silk and wool; overall: 403 x 394 cm (158 11/16 x 155 1/8 in.). The Cleveland Museum of Art, Gift of Mrs. Francis F. Prentiss, in memory of Dr. Dudley P. Allen 1915.79.7","departmentName":"Textiles","creatorRole":"designed by","creatorDescription":"Giovanni Francesco Romanelli (Italian, 1610-1662)"},{"artworkID":"95193","artworkTitle":"The Death of Dido","artworkPhoto":"1915.79.8","artworkTombstone":"The Death of Dido, 1679. Giovanni Francesco Romanelli (Italian, 1610-1662), Michael Wauters (Flemish, 1679). Tapestry weave: silk and wool; overall: 414 x 466.5 cm (163 x 183 11/16 in.). The Cleveland Museum of Art, Gift of Mrs. Francis F. Prentiss, in memory of Dr. Dudley P. Allen 1915.79.8","departmentName":"Textiles","creatorRole":"designed by","creatorDescription":"Giovanni Francesco Romanelli (Italian, 1610-1662)"}]};

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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sbeard/Code/github/professional/CMA/developer-code-test/CMA-Gallery/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map