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
var VoterComponent = (function () {
    function VoterComponent() {
        this.onVoted = new core_1.EventEmitter();
        this.voted = false;
    }
    VoterComponent.prototype.vote = function (agreed) {
        this.onVoted.emit(agreed);
        this.voted = true;
    };
    return VoterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], VoterComponent.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VoterComponent.prototype, "onVoted", void 0);
VoterComponent = __decorate([
    core_1.Component({
        selector: 'my-voter',
        template: "\n    <h4>{{name}}</h4>\n    <button (click)=\"vote(true)\"  [disabled]=\"voted\">Agree</button>\n    <button (click)=\"vote(false)\" [disabled]=\"voted\">Disagree</button>\n  "
    })
], VoterComponent);
exports.VoterComponent = VoterComponent;
//# sourceMappingURL=voter.component.js.map