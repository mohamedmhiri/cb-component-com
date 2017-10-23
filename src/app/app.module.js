"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var astronaut_component_1 = require("./astronaut.component");
var countdown_parent_component_1 = require("./countdown-parent.component");
var countdown_timer_component_1 = require("./countdown-timer.component");
var hero_child_component_1 = require("./hero-child.component");
var hero_parent_component_1 = require("./hero-parent.component");
var missioncontrol_component_1 = require("./missioncontrol.component");
var name_child_component_1 = require("./name-child.component");
var name_parent_component_1 = require("./name-parent.component");
var version_child_component_1 = require("./version-child.component");
var version_parent_component_1 = require("./version-parent.component");
var voter_component_1 = require("./voter.component");
var votetaker_component_1 = require("./votetaker.component");
var directives = [
    app_component_1.AppComponent,
    astronaut_component_1.AstronautComponent,
    countdown_timer_component_1.CountdownTimerComponent,
    hero_child_component_1.HeroChildComponent,
    hero_parent_component_1.HeroParentComponent,
    missioncontrol_component_1.MissionControlComponent,
    name_child_component_1.NameChildComponent,
    name_parent_component_1.NameParentComponent,
    version_child_component_1.VersionChildComponent,
    version_parent_component_1.VersionParentComponent,
    voter_component_1.VoterComponent,
    votetaker_component_1.VoteTakerComponent
];
var schemas = [];
// Include Countdown examples
// unless in e2e tests which they break.
if (!/e2e/.test(location.search)) {
    console.log('adding countdown timer examples');
    directives.push(countdown_parent_component_1.CountdownLocalVarParentComponent);
    directives.push(countdown_parent_component_1.CountdownViewChildParentComponent);
}
else {
    // In e2e test use CUSTOM_ELEMENTS_SCHEMA to supress unknown element errors
    schemas.push(core_1.CUSTOM_ELEMENTS_SCHEMA);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        declarations: directives,
        bootstrap: [app_component_1.AppComponent],
        schemas: schemas
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map