import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/infra/app-module/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
