"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CiclesModel = (function () {
    function CiclesModel() {
    }
    return CiclesModel;
}());
exports.CiclesModel = CiclesModel;
var CiclesSelectModel = (function () {
    // El puc construir a partir d'un JSON
    function CiclesSelectModel(Cicle) {
        this.id = Cicle.CicleID;
        this.text = Cicle.Nom;
    }
    return CiclesSelectModel;
}());
exports.CiclesSelectModel = CiclesSelectModel;
/**
* Quan rebo una resposta del php.
**/
var CiclesArray = (function () {
    function CiclesArray(Llistat) {
        this.Llistat = [];
        this.LlistatSelect = [];
        this.Llistat = Llistat.json();
    }
    CiclesArray.prototype.getLlistatSelect = function () {
        for (var _i = 0, _a = this.Llistat; _i < _a.length; _i++) {
            var tmp = _a[_i];
            this.LlistatSelect.push(new CiclesSelectModel(tmp));
        }
        return this.LlistatSelect;
    };
    CiclesArray.prototype.getLlistat = function () {
        return this.Llistat;
    };
    return CiclesArray;
}());
exports.CiclesArray = CiclesArray;
//# sourceMappingURL=Cicles.model.js.map