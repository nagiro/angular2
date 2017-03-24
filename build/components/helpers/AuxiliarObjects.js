"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var ErrorEmitter = (function () {
    function ErrorEmitter() {
        this.ErrorEmitter = new Subject_1.Subject();
    }
    ErrorEmitter.prototype.throwError = function (E) {
        E.tipus = E.CONST_DANGER;
        this.ErrorEmitter.next(E);
    };
    ErrorEmitter.prototype.throwSuccess = function (E) {
        E.tipus = E.CONST_SUCCESS;
        this.ErrorEmitter.next(E);
    };
    return ErrorEmitter;
}());
exports.ErrorEmitter = ErrorEmitter;
var ErrorList = (function () {
    //Entra un objecte json 
    function ErrorList(json) {
        this.LlistatErrors = [];
        this.CONST_DANGER = 0;
        this.CONST_SUCCESS = 1;
        this.CONST_WARNING = 2;
        this.tipus = this.CONST_WARNING;
    }
    return ErrorList;
}());
exports.ErrorList = ErrorList;
var ErrorModel = (function () {
    function ErrorModel(id, text, description) {
        this.id = id;
        this.text = text;
        this.description = description;
    }
    return ErrorModel;
}());
exports.ErrorModel = ErrorModel;
//# sourceMappingURL=AuxiliarObjects.js.map