"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NameChildComponent = (function () {
    function NameChildComponent() {
        this._name = '';
    }
    Object.defineProperty(NameChildComponent.prototype, "name", {
        get: function () { return this._name; },
        set: function (name) {
            this._name = (name && name.trim()) || '<no name set>';
        },
        enumerable: true,
        configurable: true
    });
    return NameChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NameChildComponent.prototype, "name", null);
NameChildComponent = __decorate([
    core_1.Component({
        selector: 'name-child',
        template: '<h3>"{{name}}"</h3>'
    })
], NameChildComponent);
exports.NameChildComponent = NameChildComponent;
//# sourceMappingURL=name-child.component.js.map