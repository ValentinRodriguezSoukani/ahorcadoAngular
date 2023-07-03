import { NgModule } from '@angular/core'; // Importa el módulo NgModule desde la biblioteca '@angular/core'.
import { BrowserModule } from '@angular/platform-browser'; // Importa el módulo BrowserModule desde la biblioteca '@angular/platform-browser'.
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule desde la biblioteca '@angular/common'.

import { AppRoutingModule } from './app-routing.module'; // Importa el módulo AppRoutingModule desde el archivo './app-routing.module'.
import { AppComponent } from './app.component'; // Importa el componente AppComponent desde el archivo './app.component'.
import { FormsModule } from '@angular/forms'; // Importa el módulo FormsModule desde la biblioteca '@angular/forms'.
import { ComponentsModule } from './components/components.module'; // Importa el módulo ComponentsModule desde el archivo './components/components.module'.

import { AngularFireModule } from '@angular/fire/compat'; // Importa el módulo AngularFireModule desde la biblioteca '@angular/fire/compat'.
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; // Importa el módulo AngularFireDatabaseModule desde la biblioteca '@angular/fire/compat/database'.
import { environment } from '../environments/environment'; // Importa el objeto environment desde el archivo '../environments/environment'.

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
