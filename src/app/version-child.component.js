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
/* tslint:disable:forin */
var core_1 = require("@angular/core");
var VersionChildComponent = (function () {
    function VersionChildComponent() {
        this.changeLog = [];
    }
    VersionChildComponent.prototype.ngOnChanges = function (changes) {
        var log = [];
        for (var propName in changes) {
            var changedProp = changes[propName];
            var to = JSON.stringify(changedProp.currentValue);
            if (changedProp.isFirstChange()) {
                log.push("Initial value of " + propName + " set to " + to);
            }
            else {
                var from = JSON.stringify(changedProp.previousValue);
                log.push(propName + " changed from " + from + " to " + to);
            }
        }
        this.changeLog.push(log.join(', '));
    };
    return VersionChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VersionChildComponent.prototype, "major", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], VersionChildComponent.prototype, "minor", void 0);
VersionChildComponent = __decorate([
    core_1.Component({
        selector: 'version-child',
        template: "\n    <h3>Version {{major}}.{{minor}}</h3>\n    <h4>Change log:</h4>\n    <ul>\n      <li *ngFor=\"let change of changeLog\">{{change}}</li>\n    </ul>\n  "
    })
], VersionChildComponent);
exports.VersionChildComponent = VersionChildComponent;
//# sourceMappingURL=version-child.component.js.map