import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  showAnimation = false;
  altCover: string = 'CONTÁCTANOS';
  imgCover: string = 'assets\\img\\carousel\\12.png';
  nombre: string = '';
  empresa: string = '';
  telefono: string = '';
  email: string = '';
  descripcion: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitForm() {
    const nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    const empresa = (<HTMLInputElement>document.getElementById('empresa'))
      .value;
    const telefono = (<HTMLInputElement>document.getElementById('telefono'))
      .value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const descripcion = (<HTMLInputElement>(
      document.getElementById('descripcion')
    )).value;

    const recipientEmail =
      'compliance.officer@ingetecperu.com;atencionalcliente@ingetecperu.com';
    const subject = 'Consulta';
    const body = `
      Esta persona quiere comunicarse desde la página web:
      
      Nombre y Apellidos: ${nombre}
      Empresa (Opcional): ${empresa}
      Teléfono de Contacto: ${telefono}
      Email: ${email}
      Descripción: ${descripcion}
    `;

    const mailto = `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(
      body
    )}`;
    window.location.href = mailto;
  }
}
