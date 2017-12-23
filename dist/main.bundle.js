webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-shopping-item></app-shopping-item>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_item_shopping_item_component__ = __webpack_require__("../../../../../src/app/shopping-item/shopping-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__shopping_item_shopping_item_component__["a" /* ShoppingItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getShoppingItems = function () {
        return this.http.get('api/shopping').map(function (res) { return res.json(); });
    };
    DataService.prototype.addShoopingItem = function (newItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/shopping', newItem, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.deleteShoppingItem = function (id) {
        return this.http.delete('api/shopping/' + id).map(function (res) { return res.json(); });
    };
    DataService.prototype.updateShoppingItem = function (newItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/shopping/' + newItem._id, newItem, { headers: headers }).map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-item/shopping-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-item/shopping-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form #form=\"ngForm\" (ngSubmit)=\"addItem(form)\" *ngIf=\"!toggleForm\">\n\n  <div class=\"form-group\">\n    <label for=\"itemName\">Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"itemName\" value=\"\" ngModel required>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"\">itemQuantity</label>\n    <input type=\"number\" class=\"form-control\" name=\"itemQuantity\" value=\"\" ngModel required>\n  </div>\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.invalid\">Add Item </button>\n\n</form>\n\n<form #editForm=\"ngForm\" (ngSubmit)=\"editItem(editForm)\" *ngIf=\"toggleForm\">\n\n  <div class=\"form-group\">\n    <label for=\"itemName\">Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"itemName\" value=\"\" [ngModel]=\"selectedItem.itemName\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"\">itemQuantity</label>\n    <input type=\"number\" class=\"form-control\" name=\"itemQuantity\" value=\"\" [ngModel]=\"selectedItem.itemQuantity\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-success\">Save</button>\n\n</form>\n\n\n<h2 class=\"page-header\">ShoopingList Items</h2>\n<div *ngIf=\"shoppingList.length>0\">\n<div class=\"row\" *ngFor=\"let item of shoppingList\">\n\n  <div class=\"col-md-1\">\n    <input type=\"checkbox\" name=\"\" [checked]=\"item.itemBought\" (click)=\"updateItemCheckbox(item)\">\n  </div>\n\n  <div class=\"col-md-3\">\n    {{item['itemName']}}\n  </div>\n\n  <div class=\"col-md-2\">\n    {{item['itemQuantity']}}\n  </div>\n\n  <div class=\"col-md-3\">\n    <button type=\"button\" name=\"button\" class=\"btn btn-primary\" (click)=\"showEditForm(item)\" [disabled]=\"toggleForm\" >Edit</button>\n  </div>\n\n  <div class=\"col-md-3\">\n    <input type=\"button\" value=\"delete\" class=\"btn btn-danger\" (click)=\"deleteItem(item._id)\">\n    <br><br>\n  </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shopping-item/shopping-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingItemComponent = (function () {
    //   var newItem:Item={
    //     itemName:string,
    //     itemQuantity:number,
    //     itemBought:false
    // }
    //item:Item[]=[];
    //   itemName:string;
    //   itemQuantity:number;
    //   itemBought:false;
    function ShoppingItemComponent(dataService, cd) {
        this.dataService = dataService;
        this.cd = cd;
        this.shoppingList = [];
        this.toggleForm = false;
    }
    ShoppingItemComponent.prototype.getItems = function () {
        var _this = this;
        this.dataService.getShoppingItems().subscribe(function (items) {
            _this.shoppingList = items['items'];
            //console.log("Data from the shoppingList:" +this.shoppingList[0].itemName);
        });
    };
    ShoppingItemComponent.prototype.addItem = function (form) {
        var _this = this;
        var newItem = {
            itemName: form.value.itemName,
            itemQuantity: form.value.itemQuantity,
            itemBought: false
        };
        this.dataService.addShoopingItem(newItem).subscribe(function (item) {
            _this.shoppingList.push(item['item']);
            _this.getItems();
        });
    };
    ShoppingItemComponent.prototype.deleteItem = function (id) {
        var _this = this;
        var findIndexValue;
        this.dataService.deleteShoppingItem(id).subscribe(function (data) {
            if (data['msg'].n == 1) {
                // for(var i=0;i<this.shoppingList.length;i++){
                //   if(this.shoppingList[i]._id==id){
                //     this.shoppingList.splice(i,1);
                //     this.cd.detectChanges();
                //   }
                // }
                findIndexValue = _this.shoppingList.findIndex(function (item) { return item._id === id; });
                if (findIndexValue !== -1) {
                    _this.shoppingList.splice(findIndexValue, 1);
                }
            }
        });
    };
    ShoppingItemComponent.prototype.editItem = function (form) {
        var _this = this;
        var newItem = {
            _id: this.selectedItem._id,
            itemName: form.value.itemName,
            itemQuantity: form.value.itemQuantity,
            itemBought: this.selectedItem.itemBought
        };
        this.dataService.updateShoppingItem(newItem).subscribe(function (result) {
            _this.getItems();
        });
        this.toggleForm = !this.toggleForm;
    };
    ShoppingItemComponent.prototype.showEditForm = function (item) {
        this.selectedItem = item;
        this.toggleForm = !this.toggleForm;
    };
    ShoppingItemComponent.prototype.updateItemCheckbox = function (item) {
        var _this = this;
        item.itemBought = !item.itemBought;
        this.dataService.updateShoppingItem(item).subscribe(function (result) {
            _this.getItems();
        });
    };
    ShoppingItemComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    return ShoppingItemComponent;
}());
ShoppingItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-shopping-item',
        template: __webpack_require__("../../../../../src/app/shopping-item/shopping-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-item/shopping-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _b || Object])
], ShoppingItemComponent);

var _a, _b;
//# sourceMappingURL=shopping-item.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map