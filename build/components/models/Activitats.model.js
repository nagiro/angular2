"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActivitatsModel = (function () {
    function ActivitatsModel() {
        this.ActivitatID = 0;
        this.Cicles_CicleID = 0;
        this.TipusActivitat_idTipusActivitat = 0;
        this.Nom = "";
        this.Preu = 0;
        this.PreuReduit = 0;
        this.Publicable = 0;
        this.Estat = "";
        this.Descripcio = "";
        this.Imatge = "";
        this.PDF = "";
        this.PublicaWEB = 0;
        this.tCurt = "";
        this.dCurt = "";
        this.tMig = "";
        this.dMig = "";
        this.tComplet = "";
        this.dComplet = "";
        this.tipusEnviament = 0;
        this.Organitzador = "";
        this.Categories = "";
        this.Responsable = "";
        this.InfoPractica = "";
        this.site_id = 0;
        this.actiu = 0;
        this.isEntrada = 0;
        this.Places = 0;
        this.isImportant = 0;
    }
    ActivitatsModel.prototype.setNom = function (c) { this.Nom = c; };
    ActivitatsModel.prototype.setOrganitzador = function (c) { this.Organitzador = c; };
    ActivitatsModel.prototype.setResponsable = function (c) { this.Responsable = c; };
    ActivitatsModel.prototype.setCicle = function (c) { this.Cicles_CicleID = c; };
    ActivitatsModel.prototype.setFormat = function (c) { this.TipusActivitat_idTipusActivitat = c; };
    ActivitatsModel.prototype.setEstat = function (c) { this.Estat = String(c); };
    ActivitatsModel.prototype.setAvisarHospici = function (c) { this.isImportant = c; };
    return ActivitatsModel;
}());
exports.ActivitatsModel = ActivitatsModel;
var ActivitatsSelectModel = (function () {
    // El puc construir a partir d'un JSON
    function ActivitatsSelectModel(Activitat) {
        this.id = Activitat.ActivitatID;
        this.text = Activitat.Nom;
    }
    return ActivitatsSelectModel;
}());
exports.ActivitatsSelectModel = ActivitatsSelectModel;
/**
* Quan rebo una resposta del php.
**/
var ActivitatsArray = (function () {
    function ActivitatsArray(Llistat) {
        this.Llistat = [];
        this.LlistatSelect = [];
        this.Llistat = Llistat.json();
    }
    ActivitatsArray.prototype.getLlistatSelect = function () {
        for (var _i = 0, _a = this.Llistat; _i < _a.length; _i++) {
            var tmp = _a[_i];
            this.LlistatSelect.push(new ActivitatsSelectModel(tmp));
        }
        return this.LlistatSelect;
    };
    ActivitatsArray.prototype.getLlistat = function () {
        return this.Llistat;
    };
    return ActivitatsArray;
}());
exports.ActivitatsArray = ActivitatsArray;
//# sourceMappingURL=Activitats.model.js.map