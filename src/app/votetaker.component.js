"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VoteTakerComponent = (function () {
    function VoteTakerComponent() {
        this.agreed = 0;
        this.disagreed = 0;
        this.voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
    }
    VoteTakerComponent.prototype.onVoted = function (agreed) {
        agreed ? this.agreed++ : this.disagreed++;
    };
    return VoteTakerComponent;
}());
VoteTakerComponent = __decorate([
    core_1.Component({
        selector: 'vote-taker',
        template: "\n    <h2>Should mankind colonize the Universe?</h2>\n    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>\n    <my-voter *ngFor=\"let voter of voters\"\n      [name]=\"voter\"\n      (onVoted)=\"onVoted($event)\">\n    </my-voter>\n  "
    })
], VoteTakerComponent);
exports.VoteTakerComponent = VoteTakerComponent;
//# sourceMappingURL=votetaker.component.js.map