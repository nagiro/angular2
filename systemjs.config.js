/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

    var paths = {
        'npm:': 'node_modules/'
    }
    // map tells the System loader where to look for things    
    var map = {
        'app': 'build',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        'ng2-bootstrap': 'npm:ng2-bootstrap',        
        'ng2-select': 'npm:ng2-select/bundles/ng2-select.umd.min.js',        


        // other libraries
        'rxjs':                       'npm:rxjs',
        'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
        'ng2-bootstrap': 'npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
        'ng2-select': 'npm:ng2-select/bundles/ng2-select.umd.min.js',
        'angular2-text-mask': 'npm:angular2-text-mask/dist/angular2TextMask.js',
        'text-mask-core': 'npm:text-mask-core',
        'ng2-date-picker': 'npm:ng2-date-picker',
        'moment': 'npm:moment/min/moment.min.js',
        'angular2-moment': 'npm:angular2-moment'
    };

    //Dic què he de carregar... si per exemple tots els js o què?
    var packages = { 
            app:  { main: './main.js', defaultExtension: 'js' },
            rxjs: { defaultExtension: 'js' },
            'angular2-in-memory-web-api': { main: './index.js', defaultExtension: 'js' },
            'text-mask-core': { defaultExtension: 'js' } ,
            'ng2-date-picker': { main: './bin/app/index.js', defaultExtension: 'js' },
            'angular2-moment': { main: './index.js', defaultExtension: 'js' },
         };

    var config = {
        paths: paths,
        map: map,
        packages: packages        
    };

    System.config(config);

})(this);