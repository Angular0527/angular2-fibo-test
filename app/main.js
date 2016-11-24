"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    { provide: http_1.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
]);
//# sourceMappingURL=main.js.map