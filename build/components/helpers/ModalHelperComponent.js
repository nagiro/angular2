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
var ng2_bootstrap_1 = require("ng2-bootstrap");
var core_1 = require("@angular/core");
var AuxiliarObjects_1 = require("./AuxiliarObjects");
var ModalHelperComponent = (function () {
    function ModalHelperComponent() {
        this.E = new AuxiliarObjects_1.ErrorEmitter();
        this.text = "";
        this.isModalShown = true;
    }
    ModalHelperComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Vinculem a una entrada d'info de l'objecte
        this.E.ErrorEmitter.subscribe(function (event) { _this.showModalError(event); });
    };
    ModalHelperComponent.prototype.ngOnDestroy = function () {
        this.E.ErrorEmitter.unsubscribe();
    };
    ModalHelperComponent.prototype.showModalError = function (E) {
        this.text = E.LlistatErrors.toString();
        console.log(E);
        this.autoShownModal.show();
    };
    ModalHelperComponent.prototype.hideModal = function () {
        this.isModalShown = false;
    };
    return ModalHelperComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", AuxiliarObjects_1.ErrorEmitter)
], ModalHelperComponent.prototype, "E", void 0);
__decorate([
    core_1.ViewChild('autoShownModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ModalHelperComponent.prototype, "autoShownModal", void 0);
ModalHelperComponent = __decorate([
    core_1.Component({
        selector: 'resposta-web-modal',
        templateUrl: 'app/components/helpers/ModalHelperComponent.template.html'
    })
], ModalHelperComponent);
exports.ModalHelperComponent = ModalHelperComponent;
//# sourceMappingURL=ModalHelperComponent.js.map