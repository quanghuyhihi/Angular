import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // import provider
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideToastr(),provideAnimations(),provideClientHydration()],
};


//Import config.ts
// Code service inject HttpClient => getProductList .get()
// call api page Home: ngOnInit (LifeCyle) -> chay UI render