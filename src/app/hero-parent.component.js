"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var HeroParentComponent = (function () {
    function HeroParentComponent() {
        this.heroes = hero_1.HEROES;
        this.master = 'Master';
    }
    return HeroParentComponent;
}());
HeroParentComponent = __decorate([
    core_1.Component({
        selector: 'hero-parent',
        template: "\n    <h2>{{master}} controls {{heroes.length}} heroes</h2>\n    <hero-child *ngFor=\"let hero of heroes\"\n      [hero]=\"hero\"\n      [master]=\"master\">\n    </hero-child>\n  "
    })
], HeroParentComponent);
exports.HeroParentComponent = HeroParentComponent;
//# sourceMappingURL=hero-parent.component.js.map