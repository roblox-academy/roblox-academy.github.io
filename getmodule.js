"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var MyOwnCustomMaterialModule = /** @class */ (function () {
    function MyOwnCustomMaterialModule() {
    }
    MyOwnCustomMaterialModule = __decorate([
        core_1.NgModule({
            imports: [material_1.MatButtonModule, material_1.MatCheckboxModule, material_1.MatNavList, material_1.MatToolbarModule, material_1.MatToolbar, material_1.MatToolbarModule, material_1.MatSlider],
            exports: [material_1.MatButtonModule, material_1.MatCheckboxModule, material_1.MatNavList, material_1.MatToolbarModule, material_1.MatToolbar, material_1.MatToolbarModule, material_1.MatSlider]
        })
    ], MyOwnCustomMaterialModule);
    return MyOwnCustomMaterialModule;
}());
exports.MyOwnCustomMaterialModule = MyOwnCustomMaterialModule;
