"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Subject_1 = require("rxjs/Subject");
var AuxiliarObjects_1 = require("../AuxiliarObjects");
var MissatgesService = (function () {
    function MissatgesService() {
        // Observable string sources
        this._LlistatMissatgesSuccess = new Subject_1.Subject();
        this._LlistatMissatgesError = new Subject_1.Subject();
        // Observable string streams
        this.LlistatMissatgesSuccess = this._LlistatMissatgesSuccess.asObservable();
        this.LlistatMissatgesError = this._LlistatMissatgesError.asObservable();
    }
    // Service message commands
    MissatgesService.prototype.addSuccess = function ($M) {
        this._LlistatMissatgesSuccess.next($M);
    };
    // Service message commands
    MissatgesService.prototype.addError = function ($where, $M) {
        if ($M instanceof http_1.Response) {
            var E = "Error a (" + $where + "): " + $M.toString();
            if (!$M.ok)
                this._LlistatMissatgesError.next(new AuxiliarObjects_1.MessageModel($M.status, E));
        }
        else {
            this._LlistatMissatgesError.next($M);
        }
    };
    return MissatgesService;
}());
MissatgesService = __decorate([
    core_1.Injectable()
], MissatgesService);
exports.MissatgesService = MissatgesService;
//# sourceMappingURL=Missatges.service.js.map