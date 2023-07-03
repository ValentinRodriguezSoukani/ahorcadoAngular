// Importar el decorador NgModule del módulo "@angular/core"
import { NgModule } from "@angular/core";
// Importar el módulo CommonModule del paquete "@angular/common"
import { CommonModule } from '@angular/common';
// Importar el componente IngresarPalabraComponent del archivo "./ingresar-palabra/ingresar-palabra.component"
import { IngresarPalabraComponent } from "./ingresar-palabra/ingresar-palabra.component";
// Importar el módulo FormsModule del paquete "@angular/forms"
import { FormsModule } from "@angular/forms";
// Importar el componente AgregarPalabraComponent del archivo "./agregar-palabra/agregar-palabra.component"
import { AgregarPalabraComponent } from './agregar-palabra/agregar-palabra.component';

// Definir el módulo de componentes
@NgModule({
    // Declarar los componentes que pertenecen a este módulo
    declarations: [
        IngresarPalabraComponent,
        AgregarPalabraComponent,
    ],
    // Importar los módulos que se requieren para los componentes declarados
    imports: [
        FormsModule,
        CommonModule
    ],
    // Exportar los componentes para que puedan ser utilizados en otros módulos
    exports: [
        IngresarPalabraComponent,
        AgregarPalabraComponent,
    ]
})
// Exportar la clase del módulo de componentes
export class ComponentsModule { }