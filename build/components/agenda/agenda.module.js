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
var agenda_component_js_1 = require("./components/agenda.component.js");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ng2_select_1 = require("ng2-select");
var SelectHelperComponent_1 = require("../helpers/Selects/SelectHelperComponent");
var ErrorComponent_1 = require("../helpers/Modals/ErrorComponent");
var ModalComponent_1 = require("../helpers/Modals/ModalComponent");
var filtre_component_1 = require("./components/filtre.component");
var calendari_component_1 = require("./components/calendari.component");
var llistat_component_1 = require("./components/llistat.component");
var edicio_component_1 = require("./components/edicio.component");
var angular2_text_mask_1 = require("angular2-text-mask");
var ng2_date_picker_1 = require("ng2-date-picker");
var Missatges_component_1 = require("../helpers/Missatges/Missatges.component");
var angular2_moment_1 = require("angular2-moment");
var PopoverComponent_1 = require("../helpers/Modals/PopoverComponent");
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
            filtre_component_1.FiltreAgendaComponent,
            calendari_component_1.CalendariComponent,
            llistat_component_1.LlistatComponent,
            edicio_component_1.EditaActivitatComponent,
            ModalComponent_1.ModalComponent,
            ErrorComponent_1.ErrorComponent,
            Missatges_component_1.MissatgesComponent,
            PopoverComponent_1.PopoverCalendarComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ng2_bootstrap_1.TooltipModule.forRoot(),
            ng2_bootstrap_1.TabsModule.forRoot(),
            ng2_bootstrap_1.ModalModule.forRoot(),
            ng2_bootstrap_1.PopoverModule.forRoot(),
            ng2_select_1.SelectModule,
            forms_1.FormsModule,
            angular2_text_mask_1.TextMaskModule,
            ng2_date_picker_1.DpDatePickerModule,
            angular2_moment_1.MomentModule
        ],
        providers: [],
        exports: [agenda_component_js_1.AgendaComponent],
        bootstrap: [agenda_component_js_1.AgendaComponent]
    })
], AgendaModule);
exports.AgendaModule = AgendaModule;
//# sourceMappingURL=agenda.module.js.map