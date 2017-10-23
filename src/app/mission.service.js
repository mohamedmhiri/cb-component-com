"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var MissionService = (function () {
    function MissionService() {
        // Observable string sources
        this.missionAnnouncedSource = new Subject_1.Subject();
        this.missionConfirmedSource = new Subject_1.Subject();
        // Observable string streams
        this.missionAnnounced$ = this.missionAnnouncedSource.asObservable();
        this.missionConfirmed$ = this.missionConfirmedSource.asObservable();
    }
    // Service message commands
    MissionService.prototype.announceMission = function (mission) {
        this.missionAnnouncedSource.next(mission);
    };
    MissionService.prototype.confirmMission = function (astronaut) {
        this.missionConfirmedSource.next(astronaut);
    };
    return MissionService;
}());
MissionService = __decorate([
    core_1.Injectable()
], MissionService);
exports.MissionService = MissionService;
//# sourceMappingURL=mission.service.js.map