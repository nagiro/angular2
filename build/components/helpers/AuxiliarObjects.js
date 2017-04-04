"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
var MessageEmitter = (function () {
    function MessageEmitter() {
        this.MessageEmitter = new Subject_1.Subject();
    }
    MessageEmitter.prototype.throwErrorHttp = function (R) {
        if (R.status == 400) {
            var MEH = R.json();
            var Missatges = [new MessageModel(MEH.code, MEH.message)];
            this.MessageEmitter.next(Missatges);
        }
        else {
            var Missatges = [new MessageModel(R.status, R.toString())];
            this.MessageEmitter.next(Missatges);
        }
    };
    MessageEmitter.prototype.getSubject = function () {
        return this.MessageEmitter;
    };
    return MessageEmitter;
}());
exports.MessageEmitter = MessageEmitter;
var MessageModel = (function () {
    function MessageModel(id, text) {
        this.id = 0;
        this.text = "";
        this.id = id;
        this.text = text;
    }
    return MessageModel;
}());
exports.MessageModel = MessageModel;
//# sourceMappingURL=AuxiliarObjects.js.map