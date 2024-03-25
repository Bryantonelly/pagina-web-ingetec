import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({ transform: 'translateY(50px) rotateX(-90deg)', opacity: 0 })
      ),
      transition(
        ':enter',
        animate(
          '58s cubic-bezier(0.35, 0, 0.25, 1)',
          style({ transform: 'translateY(0) rotateX(0)', opacity: 1 })
        )
      ),
    ]),
  ],
})
export class NosotrosComponent implements OnInit {
  showAnimation = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const cardPosition = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (cardPosition.top < windowHeight * 0.75) {
      this.showAnimation = true;
    }
  }
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  items = [1, 2, 3, 4, 5, 6];

  addSlide() {
    const lastItem = this.items[this.items.length - 1];
    this.items.push(lastItem + 1);
  }

  documentos = [
    {
      nombre: 'Procedimiento de Recepción de Regalos',
      url: 'assets/pdf/Procedimiento_de_Recepcion_de_Regalos.pdf',
    },
    {
      nombre: 'Política Antisoborno',
      url: 'assets/pdf/Politica_Antisoborno.pdf',
    },
    {
      nombre: 'Código de Conducta del Proveedor',
      url: 'assets/pdf/Codigo_de_Conducta_del_Proveedor.pdf',
    },
  ];
}
