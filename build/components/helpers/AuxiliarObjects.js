"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var MessageEmitter = (function () {
    function MessageEmitter() {
        this.MessageEmitter = new Subject_1.Subject();
    }
    MessageEmitter.prototype.throwError = function (E) {
        E.tipus = E.CONST_DANGER;
        this.MessageEmitter.next(E);
    };
    MessageEmitter.prototype.throwSuccess = function (E) {
        E.tipus = E.CONST_SUCCESS;
        this.MessageEmitter.next(E);
    };
    return MessageEmitter;
}());
exports.MessageEmitter = MessageEmitter;
var MessageList = (function () {
    //Entra un objecte json 
    function MessageList(MM) {
        this.LlistatMessages = [];
        this.CONST_DANGER = 0;
        this.CONST_SUCCESS = 1;
        this.CONST_WARNING = 2;
        this.tipus = this.CONST_WARNING;
        if (MM instanceof String) {
            MM = new Array();
            MM.push(new MessageModel(0, MM, MM.toString()));
            console.log(MM.toString());
        }
        else if (MM instanceof Array) {
        }
    }
    return MessageList;
}());
exports.MessageList = MessageList;
var MessageModel = (function () {
    function MessageModel(id, text, description) {
        this.id = 0;
        this.text = "";
        this.description = "";
        this.id = id;
        this.text = text;
        this.description = description;
    }
    return MessageModel;
}());
exports.MessageModel = MessageModel;
//# sourceMappingURL=AuxiliarObjects.js.map