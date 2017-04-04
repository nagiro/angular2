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
var AuxiliarObjects_1 = require("../../helpers/AuxiliarObjects");
var ErrorComponent = (function () {
    function ErrorComponent() {
        //this.Error = new MessageEmitter();
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", AuxiliarObjects_1.MessageEmitter)
], ErrorComponent.prototype, "Error", void 0);
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'error-view',
        template: '<modal-view [Missatge]="Error"></modal-view>',
        providers: []
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;
//# sourceMappingURL=agenda.component.js.map 
//# sourceMappingURL=ErrorComponent.js.map