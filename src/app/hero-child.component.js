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
var hero_1 = require("./hero");
var HeroChildComponent = (function () {
    function HeroChildComponent() {
    }
    return HeroChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroChildComponent.prototype, "hero", void 0);
__decorate([
    core_1.Input('master'),
    __metadata("design:type", String)
], HeroChildComponent.prototype, "masterName", void 0);
HeroChildComponent = __decorate([
    core_1.Component({
        selector: 'hero-child',
        template: "\n    <h3>{{hero.name}} says:</h3>\n    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>\n  "
    })
], HeroChildComponent);
exports.HeroChildComponent = HeroChildComponent;
//# sourceMappingURL=hero-child.component.js.map