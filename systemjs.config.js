/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app',
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular'

    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },

        '@angular/common': { defaultExtension: 'js', main: 'index.js' },
        '@angular/compiler': { defaultExtension: 'js', main: 'index.js' },
        '@angular/core': { defaultExtension: 'js', main: 'index.js' },
        '@angular/http': { defaultExtension: 'js', main: 'index.js' },
        '@angular/platform-browser': { defaultExtension: 'js', main: 'index.js' },
        '@angular/platform-browser-dynamic': { defaultExtension: 'js', main: 'index.js' },
        '@angular/router': { defaultExtension: 'js', main: 'index.js' },

    };

    var packageNames = [
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router'
    ];

    // add package entries for angular packages in the form 
    // '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);