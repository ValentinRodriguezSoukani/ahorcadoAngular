import { NgModule } from '@angular/core'; // Importa el módulo NgModule desde la biblioteca '@angular/core'. Se utiliza para definir y configurar un módulo de Angular.
import { RouterModule, Routes } from '@angular/router'; // Importa los módulos RouterModule y Routes desde la biblioteca '@angular/router'. Se utilizan para configurar las rutas de navegación en una aplicación Angular.

const routes: Routes = []; // Declara una variable llamada 'routes' de tipo 'Routes' y la inicializa como un arreglo vacío. Este arreglo se utilizará más adelante para configurar las rutas de navegación de la aplicación.

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa el módulo RouterModule y configura las rutas raíz utilizando la variable 'routes'. La función 'forRoot' configura las rutas principales de la aplicación.
  exports: [RouterModule] // Exporta el módulo RouterModule para que esté disponible para otros módulos de la aplicación.
})
export class AppRoutingModule { } // Exporta la clase 'AppRoutingModule' como un módulo Angular. Esta clase se utiliza para configurar las rutas de navegación en la aplicación.
