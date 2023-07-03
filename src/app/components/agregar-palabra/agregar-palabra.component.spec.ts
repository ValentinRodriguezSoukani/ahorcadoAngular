// Importar las funciones ComponentFixture y TestBed desde el módulo '@angular/core/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importar el componente AgregarPalabraComponent desde './agregar-palabra.component'
import { AgregarPalabraComponent } from './agregar-palabra.component';

// Crear una descripción del conjunto de pruebas llamado 'AgregarPalabraComponent'
describe('AgregarPalabraComponent', () => {
  let component: AgregarPalabraComponent; // Declarar una variable 'component' de tipo AgregarPalabraComponent
  let fixture: ComponentFixture<AgregarPalabraComponent>; // Declarar una variable 'fixture' de tipo ComponentFixture<AgregarPalabraComponent>

  // Antes de cada prueba, realizar las siguientes tareas de forma asíncrona
  beforeEach(async () => {
    // Configurar el entorno de pruebas utilizando TestBed
    await TestBed.configureTestingModule({
      declarations: [ AgregarPalabraComponent ] // Declarar el componente AgregarPalabraComponent en el entorno de pruebas
    })
    .compileComponents(); // Compilar los componentes del entorno de pruebas

    // Crear una instancia del componente AgregarPalabraComponent dentro de 'fixture'
    fixture = TestBed.createComponent(AgregarPalabraComponent);
    // Asignar la instancia del componente AgregarPalabraComponent a la variable 'component'
    component = fixture.componentInstance;
    // Detectar los cambios en el componente y sus hijos
    fixture.detectChanges();
  });

  // Prueba: debería crear el componente
  it('should create', () => {
    // Verificar que la variable 'component' exista (no sea nula)
    expect(component).toBeTruthy();
  });
});