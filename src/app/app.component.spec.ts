import { TestBed } from '@angular/core/testing';  // Importa la clase TestBed desde el módulo de pruebas de Angular
import { RouterTestingModule } from '@angular/router/testing';  // Importa la clase RouterTestingModule desde el módulo de pruebas de enrutamiento de Angular
import { AppComponent } from './app.component';  // Importa la clase AppComponent desde el archivo app.component.ts

describe('AppComponent', () => {  // Inicia la descripción de las pruebas para el componente AppComponent

  beforeEach(async () => {  // Antes de cada prueba, realiza las siguientes acciones de forma asíncrona
    await TestBed.configureTestingModule({  // Configura el entorno de prueba utilizando TestBed
      imports: [
        RouterTestingModule  // Importa el módulo de pruebas de enrutamiento
      ],
      declarations: [
        AppComponent  // Declara el componente AppComponent
      ],
    }).compileComponents();  // Compila los componentes declarados
  });

  it('should create the app', () => {  // Prueba: debería crear la aplicación
    const fixture = TestBed.createComponent(AppComponent);  // Crea una instancia del componente AppComponent
    const app = fixture.componentInstance;  // Obtiene una referencia a la instancia del componente
    expect(app).toBeTruthy();  // Comprueba que la instancia del componente exista
  });

  it(`should have as title 'ahorcadoAngular'`, () => {  // Prueba: debería tener el título 'ahorcadoAngular'
    const fixture = TestBed.createComponent(AppComponent);  // Crea una instancia del componente AppComponent
    const app = fixture.componentInstance;  // Obtiene una referencia a la instancia del componente
    expect(app.title).toEqual('ahorcadoAngular');  // Comprueba que el título del componente sea igual a 'ahorcadoAngular'
  });

  it('should render title', () => {  // Prueba: debería mostrar el título
    const fixture = TestBed.createComponent(AppComponent);  // Crea una instancia del componente AppComponent
    fixture.detectChanges();  // Detecta los cambios en los componentes
    const compiled = fixture.nativeElement as HTMLElement;  // Obtiene el elemento HTML raíz del componente
    expect(compiled.querySelector('.content span')?.textContent).toContain('ahorcadoAngular app is running!');  // Comprueba que el contenido del elemento HTML contenga el texto 'ahorcadoAngular app is running!'
  });
});