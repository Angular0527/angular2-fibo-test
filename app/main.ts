import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, XHRBackend} from '@angular/http';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  {provide: XHRBackend, useClass: InMemoryBackendService},
]);