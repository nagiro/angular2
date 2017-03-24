"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var agenda_component_js_1 = require("./agenda.component.js");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ng2_select_1 = require("ng2-select");
var SelectHelperComponent_1 = require("../helpers/SelectHelperComponent");
var ModalHelperComponent_1 = require("../helpers/ModalHelperComponent");
var AgendaModule = (function () {
    function AgendaModule() {
    }
    return AgendaModule;
}());
AgendaModule = __decorate([
    core_1.NgModule({
        declarations: [
            agenda_component_js_1.AgendaComponent,
            SelectHelperComponent_1.SelectHelperComponent,
            SelectHelperComponent_1.SiNoSelectHelper,
            ModalHelperComponent_1.ModalHelperComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ng2_bootstrap_1.TooltipModule.forRoot(),
            ng2_bootstrap_1.TabsModule.forRoot(),
            ng2_bootstrap_1.ModalModule.forRoot(),
            ng2_select_1.SelectModule,
            forms_1.FormsModule
        ],
        providers: [],
        exports: [agenda_component_js_1.AgendaComponent],
        bootstrap: [agenda_component_js_1.AgendaComponent]
    })
], AgendaModule);
exports.AgendaModule = AgendaModule;
//# sourceMappingURL=agenda.module.js.map