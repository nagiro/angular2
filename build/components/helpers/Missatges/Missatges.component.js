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
var Missatges_service_1 = require("../../helpers/Missatges/Missatges.service");
var MissatgesComponent = (function () {
    //Carrego els missatges quan vagin arribant pel service
    function MissatgesComponent(_MS) {
        var _this = this;
        //Entrem el SiteID per saber què carreguem
        this.SiteID = 1;
        this.MissatgesSuccess = [];
        this.MissatgesError = [];
        _MS.LlistatMissatgesSuccess.subscribe(function (Missatge) {
            _this.MissatgesSuccess.push(Missatge);
            setTimeout(function () { _this.MissatgesSuccess = []; }, 10000);
        });
        _MS.LlistatMissatgesError.subscribe(function (Missatge) {
            _this.MissatgesError.push(Missatge);
            setTimeout(function () { _this.MissatgesError = []; }, 10000);
        });
    }
    MissatgesComponent.prototype.ngOnInit = function () {
    };
    return MissatgesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MissatgesComponent.prototype, "SiteID", void 0);
MissatgesComponent = __decorate([
    core_1.Component({
        selector: 'missatges-view',
        templateUrl: 'app/components/helpers/Missatges/Missatges.template.html',
        providers: []
    }),
    __metadata("design:paramtypes", [Missatges_service_1.MissatgesService])
], MissatgesComponent);
exports.MissatgesComponent = MissatgesComponent;
//# sourceMappingURL=agenda.component.js.map 
//# sourceMappingURL=Missatges.component.js.map