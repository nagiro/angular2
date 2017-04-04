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
var AuxiliarObjects_1 = require("../AuxiliarObjects");
var ModalComponent = (function () {
    function ModalComponent() {
        this.Missatge = new AuxiliarObjects_1.MessageEmitter();
        this.isModalShown = true;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Vinculem a una entrada d'info de l'objecte
        this.Missatge.getSubject().subscribe(function (event) { _this.showModalMessage(event); });
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.Missatge.getSubject().unsubscribe();
    };
    ModalComponent.prototype.showModalMessage = function (E) {
        this.text = E;
        this.autoShownModal.show();
    };
    ModalComponent.prototype.hideModal = function () {
        this.isModalShown = false;
    };
    return ModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", AuxiliarObjects_1.MessageEmitter)
], ModalComponent.prototype, "Missatge", void 0);
__decorate([
    core_1.ViewChild('autoShownModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], ModalComponent.prototype, "autoShownModal", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'modal-view',
        templateUrl: 'app/components/helpers/Modals/ModalComponent.template.html'
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=ModalComponent.js.map