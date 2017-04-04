"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/**
* Classe per crear un element d'una llista
**/
var SelectValue = (function () {
    // Entro un id i un text
    function SelectValue(key, text) {
        this.id = key;
        this.text = text;
    }
    return SelectValue;
}());
exports.SelectValue = SelectValue;
/**
* COMPONENT PER CREAR UNA LLISTA DE SELECCIÓ SENZILLA
**/
var SelectHelperComponent = (function () {
    function SelectHelperComponent() {
        this.placeholder = "";
        this.defaultValue = [];
        this.items = [];
        this.onChangeValue = new core_1.EventEmitter();
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
        var E = new SelectValue(0, "---");
        this.items.push(E);
        this.defaultValue.push(E);
    }
    Object.defineProperty(SelectHelperComponent.prototype, "disabledV", {
        get: function () {
            return this._disabledV;
        },
        set: function (value) {
            this._disabledV = value;
            this.disabled = this._disabledV === '1';
        },
        enumerable: true,
        configurable: true
    });
    SelectHelperComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
        this.onChangeValue.emit(value.id);
    };
    SelectHelperComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    SelectHelperComponent.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    SelectHelperComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    return SelectHelperComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SelectHelperComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SelectHelperComponent.prototype, "defaultValue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SelectHelperComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SelectHelperComponent.prototype, "onChangeValue", void 0);
SelectHelperComponent = __decorate([
    core_1.Component({
        selector: 'single-select',
        templateUrl: 'app/components/helpers/Selects/SingleSelectHelper.template.html'
    }),
    __metadata("design:paramtypes", [])
], SelectHelperComponent);
exports.SelectHelperComponent = SelectHelperComponent;
/**
* COMPONENT PER CREAR UNA LLISTA DE SI I NO
**/
var SiNoSelectHelper = (function (_super) {
    __extends(SiNoSelectHelper, _super);
    function SiNoSelectHelper() {
        var _this = _super.call(this) || this;
        _this.items.push(new SelectValue(2, "No"));
        _this.items.push(new SelectValue(1, "Sí"));
        _this.defaultValue = [new SelectValue(2, "No")];
        return _this;
    }
    return SiNoSelectHelper;
}(SelectHelperComponent));
SiNoSelectHelper = __decorate([
    core_1.Component({
        selector: 'single-sino-select',
        templateUrl: 'app/components/helpers/Selects/SingleSelectHelper.template.html'
    }),
    __metadata("design:paramtypes", [])
], SiNoSelectHelper);
exports.SiNoSelectHelper = SiNoSelectHelper;
//# sourceMappingURL=SelectHelperComponent.js.map