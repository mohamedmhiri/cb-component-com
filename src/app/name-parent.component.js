"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NameParentComponent = (function () {
    function NameParentComponent() {
        // Displays 'Mr. IQ', '<no name set>', 'Bombasto'
        this.names = ['Mr. IQ', '   ', '  Bombasto  '];
    }
    return NameParentComponent;
}());
NameParentComponent = __decorate([
    core_1.Component({
        selector: 'name-parent',
        template: "\n  <h2>Master controls {{names.length}} names</h2>\n  <name-child *ngFor=\"let name of names\" [name]=\"name\"></name-child>\n  "
    })
], NameParentComponent);
exports.NameParentComponent = NameParentComponent;
//# sourceMappingURL=name-parent.component.js.map