"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EspaisModel = (function () {
    function EspaisModel() {
    }
    return EspaisModel;
}());
exports.EspaisModel = EspaisModel;
var EspaisSelectModel = (function () {
    // El puc construir a partir d'un JSON
    function EspaisSelectModel(Espai) {
        this.id = Espai.EspaiID;
        this.text = Espai.Nom;
    }
    return EspaisSelectModel;
}());
exports.EspaisSelectModel = EspaisSelectModel;
/**
* Quan rebo una resposta del php.
**/
var EspaisArray = (function () {
    function EspaisArray(Llistat) {
        this.Llistat = [];
        this.LlistatSelect = [];
        this.Llistat = Llistat.json();
    }
    EspaisArray.prototype.getLlistatSelect = function () {
        for (var _i = 0, _a = this.Llistat; _i < _a.length; _i++) {
            var tmp = _a[_i];
            this.LlistatSelect.push(new EspaisSelectModel(tmp));
        }
        return this.LlistatSelect;
    };
    EspaisArray.prototype.getLlistat = function () {
        return this.Llistat;
    };
    return EspaisArray;
}());
exports.EspaisArray = EspaisArray;
var EspaisExternsModel = (function () {
    function EspaisExternsModel() {
    }
    return EspaisExternsModel;
}());
exports.EspaisExternsModel = EspaisExternsModel;
//# sourceMappingURL=Espais.model.js.map