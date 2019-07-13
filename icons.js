"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
/**
 * @title Basic icons
 */
var IconOverviewExample = /** @class */ (function () {
    // tslint:disable-next-line: component-class-suffix
    function IconOverviewExample() {
    }
    IconOverviewExample = __decorate([
        core_1.Component({
            // tslint:disable-next-line: component-selector
            selector: 'icon-overview-example',
            templateUrl: 'icon-overview-example.html',
            styleUrls: ['icon-overview-example.css']
        })
        // tslint:disable-next-line: component-class-suffix
    ], IconOverviewExample);
    return IconOverviewExample;
}());
exports.IconOverviewExample = IconOverviewExample;
