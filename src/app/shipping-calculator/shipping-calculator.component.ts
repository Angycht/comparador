import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shipping-calculator',
  templateUrl: './shipping-calculator.component.html',
  styleUrls: ['./shipping-calculator.component.css']
})
export class ShippingCalculatorComponent {
  // Datos iniciales por defecto
  tipoEnvio: string = 'Paquete';
  origen: { pais: string; cp: string } = { pais: 'España', cp: '' };
  destino: { pais: string; cp: string } = { pais: 'España', cp: '' };
  peso: number = 1;
  dimensiones: { largo: number; ancho: number; alto: number } = {
    largo: 0,
    ancho: 0,
    alto: 0

  };
  precio: number | null = null; // Precio calculado
  mensaje: string = ''; // Mensaje de error o éxito
paisesEuropeos = [
    'Albania', 'Alemania', 'Andorra', 'Armenia', 'Austria', 'Azerbaiyán','Baleares', 'Bélgica', 'Bielorrusia', 'Bosnia y Herzegovina', 'Bulgaria','Canarias','Ceuta',
    'Chipre', 'Croacia', 'Dinamarca', 'Eslovaquia', 'Eslovenia', 'España', 'Estonia', 'Finlandia', 'Francia', 'Georgia',
    'Grecia', 'Hungría', 'Irlanda', 'Islandia', 'Italia', 'Kazajistán', 'Kosovo', 'Letonia', 'Liechtenstein', 'Lituania',
    'Luxemburgo', 'Malta','Melilla', 'Moldavia', 'Mónaco', 'Montenegro', 'Noruega', 'Países Bajos', 'Polonia', 'Portugal', 'Rumanía',
    'Rusia', 'San Marino', 'Serbia', 'Suecia', 'Suiza', 'Turquía', 'Ucrania', 'Uzbekistán', 'Vaticano', 'Yugoslavia'
  ];
  constructor(private http: HttpClient) {}

  // Método para calcular el precio
  calcularPrecio() {
    // Crear objeto con los datos del formulario
    const datos = {
      tipoEnvio: this.tipoEnvio,
      origen: this.origen,
      destino: this.destino,
      peso: this.peso,
      dimensiones: this.dimensiones,
    };

    // Enviar solicitud HTTP al backend
    this.http.post('http://localhost/ComparadorEnvio/index.php', datos).subscribe(
      (response: any) => {
        if (response.success) {
          // Si el cálculo fue exitoso, mostrar precio y mensaje
          this.precio = response.precio;
          this.mensaje = response.mensaje;
        } else {
          // Mostrar mensaje de error del servidor
          this.mensaje = response.mensaje;
        }
      },
      (error) => {
        // En caso de error de red o conexión
        this.mensaje = 'Error al calcular el precio. Inténtelo más tarde.';
        console.error(error);
      }
    );
  }
}
