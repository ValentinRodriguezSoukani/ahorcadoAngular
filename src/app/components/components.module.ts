import { NgModule } from "@angular/core";
import { IngresarPalabraComponent } from "./ingresar-palabra/ingresar-palabra.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        IngresarPalabraComponent,
      ],
    imports: [
      FormsModule
    ],
    exports: [
      IngresarPalabraComponent
    ]
  })
  export class ComponentsModule { }