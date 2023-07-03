// Importar la función platformBrowserDynamic del módulo '@angular/platform-browser-dynamic'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importar el módulo AppModule desde el archivo './app/app.module'
import { AppModule } from './app/app.module';

// Llamar a la función platformBrowserDynamic y usarla para iniciar el módulo AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));